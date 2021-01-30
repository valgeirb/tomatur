<template>
  <div class="h-full flex flex-col space-y-4 text-lg pt-12">
    <div class="flex flex-col divide-y-2 divide-gray-100 dark:divide-gray-800">
      <div class="flex justify-between py-6">
        <div>Session</div>
        <select
          v-model="sessionMinutes"
          class="text-tomato bg-white dark:bg-gray-900"
          name="sessionMinutes"
        >
          <option
            v-for="sessionMinutes in sessionMinutesOptions"
            :key="sessionMinutes"
            :value="sessionMinutes"
          >
            {{ sessionMinutes }} minutes
          </option>
        </select>
      </div>

      <div class="flex justify-between py-6">
        <div>Small break</div>
        <select
          v-model="shortBreakMinutes"
          class="text-tomato bg-white dark:bg-gray-900"
          name="shortBreakMinutes"
        >
          <option
            v-for="shortBreakMinutes in shortBreakMinutesOptions"
            :key="shortBreakMinutes"
            :value="shortBreakMinutes"
          >
            {{ shortBreakMinutes }} minutes
          </option>
        </select>
      </div>

      <div class="flex justify-between py-6">
        <div>Long break</div>
        <select
          v-model="longBreakMinutes"
          class="text-tomato bg-white dark:bg-gray-900"
          name="longBreakMinutes"
        >
          <option
            v-for="longBreakMinutes in longBreakMinutesOptions"
            :key="longBreakMinutes"
            :value="longBreakMinutes"
          >
            {{ longBreakMinutes }} minutes
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
        <Toggle v-model="darkTheme" @update:modelValue="toggleTheme" />
      </div>

      <div class="flex justify-between py-6">
        <div>Question mark</div>
        <Toggle v-model="showInfoButton" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import useSettings from "../composables/useSettings";
  import { Toggle } from "../components";

  const {
    sessionMinutes,
    shortBreakMinutes,
    longBreakMinutes,
    notifications,
    sound,
    darkTheme,
    showInfoButton,
    toggleTheme,
  } = useSettings();

  const sessionMinutesOptions = [25, 30, 35, 40, 50, 60, 70, 80, 90];
  const shortBreakMinutesOptions = [5, 10, 15];
  const longBreakMinutesOptions = [15, 20, 30];
</script>
