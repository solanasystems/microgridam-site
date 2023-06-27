<script>
export default {
  name: "main-solutions",
  data() {
    return {

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

      <!-- row -->
      <div class="flex flex-wrap flex-row -mx-4 text-center">

        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
          <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer" @click="goto('System Ownership')" href="#contact" v-smooth-scroll>
            <div class="inline-block brand-color mb-4">
              <font-awesome-icon :icon="['far', 'lightbulb']" size="3x"></font-awesome-icon>
            </div>
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">System Ownership</h3>
            <p class="text-gray-500">Make an upfront investment and take advantage of the new Inflation Reduction Act (IRA) government incentives.</p>
          </div>
        </div>

        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
          <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer" @click="goto('Financing Options')" href="#contact" v-smooth-scroll>
            <div class="inline-block brand-color mb-4">
              <font-awesome-icon :icon="['fas', 'building-columns']" size="3x"></font-awesome-icon>
            </div>
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Financing Options</h3>
            <p class="text-gray-500">Explore tailored financial portfolios designed to meet your energy goals.</p>
          </div>
        </div>

        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
          <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer" @click="goto('Energy As A Service')" href="#contact" v-smooth-scroll>
            <div class="inline-block brand-color mb-4">
              <font-awesome-icon :icon="['fas', 'bolt']" size="3x"></font-awesome-icon>
            </div>
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Energy As A Service (EAAS)</h3>
            <p class="text-gray-500">This no money down option allows you to purchase energy at a predetermined cost per kW for your next 20 years.</p>
          </div>
        </div>

      </div><!-- end row -->

    </div> <!-- end container -->
  </div><!-- End Solutions -->
</template>