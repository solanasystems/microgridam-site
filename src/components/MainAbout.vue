<script>
export default {
  name: "main-about",
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<template>
  <div id="about" class="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <!-- section header -->
      <header class="text-center mx-auto mb-12">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">Team</h2>
        <div class="section-hr"></div>
      </header><!-- end section header -->

      <!-- row -->
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
          <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s">
            <!-- team block -->
            <div class="relative overflow-hidden px-6">
              <img src="/src/assets/logo.svg" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
            </div>
            <div class="pt-6 text-center">
              <p class="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
              <p class="text-gray-500 leading-relaxed font-light">Founder CEO</p>
            </div>
          </div><!-- end team block -->
        </div>

        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
          <!-- team block -->
          <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
            <div class="relative overflow-hidden px-6">
              <img src="/src/assets/logo.svg" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
            </div>
            <div class="pt-6 text-center">
              <p class="text-lg leading-normal font-bold mb-1">Sarah Daeva</p>
              <p class="text-gray-500 leading-relaxed font-light">Marketing</p>
            </div>
          </div><!-- end team block -->
        </div>

        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
          <!-- team block -->
          <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div class="relative overflow-hidden px-6">
              <img src="/src/assets/logo.svg" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
            </div>
            <div class="pt-6 text-center">
              <p class="text-lg leading-normal font-bold mb-1">Daniel Emo</p>
              <p class="text-gray-500 leading-relaxed font-light">Sales manager</p>
            </div>
          </div><!-- end team block -->
        </div>

        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
          <!-- team block -->
          <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
            <div class="relative overflow-hidden px-6">
              <img src="/src/assets/logo.svg" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
            </div>
            <div class="pt-6 text-center">
              <p class="text-lg leading-normal font-bold mb-1">Toni Lana</p>
              <p class="text-gray-500 leading-relaxed font-light">UI/UX Designer</p>
            </div>
          </div><!-- end team block -->
        </div>
      </div><!-- end row -->
    </div>
  </div><!-- End Team-->
</template>