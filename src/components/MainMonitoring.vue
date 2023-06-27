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
    goto(subject) {
      this.emitter.emit('landing_contact', subject);
    },
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

        <main-solution-card v-for="info in solutions" :info="info" size_classes="w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6" />

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

        <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group>>
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