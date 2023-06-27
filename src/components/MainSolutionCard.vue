<script>
export default {
  name: "main-solution-card",
  props: [
    'info',
    'size_classes',
  ],
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
    goto(subject) {
      this.emitter.emit('landing_contact', subject);
    },
  }
}
</script>

<template>
  <div class="flex-shrink px-4 max-w-full w-full" :class="size_classes">
    <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer" @click="goto(info.title)" href="#contact" v-smooth-scroll>
      <div class="inline-block brand-color mb-4">
        <font-awesome-icon :icon="info.icon" size="3x"></font-awesome-icon>
      </div>
      <h3 class="text-lg leading-normal mb-2 font-semibold text-black">{{ info.title }}</h3>
      <p class="text-gray-500">{{ info.description }}</p>
    </div>
  </div>
</template>