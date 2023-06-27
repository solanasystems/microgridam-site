<script>
export default {
  name: "main-partner",
  props: [
    'partner'
  ],
  data() {
    return {
    }
  },
  computed: {
    image_url() {
      let img = this.partner.logo;
      return `/partners/${img}`;
    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
    <div class="w-full px-4 text-center pb-3">
      <a :href="partner.url" target="_blank">
        <img class="mx-auto opacity-80 hover:opacity-100 max-w-full h-auto partner-logo" :src="image_url" :alt="partner.name">
      </a>
    </div>
  </div>
</template>