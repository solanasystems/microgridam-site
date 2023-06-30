<style type="css">
  .spotlight img {
    width: 300px;
    height: 300px;
  }
</style>
<script>
import { ref, nextTick } from 'vue';
// import CoolLightBox from 'vue-cool-lightbox'
// import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import MainShowcaseCard from './MainShowcaseCard.vue';
export default {
  name: "main-monitoring",
  components: {
    MainShowcaseCard,
    // CoolLightBox,
  },
  data() {
    return {
      loaded: false,
      images: [
        {
          title: "Ducted Wind Turbine",
          src: "/showcase/ducted_wind_d3.jpeg",
        },
        {
          title: "442 Wind Turbine",
          src: "/showcase/442_solar.jpeg",
        },
        {
          title: "Ducted Wind Turbine",
          src: "/showcase/ductedwind_hq.jpeg",
          position: 'object-left-top',
        },
        {
          title: "Solar 50kWh",
          src: "/showcase/2532_50kWh.jpeg",
        },
        {
          title: "Solar 500kWh",
          src: "/showcase/2776_500kWh.jpeg",
        },
      ],
      index: null,
    }
  },
  methods: {
  },
}

</script>

<template>
  <div id="showcase" class="section relative z-0 py-12 md:py-16 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <header class="text-center mx-auto mb-12 lg:px-20">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Our Work</h2>
        <div class="section-hr"></div>
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2"><!-- subtext --></p>
      </header>

      <div class="flex flex-wrap flex-row text-center justify-center">
        <main-showcase-card v-for="(pic,idx) in images" :pic="pic" :key="'showcase-' + idx" :index="idx"/>
      </div>

    </div> <!-- end container -->
  </div><!--  End Content -->
</template>