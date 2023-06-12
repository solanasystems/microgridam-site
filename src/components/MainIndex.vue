<style lang="css">
  .section-hr {
    border-bottom: 2px solid #94a3b8; /* slate-400 */
    width: 75px;
    margin: 0 auto;
  }
  .button-icon {
    font-size: 1.5em;
  }
</style>
<script setup>
import { ref } from 'vue'
import MainHero from './MainHero.vue'
import MainSolutions from './MainSolutions.vue'
import MainMonitoring from './MainMonitoring.vue'
import MainAbout from './MainAbout.vue'
import MainContact from './MainContact.vue'

</script>

<template>
  <main id="content" class="">
    <main-hero/>
    <main-solutions/>
    <main-monitoring/>
    <main-about/>
    <main-contact/>
  </main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
