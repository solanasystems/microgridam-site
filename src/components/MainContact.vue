<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
export default {
  name: "main-connect",
  components: { FontAwesomeIcon },
  data() {
    return {
      mailto: "Info@MicrogridAM.com",
      form: {
        dirty: false,
        is_sent: false,
        name_valid: true,
        email_valid: true,
        submit_valid: true,
        replyTo: "@",
        accessKey: "c92d6063-2963-4515-8346-e963b46b0174",
        honeypot: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: "",
      }
    };
  },
  methods: {
    send_message() {
      let $this = this;
      this.validate_form(true);
      if (!this.form.submit_valid)
        return;
      this.form["$address"] = this.form.address;
      let request = JSON.stringify(this.form);
      let options = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      axios.post("https://api.staticforms.xyz/submit", request, options)
      .then(function (response) {
        console.log("Sent", response);
        $this.form.is_sent = true;
      }).catch(function (error) {
        console.error("Send Error", error);
      });
    },
    validate_form(whole_form = false) {
      let name = this.form.name;
      if (name || whole_form) {
        this.form.dirty = true;
        if (name.length >= 3) {
          this.form.name_valid = true;
        }
        else {
          this.form.name_valid = false;
        }
      }
      let email = this.form.email;
      if (email || whole_form) {
        this.form.dirty = true;
        if (email.length >= 7 && email.includes("@") && email.includes(".")) {
          this.form.email_valid = true;
        }
        else {
          this.form.email_valid = false;
        }
      }
      if (whole_form || !this.form.submit_valid) {
        if (this.form.name && this.form.email && this.form.name_valid && this.form.email_valid) {
          this.form.submit_valid = true;
        }
        else {
          this.form.submit_valid = false;
        }
      }
    },
  },
  mounted() {
    this.emitter.on("landing_contact", subject => {
      this.form.subject = subject;
    });
  },
  watch: {
    "form.name": function (new_val) {
      if (!this.form.name_valid) {
        this.validate_form();
      }
    },
    "form.email": function (new_val) {
      if (!this.form.email_valid) {
        this.validate_form();
      }
    },
  },
}

</script>

<template>
  <div id="contact" class="section relative pb-20 bg-white dark:bg-gray-800">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap flex-row -mx-4 justify-center">
        <div class="max-w-ful px-4 w-full lg:w-8/12">
          <div class="bg-gray-50 border-b border-gray-100 w-full p-12">

            <header class="text-center mx-auto mb-12 lg:px-20">
              <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">Contact Us</h2>
              <div class="section-hr"></div>
              <p class="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">Have questions about our services? E-Mail us at <a :href="'mailto:' + mailto ">{{ mailto }}</a>.</p>
            </header><!-- end section header -->

            <!-- contact form -->
            <form action="javascript://" class="mb-10" :class="{'hidden': form.is_sent}">
              <input type="hidden" name="accessKey" :value="form.accessKey" />
              <input type="hidden" name="replyTo" :value="form.replyTo" />
              <input type="text" name="honeypot" class="hidden" v-model="form.honeypot" />
              <div class="flex flex-wrap flex-row -mx-4">
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="name">
                    Your Name
                    <font-awesome-icon :icon="['fas', 'star-of-life']"></font-awesome-icon>
                  </label>
                  <input type="text" class="w-full bg-white text-gray-800 border rounded border-gray-100 focus:border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none" :class="{'border-red-500': form.dirty && !form.name_valid}" name="name" id="name" v-model="form.name" @blur="validate_form(false)"/>
                  <div class="text-red-500 text-xs italic" :class="{'hidden': !form.dirty || form.name_valid}">Please fill in your name.</div>
                </div>
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="email">
                    Your Email
                    <font-awesome-icon :icon="['fas', 'star-of-life']"></font-awesome-icon>
                  </label>
                  <input type="email" class="w-full bg-white text-gray-800 border rounded border-gray-100 focus:border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none" :class="{'border-red-500': form.dirty && !form.email_valid}" name="email" id="email" v-model="form.email" @blur="validate_form(false)" />
                  <div class="text-red-500 text-xs italic" :class="{'hidden': !form.dirty || form.email_valid}">Please fill in your email address.</div>
                </div>
              </div>
              <div class="flex flex-wrap flex-row -mx-4">
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="name">Phone</label>
                  <input type="tel" class="w-full bg-white text-gray-800 border rounded border-gray-100 focus:border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none" name="phone" id="phone" v-model="form.phone" />
                  <div class="text-red-500 text-xs italic" :class="{'hidden': !form.dirty || form.phone}"></div>
                </div>
                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                  <label class="inline-block mb-2" for="email">Address</label>
                  <input type="text" class="w-full bg-white text-gray-800 border rounded border-gray-100 focus:border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none" name="$myCustomField1" id="address" v-model="form.address" />
                  <div class="text-red-500 text-xs italic" :class="{'hidden': form.dirty && !form.address}"></div>
                </div>
              </div>
              <div class="mb-6">
                <label class="inline-block mb-2" for="subject">Subject</label>
                <input type="text" class="w-full bg-white text-gray-800 border rounded border-gray-100 focus:border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none" name="subject" id="subject" v-model="form.subject" />
                <div class="text-red-500 text-xs italic" :class="{'hidden': form.dirty && !form.subject}"></div>
              </div>
              <div class="mb-6">
                <label class="inline-block mb-2" for="message">Message</label>
                <textarea class="w-full bg-white text-gray-800 border rounded border-gray-100 focus:border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none" name="message" rows="10" id="message" v-model="form.message"></textarea>
                <div class="text-red-500 text-xs italic" :class="{'hidden': form.dirty && !form.message}"></div>
              </div>
              <div class="text-center mb-6">
                <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border-b border-gray-800 hover:text-slate-400 hover:ring-0 focus:outline-none focus:ring-0" href="javascript://" @click="send_message">
                  <span class="button-icon"><font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon></span>
                  <span class="ml-3">Contact Us</span>
                  <div class="text-red-500 text-xs italic" :class="{'hidden': form.submit_valid}">Please complete the form.</div>
                </a>
              </div>
            </form><!-- end contact form -->

            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-20" role="alert" :class="{'hidden': !form.is_sent}">
              <div class="flex">
                <div class="py-1 mr-3">
                  <font-awesome-icon :icon="['far', 'circle-check']" size="2x"></font-awesome-icon>
                </div>
                <div>
                  <p class="font-bold">Success</p>
                  <p class="text-sm">Your message has been sent, we will contact you soon.</p>
                </div>
              </div>
            </div>


            <!-- phone -->
            <div class="mb-10">
              <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Call Us</h3>
              <div><font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon> (518) 420-7592</div>
            </div>

            <!-- Addresses -->
            <div class="mb-10">
              <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Office Locations</h3>
              <div class="flex flex-wrap flex-row -mx-2">

                <div class="flex-shrink px-4 max-w-full w-full md:w-1/2 mb-5">
                  <font-awesome-icon :icon="['fas', 'location-pin']"></font-awesome-icon> <strong>West Coast</strong><br />
                    1666 South Pacific Coast Highway<br />
                    Suite 200<br />
                    Redondo Beach, CA 90277
                </div>

                <div class="flex-shrink px-4 max-w-full w-full md:w-1/2 mb-5">
                  <font-awesome-icon :icon="['fas', 'location-pin']"></font-awesome-icon> <strong>East Coast</strong><br />
                    235 Harrison St.<br />
                    Syracuse, NY 13202
                </div>

              </div>
            </div><!-- end addresses section -->

          </div>
        </div>
      </div>
    </div>
  </div><!-- End contact -->


</template>