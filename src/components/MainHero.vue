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
              <h1 class="text-4xl leading-normal text-black font-bold mb-4 text-slate-400">Control Your Energy, Control Your Future</h1>
              <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2"><!-- subtext --></p>
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
      </div>
    </div>
  </div>
</template>