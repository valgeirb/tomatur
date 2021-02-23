import { reactive, computed, toRefs, watch } from "vue";
import * as workerTimers from "worker-timers";
import useSettings from "./useSettings";
import useSound from "./useSound";
import bell from "../assets/bell.wav";

const {
  sessionMinutes,
  shortBreakMinutes,
  longBreakMinutes,
  sound,
} = useSettings();
const { play } = useSound(bell);

let state = reactive({
  started: false,
  paused: false,
  mode: "pomodoro",
  modes: {
    pomodoro: sessionMinutes.value,
    shortBreak: shortBreakMinutes.value,
    longBreak: longBreakMinutes.value,
  },
  pomodoros: 0,
  initialRemainingSeconds: sessionMinutes.value * 60,
  remainingSeconds: sessionMinutes.value * 60,
});

watch([sessionMinutes, shortBreakMinutes, longBreakMinutes], (newValues) => {
  updateState(...newValues);
});

const updateState = (sessionMinutes, shortBreakMinutes, longBreakMinutes) => {
  state.modes.pomodoro = sessionMinutes;
  state.modes.shortBreak = shortBreakMinutes;
  state.modes.longBreak = longBreakMinutes;
  state.initialRemainingSeconds = sessionMinutes * 60;
  state.remainingSeconds = sessionMinutes * 60;
};

export default function usePomodoro() {
  let intervalId = null;

  const start = () => {
    state.paused = false;
    state.started = true;
    intervalId = workerTimers.setInterval(() => {
      state.remainingSeconds--;
      if (state.remainingSeconds === 0) {
        workerTimers.clearInterval(intervalId);
        intervalId = null;
        if (sound.value) {
          play();
        }
        // Continuously switches between pomodoro mode and break mode (short/long)
        switch (state.mode) {
          case "pomodoro":
            state.pomodoros++;
            if (state.pomodoros === 4) {
              state.pomodoros = 0;
              switchMode("longBreak");
            } else {
              switchMode("shortBreak");
            }
            break;
          default:
            switchMode("pomodoro");
        }
        state.paused = true;
      }
    }, 1000);
  };

  const stop = () => {
    console.log("wat");
    state.started = false;
    state.paused = false;
    if (intervalId) {
      workerTimers.clearInterval(intervalId);
    }
    state.pomodoros = 0;
    switchMode("pomodoro");
  };

  const switchMode = (mode) => {
    state.mode = mode;
    state.remainingSeconds = state.modes[mode] * 60;
    state.initialRemainingSeconds = state.modes[mode] * 60;
  };

  const clock = computed(() => {
    const minutes = Math.floor(state.remainingSeconds / 60);
    const seconds = state.remainingSeconds % 60;

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${paddedMinutes}:${paddedSeconds}`;
  });

  const percentage = computed(
    () => (state.remainingSeconds / state.initialRemainingSeconds) * 100,
  );

  return {
    ...toRefs(state),
    start,
    stop,
    clock,
    percentage,
  };
}
