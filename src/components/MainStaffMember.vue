<script>
export default {
  name: "main-staff-member",
  props: [
    'staff'
  ],
  data() {
    return {
      default_image: 'person.svg',
      hovering: false,
    }
  },
  computed: {
    image_url() {
      let img = this.staff.image ? this.staff.image : this.default_image;
      return `/src/assets/staff/${img}`;
    }
  },
  methods: {
    toggleHover(is_hover) {
      this.hovering = is_hover;
    },
  }
}
</script>

<template>
  <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
    <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12" :class="{'hover-grayscale-0': !hovering }" @mouseout="toggleHover(false)" @mouseover="toggleHover(true)">
      <div class="relative overflow-hidden px-6">
        <img :src="image_url" class="max-w-full h-auto mx-auto rounded-full bg-gray-50" :class="{'grayscale': !hovering }" :alt="staff.name" />
      </div>
      <div class="pt-6 text-center">
        <p class="text-lg leading-normal font-bold mb-1">{{ staff.name }}</p>
        <p class="text-gray-500 leading-relaxed font-light">{{ staff.title }}</p>
      </div>
    </div>
  </div>
</template>