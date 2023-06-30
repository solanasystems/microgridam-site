<script>
import MainSolutionCard from './MainSolutionCard.vue';
export default {
  name: "main-monitoring",
  components: {MainSolutionCard},
  data() {
    return {
      solutions: [
        {
          title: "Online Dashboard",
          icon: ['fas', 'display'],
          description: "Secure Dashboard for monitoring your Microgrid Sites.",
        },
        {
          title: "Monitoring",
          icon: ['fas', 'chart-line'],
          description: "Track your Energy Production.",
        },
        {
          title: "Security",
          icon: ['fas', 'video'],
          description: "Cameras with A.I. human presence detection alerts.",
        },
        {
          title: "Notifications",
          icon: ['fas', 'bell'],
          description: "Customizable alerts for system operations and security.",
        },
      ],
    }
  },
  methods: {

  }
}

</script>

<template>
  <div id="monitoring" class="section relative z-0 py-12 md:py-16 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <header class="text-center mx-auto mb-12 lg:px-20">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Monitoring</h2>
        <div class="section-hr"></div>
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Keep track of your Microgrid Energy Production & Security.</p>
      </header>

      <div class="flex flex-wrap flex-row -mx-4 text-center justify-center">
        <main-solution-card v-for="info in solutions" :info="info" size_classes="w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6" />
      </div>



    </div> <!-- end container -->
  </div><!--  End Content -->
</template>