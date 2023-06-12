<script>
export default {
  name: "main-connect",
  data() {
    return {
      reply_to: "info@microgridsolutions.energy",
      access_key: "bac13424-b0a3-4e4d-b5f6-3e25e2497bb9",
      form: {
        dirty: false,
        name: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        message: '',
      }
    }
  },
  methods: {
    send_message() {
      console.log('Verify & Send');
      
    },
  }
}

</script>

<template>
  <div id="contact" class="section relative pb-20 bg-white dark:bg-gray-800">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <div class="max-w-ful px-4 w-full lg:w-8/12">
          <div class="bg-gray-50 border-b border-gray-100 w-full p-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
            <!-- section header -->
            <header class="text-center mx-auto mb-12 lg:px-20">
              <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">Contact Us</h2>
              <div class="section-hr"></div>
              <p class="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">Have questions about our services? Contact us.</p>
            </header><!-- end section header -->

            <!-- contact form -->
            <!--form action="https://api.staticforms.xyz/submit" method="post"-->
            <form action="#">
              <input type="hidden" name="accessKey" :value="access_key" />
              <input type="hidden" name="replyTo" :value="reply_to" />
              <div class="flex flex-wrap flex-row -mx-4">
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="name">
                    Your Name
                    <font-awesome-icon :icon="['fas', 'star-of-life']"></font-awesome-icon>
                  </label>
                  <input type="text" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" :class="{'border-red-500': form.dirty && !form.name}" name="name" id="name">
                  <div class="text-red-500 text-xs italic" :class="{'hidden': !form.dirty || form.name}">Please fill in your name.</div>
                </div>
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="email">
                    Your Email
                    <font-awesome-icon :icon="['fas', 'star-of-life']"></font-awesome-icon>
                  </label>
                  <input type="email" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" :class="{'border-red-500': form.dirty && !form.email}" name="email" id="email">
                  <div class="text-red-500 text-xs italic" :class="{'hidden': !form.dirty || form.email}">Please fill in your email address.</div>
                </div>
              </div>
              <div class="flex flex-wrap flex-row -mx-4">
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="name">Phone</label>
                  <input type="tel" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="phone" id="phone">
                  <div class="text-red-500 text-xs italic" :class="{'hidden': !form.dirty || form.phone}"></div>
                </div>
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="email">Address</label>
                  <input type="text" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="$myCustomField1" id="address">
                  <div class="text-red-500 text-xs italic" :class="{'hidden': form.dirty && !form.address}"></div>
                </div>
              </div>
              <div class="mb-6">
                <label class="inline-block mb-2" for="subject">Subject</label>
                <input type="text" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="subject" id="subject">
                <div class="text-red-500 text-xs italic" :class="{'hidden': form.dirty && !form.subject}"></div>
              </div>
              <div class="mb-6">
                <label class="inline-block mb-2" for="message">Message</label>
                <textarea class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="message" rows="10" id="message"></textarea>
                <div class="text-red-500 text-xs italic" :class="{'hidden': form.dirty && !form.message}"></div>
              </div>
              <input type="text" name="honeypot" style="display: none;" />
              <div class="text-center mb-6">
                <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:text-slate-400 hover:ring-0 focus:outline-none focus:ring-0" href="javascript://" @click="send_message">
                  <span class="button-icon"><font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon></span>
                  <span class="ml-3">Contact Us</span>
                </a>
              </div>
            </form><!-- end contact form -->
          </div>
        </div>
      </div>
    </div>
  </div><!-- End contact -->


</template>