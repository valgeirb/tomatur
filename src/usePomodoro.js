import { reactive, computed, toRefs } from "vue";
import * as workerTimers from "worker-timers";

export default function usePomodoro() {
  const state = reactive({
    minutes: 25,
    seconds: 0,
    session: {
      pomodoros: 0,
    },
  });

  let intervalId = null;

  const start = (initialTimeInMinutes) => {
    let time = initialTimeInMinutes * 60;

    intervalId = workerTimers.setInterval(() => {
      state.minutes = Math.floor(time / 60);
      state.seconds = time % 60;
      time--;
      if (time === 0) {
        console.log("Timer done", initialTimeInMinutes);
        state.session.pomodoros++;
        start(0.5);
        /* if (state.session.pomodoros % 4 === 0) {
          start(2);
        } */
      }
    }, 1000);
  };

  const stop = () => {
    workerTimers.clearInterval(intervalId);
    state.minutes = 25;
    state.seconds = 0;
  };

  const timeLeft = computed(() => {
    let minutes = state.minutes < 10 ? `0${state.minutes}` : state.minutes;
    let seconds = state.seconds < 10 ? `0${state.seconds}` : state.seconds;

    return `${minutes}:${seconds}`;
  });

  return {
    ...toRefs(state),
    start,
    stop,
    timeLeft,
  };
}
