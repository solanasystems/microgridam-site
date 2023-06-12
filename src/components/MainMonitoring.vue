<script>
export default {
  name: "main-monitoring",
  data() {
    return {

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

      <div class="flex flex-wrap flex-row -mx-4 text-center">

        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp" data-wow-duration="1s">
          <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div class="inline-block text-slate-500 mb-4">
              <font-awesome-icon :icon="['fas', 'chart-line']" size="3x"></font-awesome-icon>
            </div>
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Monitoring</h3>
            <p class="text-gray-500">Track your Energy Production.</p>
          </div>
        </div>

        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
          <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div class="inline-block text-slate-500 mb-4">
              <font-awesome-icon :icon="['fas', 'video']" size="3x"></font-awesome-icon>
            </div>
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Security</h3>
            <p class="text-gray-500">Cameras with human presence detection alerts.</p>
          </div>
        </div>

        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
          <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div class="inline-block text-slate-500 mb-4">
              <font-awesome-icon :icon="['fas', 'display']" size="3x"></font-awesome-icon>
            </div>
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Online Dashboard</h3>
            <p class="text-gray-500">Secure Dashboard for monitoring your Microgrid Sites.</p>
          </div>
        </div>

        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
          <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div class="inline-block text-slate-500 mb-4">
              <font-awesome-icon :icon="['fas', 'bell']" size="3x"></font-awesome-icon>
            </div>
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Notifications</h3>
            <p class="text-gray-500">Customizable alerts for system operations and security.</p>
          </div>
        </div>

      </div><!-- end row -->

      <!--div class="flex flex-wrap flex-row">
        <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s">
          <div class="relative overflow-hidden cursor-pointer mb-6">
            <a href="/src/assets/logo.svg" data-gallery="gallery1" data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
              <img class="block w-full h-auto transform duration-500 grayscale hover:scale-125" src="/src/assets/logo.svg" alt="Image Description">
              <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                <h3 class="text-base leading-normal font-semibold my-1 text-white">Logo Design</h3>
                <small class="d-block">Branding</small>
              </div>
            </a>
          </div>
        </figure>

        <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
          <div class="relative overflow-hidden cursor-pointer mb-6">
            <a href="/src/assets/logo.svg" data-gallery="gallery1" data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
              <img class="block w-full h-auto transform duration-500 grayscale hover:scale-125" src="/src/assets/logo.svg" alt="Image Description">
              <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                <h3 class="text-base leading-normal font-semibold my-1 text-white">Web Development</h3>
                <small class="d-block">Web</small>
              </div>
            </a>
          </div>
        </figure>

        <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
          <div class="relative overflow-hidden cursor-pointer mb-6">
            <a href="/src/assets/logo.svg" data-gallery="gallery1" data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
              <img class="block w-full h-auto transform duration-500 grayscale hover:scale-125" src="/src/assets/logo.svg" alt="Image Description">
              <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                <h3 class="text-base leading-normal font-semibold my-1 text-white">Graphic Design</h3>
                <small class="d-block">Graphic</small>
              </div>
            </a>
          </div>
        </figure>

        <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
          <div class="relative overflow-hidden cursor-pointer mb-6">
            <a href="src/img/dummy/img4.jpg" data-gallery="gallery1" data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
              <img class="block w-full h-auto transform duration-500 grayscale hover:scale-125" src="/src/assets/logo.svg" alt="Image Description">
              <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                <h3 class="text-base leading-normal font-semibold my-1 text-white">Logo Design</h3>
                <small class="d-block">Branding</small>
              </div>
            </a>
          </div>
        </figure>

        <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
          <div class="relative overflow-hidden cursor-pointer mb-6">
            <a href="/src/assets/logo.svg" data-gallery="gallery1" data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
              <img class="block w-full h-auto transform duration-500 grayscale hover:scale-125" src="/src/assets/logo.svg" alt="Image Description">
              <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                <h3 class="text-base leading-normal font-semibold my-1 text-white">Web Development</h3>
                <small class="d-block">Web</small>
              </div>
            </a>
          </div>
        </figure>
      </div-->

    </div> <!-- end container -->
  </div><!--  End Content -->
</template>