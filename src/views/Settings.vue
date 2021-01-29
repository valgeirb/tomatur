<template>
  <div class="h-full flex flex-col space-y-4 text-lg pt-12">
    <div class="flex flex-col pt-4">
      <div class="flex justify-between py-6">
        <div>Session</div>
        <select
          v-model="session"
          class="text-tomato bg-white"
          name="session"
          id="session"
        >
          <option value="25">25 minutes</option>
          <option value="30">30 minutes</option>
          <option value="35">35 minutes</option>
          <option value="40">40 minutes</option>
          <option value="50">50 minutes</option>
          <option value="60">60 minutes</option>
          <option value="70">70 minutes</option>
          <option value="80">80 minutes</option>
          <option value="80">80 minutes</option>
          <option value="90">90 minutes</option>
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
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
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
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
          <option value="30">30 minutes</option>
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
</script>
