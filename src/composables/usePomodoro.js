import { reactive, computed, toRefs, watch } from "vue";
import * as workerTimers from "worker-timers";
import useSettings from "./useSettings";

const { sessionMinutes, shortBreakMinutes, longBreakMinutes } = useSettings();

const state = reactive({
  currentMode: "pomodoro",
  modes: {
    pomodoro: sessionMinutes.value,
    shortBreak: shortBreakMinutes.value,
    longBreak: longBreakMinutes.value,
  },
  pomodoros: 0,
  remainingSeconds: sessionMinutes.value * 60,
});

watch(
  [sessionMinutes, shortBreakMinutes, longBreakMinutes],
  ([sessionMinutes, shortBreakMinutes, longBreakMinutes]) => {
    state.modes.pomodoro = sessionMinutes;
    state.modes.shortBreak = shortBreakMinutes;
    state.modes.longBreak = longBreakMinutes;
    state.remainingSeconds = sessionMinutes * 60;
  },
);

export default function usePomodoro() {
  let intervalId = null;

  const start = () => {
    intervalId = workerTimers.setInterval(() => {
      state.remainingSeconds--;
      if (state.remainingSeconds === 0) {
        workerTimers.clearInterval(intervalId);

        // Continuously switches between pomodoro mode and break mode (short/long)
        switch (state.currentMode) {
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
        start();
      }
    }, 1000);
  };

  const stop = () => {
    workerTimers.clearInterval(intervalId);
    state.pomodoros = 0;
    state.mode = "pomodoro";
    state.remainingSeconds = sessionTime.value * 60;
  };

  const switchMode = (mode) => {
    state.currentMode = mode;
    state.remainingSeconds = state.modes[mode] * 60;
  };

  const clock = computed(() => {
    const minutes = Math.floor(state.remainingSeconds / 60);
    const seconds = state.remainingSeconds % 60;

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${paddedMinutes}:${paddedSeconds}`;
  });

  return {
    ...toRefs(state),
    start,
    stop,
    clock,
  };
}
