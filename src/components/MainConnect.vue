<script>
export default {
  name: "main-connect",
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<template>
  <div id="connect" class="section relative pb-20 bg-white dark:bg-gray-800">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <div class="max-w-ful px-4 w-full lg:w-8/12">
          <div class="bg-gray-50 border-b border-gray-100 w-full p-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
            <!-- section header -->
            <header class="text-center mx-auto mb-12 lg:px-20">
              <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">Connect</h2>
              <div class="section-hr"></div>
              <p class="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">Have questions about our services? Contact us.</p>
            </header><!-- end section header -->

            <!-- contact form -->
            <form action="#">
              <div class="flex flex-wrap flex-row -mx-4">
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="full_name">
                    Your Name
                    <font-awesome-icon :icon="['fas', 'star-of-life']"></font-awesome-icon>
                  </label>
                  <input type="text" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="full_name" id="full_name">
                  <div class="validate"></div>
                </div>
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="email">
                    Your Email
                    <font-awesome-icon :icon="['fas', 'star-of-life']"></font-awesome-icon>
                  </label>
                  <input type="email" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="email" id="email">
                  <div class="validate"></div>
                </div>
              </div>
              <div class="flex flex-wrap flex-row -mx-4">
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="name">Phone</label>
                  <input type="tel" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="phone" id="phone">
                  <div class="validate"></div>
                </div>
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="email">Address</label>
                  <input type="text" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="address" id="address">
                  <div class="validate"></div>
                </div>
              </div>
              <div class="mb-6">
                <label class="inline-block mb-2" for="subject">Subject</label>
                <input type="text" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="subject" id="subject">
                <div class="validate"></div>
              </div>
              <div class="mb-6">
                <label class="inline-block mb-2" for="messages">Message</label>
                <textarea class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="message" rows="10" id="messages"></textarea>
                <div class="validate"></div>
              </div>
              <div class="text-center mb-6">
                <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0" href="#project">
                  <span class="button-icon"><font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon></span>
                  <span class="ml-3">Send Message</span>
                </a>
              </div>
            </form><!-- end contact form -->
          </div>
        </div>
      </div>
    </div>
  </div><!-- End contact -->


</template>