import { reactive, computed, toRefs, watch } from "vue";
import * as workerTimers from "worker-timers";
import useSettings from "./useSettings";

const { session, shortBreak, longBreak } = useSettings();

const state = reactive({
  mode: "pomodoro", // pomodoro, shortBreak, longBreak
  pomodoros: 0,
  session: session.value,
  shortBreak: shortBreak.value,
  longBreak: longBreak.value,
  remainingTime: session.value * 60,
  minutes: session.value,
  seconds: 0,
});

watch([session, shortBreak, longBreak], ([session, shortBreak, longBreak]) => {
  state.session = session;
  state.shortBreak = shortBreak;
  state.longBreak = longBreak;
  state.remainingTime = session * 60;
  state.minutes = session;
});

export default function usePomodoro() {
  let intervalId = null;

  const start = () => {
    if (state.mode === "pomodoro") {
      state.pomodoros++;
    }

    intervalId = workerTimers.setInterval(() => {
      state.remainingTime--;
      if (state.remainingTime === 0) {
        workerTimers.clearInterval(intervalId);

        // Continuously switches between pomodoro mode and break mode (short/long)
        switch (state.mode) {
          case "pomodoro":
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
    state.minutes = session.value;
    state.seconds = 0;
    state.pomodoros = 0;
    state.mode = "pomodoro";
    state.remainingTime = session.value * 60;
  };

  const switchMode = (mode) => {
    state.mode = mode;
    state.remainingTime = state[mode] * 60;
  };

  const clock = computed(() => {
    state.minutes = Math.floor(state.remainingTime / 60);
    state.seconds = state.remainingTime % 60;

    const minutes = state.minutes < 10 ? `0${state.minutes}` : state.minutes;
    const seconds = state.seconds < 10 ? `0${state.seconds}` : state.seconds;

    return `${minutes}:${seconds}`;
  });

  return {
    ...toRefs(state),
    start,
    stop,
    clock,
  };
}
