<script>
import MainSolutionCard from './MainSolutionCard.vue';
export default {
  name: "main-solutions",
  components: {MainSolutionCard},
  data() {
    return {
      offerings: [
        {
          title: "Solar Power",
          icon: ['fas', 'solar-panel'],
          description: "We offer customized solar arrays based on your power usage and capacity."
        },
        {
          title: "Wind Power",
          icon: ['fas', 'wind'],
          description: "Choose your desired turbine size based on your needs.",
        },
        {
          title: "Battery Storage",
          icon: ['fas', 'battery-full'],
          description: "Use your Energy when you need it.  Keep your business running in the event of a grid outage.",
        },
        {
          title: "Energy Efficiency",
          icon: ['fas', 'magnifying-glass-chart'],
          description: "We can make sure that your facility is as energy efficient as possible to minimize energy waste.",
        },
      ],
      solutions: [
        {
          title: "System Ownership",
          icon: ['far', 'lightbulb'],
          description: "Make an upfront investment and take advantage of the new Inflation Reduction Act (IRA) government incentives.",
        },
        {
          title: "Financing Options",
          icon: ['fas', 'building-columns'],
          description: "Explore tailored financial portfolios designed to meet your energy goals.",
        },
        {
          title: "Energy As A Service (EAAS)",
          icon: ['fas', 'bolt'],
          description: "This no money down option allows you to purchase energy at a predetermined cost per kW for your next 20 years.",
        },
      ],
    }
  },
  methods: {
    goto(subject) {
      this.emitter.emit('landing_contact', subject);
    },
  }
}
</script>

<template>
  <div id="solutions" class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <header class="text-center mx-auto mb-12 lg:px-20">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Solutions</h2>
        <div class="section-hr"></div>
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2"><!-- subtext --></p>
      </header>

      <!-- offering cards -->
      <div class="flex flex-wrap flex-row -mx-4 text-center">
        <main-solution-card v-for="info in offerings" :info="info" size_classes="sm:w-1/2 lg:w-1/4 lg:px-6" />
      </div>

      <!-- solution cards -->
      <div class="flex flex-wrap flex-row -mx-4 text-center">
        <main-solution-card v-for="info in solutions" :info="info" size_classes="sm:w-1/2 lg:w-1/3 lg:px-6" />
      </div>

    </div> <!-- end container -->

  </div><!-- End Solutions -->
</template>