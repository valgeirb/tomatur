<template>
  <div class="h-full flex flex-col space-y-4 text-lg pt-12">
    <div class="flex flex-col divide-y-2 divide-gray-100">
      <div class="flex justify-between py-6">
        <div>Session</div>
        <select
          v-model="session"
          class="text-tomato bg-white"
          name="session"
          id="session"
        >
          <option
            v-for="sessionTime in sessionOptions"
            :key="sessionTime"
            :value="sessionTime"
          >
            {{ sessionTime }} minutes
          </option>
        </select>
      </div>

      <div class="flex justify-between py-6">
        <div>Small break</div>
        <select
          v-model="shortBreak"
          class="text-tomato bg-white"
          name="session"
          id="session"
        >
          <option
            v-for="shortBreakTime in shortBreakOptions"
            :key="shortBreakTime"
            :value="shortBreakTime"
          >
            {{ shortBreakTime }} minutes
          </option>
        </select>
      </div>

      <div class="flex justify-between py-6">
        <div>Long break</div>
        <select
          v-model="longBreak"
          class="text-tomato bg-white"
          name="session"
          id="session"
        >
          <option
            v-for="longBreakTime in longBreakOptions"
            :key="longBreakTime"
            :value="longBreakTime"
          >
            {{ longBreakTime }} minutes
          </option>
        </select>
      </div>

      <div class="flex justify-between py-6">
        <div>Notifications</div>
        <Toggle v-model="notifications" />
      </div>

      <div class="flex justify-between py-6">
        <div>Sound</div>
        <Toggle v-model="sound" />
      </div>

      <div class="flex justify-between py-6">
        <div>Dark theme</div>
        <Toggle v-model="darkTheme" />
      </div>

      <div class="flex justify-between py-6">
        <div>Info button</div>
        <Toggle v-model="showInfoButton" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import useSettings from "../composables/useSettings";
  import { Toggle } from "../components";

  const {
    session,
    shortBreak,
    longBreak,
    notifications,
    sound,
    darkTheme,
    showInfoButton,
  } = useSettings();

  const sessionOptions = [25, 30, 35, 40, 50, 60, 70, 80, 90];
  const shortBreakOptions = [5, 10, 15];
  const longBreakOptions = [15, 20, 30];
</script>
