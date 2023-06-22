<style lang="css">
  .button-icon {
    font-size: 1.5em;
  }
</style>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "main-hero",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  },
  components: { FontAwesomeIcon }
}
</script>

<template>
  <div id="hero" class="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <!-- content -->
        <div class="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
          <img src="/src/assets/hero.svg" class="w-full max-w-full h-auto" alt="">
        </div><!-- end content -->

        <!-- text -->
        <div class="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
          <div class="text-center lg:text-left mt-6 lg:mt-0">
            <div class="mb-12">
              <h1 class="text-4xl leading-normal text-black font-bold mb-4 text-slate-400">We deliver clean,<br />reliable energy.</h1>
              <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">We believe in Reliability, Sustainability, and Affordability.</p>
            </div>
            <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-900 bg-white border-b border-gray-100 hover:text-slate-400 hover:ring-0 focus:outline-none focus:ring-0 mr-4" href="#solutions" v-smooth-scroll>
              <span class="button-icon"><font-awesome-icon :icon="['far', 'lightbulb']"></font-awesome-icon></span>
              <span class="ml-3">Our Solutions</span>
            </a>

            <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border-b border-gray-800 hover:text-slate-400 hover:ring-0 focus:outline-none focus:ring-0" href="#contact" v-smooth-scroll>
              <span class="button-icon"><font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon></span>
              <span class="ml-3">Contact Us</span>
            </a>
          </div>
        </div>


        <!-- row -->
        <div class="mt-10 flex flex-wrap flex-row -mx-4 text-center">

          <div class="flex-shrink px-4 max-w-full w-full sm:w-2/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
            <div class="py-8 px-12 mb-12">
              <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Reliability</h3>
              <p class="text-gray-500">We are committed to providing reliable energy to our customers. This is important because microgrids can provide backup power during outages, which is critical for businesses and communities.</p>
            </div>
          </div>

          <div class="flex-shrink px-4 max-w-full w-full sm:w-2/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
            <div class="py-8 px-12 mb-12">
              <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Sustainability</h3>
              <p class="text-gray-500">We use renewable energy sources to generate and store power, which is vital for the environment by helping reduce company's carbon footprint.</p>
            </div>
          </div>

          <div class="flex-shrink px-4 max-w-full w-full sm:w-2/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div class="py-8 px-12 mb-12">
              <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Affordability</h3>
              <p class="text-gray-500">We are committed to making its energy services affordable for everyone. We believe that energy is a basic necessity, and everyone should have access to it.</p>
            </div>
          </div>

        </div><!-- end row -->


      </div>
    </div>
  </div>
</template>