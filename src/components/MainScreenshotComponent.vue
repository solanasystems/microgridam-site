<script>
export default {
  name: "main-screebshot-component",
  props: [
    'info',
    'seq',
  ],
  data() {
    return {
    }
  },
  computed: {
    image_url() {
      return `${this.info.src}`;
    },
  },
  methods: {

  }
}
</script>

<template>

  <div class="flex mt-10 mb-10">
    <div class="flex-shrink-0 mr-6 flex items-center" v-if="seq % 2 === 0">
      <a class="spotlight cursor-zoom-in" :href="image_url" target="_blank">
        <img class="screenshot w-[300px] lg:w-[500px] rounded-lg" :src="image_url">
      </a>
    </div>
    <div class="flex-shrink items-center flex">
      <div class="items-center">
        <div v-for="block in info.blocks" class="mt-5 mb-5">
          <div class="uppercase tracking-wide text-sm font-bold brand-color">{{ block.title }}</div>
          <p class="mt-2 text-gray-600">{{ block.description }}</p>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 ml-6 flex items-center" v-if="seq % 2 !== 0">
      <a class="spotlight cursor-zoom-in" :href="image_url" target="_blank">
        <img class="screenshot w-[300px] lg:w-[500px] rounded-lg" :src="image_url">
      </a>
    </div>

  </div>

</template>