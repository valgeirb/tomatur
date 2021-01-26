<template>
  <div class="h-full flex flex-col space-y-4 pt-12 text-lg">
    <div class="text-4xl font-bold uppercase text-center">Settings</div>
    <div class="flex flex-col pt-4">
      <div
        class="flex justify-between py-6 border-dashed border-gray-500 border-t-2 border-b-2"
      >
        <div>Session</div>
        <select
          v-model="settings.session"
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

      <div
        class="flex justify-between py-6 border-dashed border-gray-500 border-b-2"
      >
        <div>Small break</div>
        <select
          v-model="settings.smallBreak"
          class="text-tomato bg-white"
          name="session"
          id="session"
        >
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
        </select>
      </div>

      <div
        class="flex justify-between py-6 border-dashed border-gray-500 border-b-2"
      >
        <div>Long break</div>
        <select
          v-model="settings.longBreak"
          class="text-tomato bg-white"
          name="session"
          id="session"
        >
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
          <option value="30">30 minutes</option>
        </select>
      </div>

      <div
        class="flex justify-between py-6 border-dashed border-gray-500 border-b-2"
      >
        <div>Notifications</div>
        <Toggle v-model="settings.notifications" />
      </div>

      <div
        class="flex justify-between py-6 border-dashed border-gray-500 border-b-2"
      >
        <div>Sound</div>
        <Toggle v-model="settings.sound" />
      </div>

      <div
        class="flex justify-between py-6 border-dashed border-gray-500 border-b-2"
      >
        <div>Dark theme</div>
        <Toggle v-model="settings.darkTheme" />
      </div>

      <div
        class="flex justify-between py-6 border-dashed border-gray-500 border-b-2"
      >
        <div>Show info button</div>
        <Toggle v-model="settings.showInfoButton" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import useSettings from "../useSettings";
  import { Toggle } from "../components";

  const { settings } = useSettings();
</script>
