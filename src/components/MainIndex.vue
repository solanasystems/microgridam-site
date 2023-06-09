<script setup>
import { ref } from 'vue'
import MainHero from './MainHero.vue'
import MainServices from './MainServices.vue'
import MainMonitoring from './MainMonitoring.vue'
import MainAbout from './MainAbout.vue'
import MainConnect from './MainConnect.vue'

</script>

<template>
  <main id="content" class="">
    <main-hero/>
    <main-services/>
    <main-monitoring/>
    <main-about/>
    <main-connect/>
  </main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
