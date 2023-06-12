<style lang="css">
  .link-hover:hover {
    border-bottom: 2px solid #94a3b8; /* slate-400 */
  }
</style>
<script>
export default {
  name: "site-footer",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-40 bg-gray-50">
      <nav class="main-nav">
        <div class="container xl:max-w-6xl mx-auto px-4">
          <div class="lg:flex lg:justify-between">
            <div class="flex justify-between">
              <div class="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center">Microgrid Solutions</div>

              <div class="flex flex-row items-center py-4 lg:py-0">
                <div class="relative text-gray-900 hover:text-black block lg:hidden">
                  <button type="button" class="menu-mobile block py-3 px-6 border-b-2 border-transparent" v-on:click="toggleNavbar()">
                    <span class="sr-only">Menu</span>
                    <font-awesome-icon :icon="['fas', 'bars']" />
                  </button>
                </div>
              </div>
            </div>

            <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex flex-row">
              <ul class="navbar bg-white lg:bg-transparent w-full text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
                <li class="relative hover:text-black">
                  <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent link-hover" href="#hero" v-smooth-scroll>Home</a>
                </li>
                <li class="relative hover:text-black">
                  <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent link-hover" href="#solutions" v-smooth-scroll>Solutions</a>
                </li>
                <li class="relative hover:text-black">
                  <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent link-hover" href="#monitoring" v-smooth-scroll>Monitoring</a>
                </li>
                <li class="relative hover:text-black">
                  <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent link-hover" href="#about" v-smooth-scroll>About Us</a>
                </li>
                <li class="relative hover:text-black">
                  <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent link-hover" href="#contact" v-smooth-scroll>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
  </header>
</template>