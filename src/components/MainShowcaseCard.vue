<script>
export default {
  name: "main-showcase-card",
  props: [
    'pic',
    'index',
  ],
  data() {
    return {
      hovering: false,
    }
  },
  computed: {
    image_url() {
      return `${this.pic.src}`;
    },
    classes() {
      let classes = [];
      if (this.pic.position) classes.push(this.pic.position);
      if (!this.hovering) classes.push('grayscale');
      return classes.join(' ');
    },
  },
  methods: {
    toggleHover(is_hover) {
      this.hovering = is_hover;
    },
  }
}
</script>

<template>
  <figure class="flex-shrink px-3 group">
    <div class="relative overflow-hidden cursor-pointer mb-6" @mouseout="toggleHover(false)" @mouseover="toggleHover(true)">
      <a class="spotlight" :href="image_url" target="_blank">
        <img class="object-cover transform duration-500 hover:scale-125" :class="classes" :src="image_url" :alt="pic.title">
        <div class="absolute inset-x-0 bottom-0 h-18 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
          <h3 class="text-base leading-normal font-semibold my-1 text-white">{{ pic.title }}</h3>
        </div>
      </a>
    </div>
  </figure>
</template>