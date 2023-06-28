<style lang="css">
  .partner-logo {
    max-width: 200px;
  }
</style>
<script>
import MainStaffMember from './MainStaffMember.vue';
import MainPartner from './MainPartner.vue';
export default {
  name: "main-about",
  components: { MainStaffMember, MainPartner },
  data() {
    return {
      all_staff: [
        {
          name: "David Sperling",
          title: "{Title}",
          image: "david.sperling.jpeg"
        },
        {
          name: "Rett Anderson",
          title: "{Title}",
          image: "person.svg"
        },
        {
          name: "Joe Dickson",
          title: "{Title}",
          image: "joe.dickson.jpeg"
        },
        {
          name: "Paul Pavone",
          title: "{Title}",
          image: "paul.pavone.jpeg"
        },
        {
          name: "Brad Phillips",
          title: "{Title}",
          image: "person.svg"
        },
        {
          name: "Joseph Morris",
          title: "{Title}",
          image: "person.svg"
        },
        {
          name: "Matthew Taylor",
          title: "{Title}",
          image: "matthew.taylor.jpeg"
        }
      ],
      all_partners: [
        {
          name: "Clean Energy Japan",
          url: "https://cleanenergyjapan.jp",
          logo: "cej.png"
        },
        {
          name: "Ducted Wind Turbines",
          url: "https://www.ductedwind.com",
          logo: "ductedwind.png"
        }
      ]
    }
  },
  methods: {

  }
}

</script>

<template>
  <div id="about" class="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <header class="text-center mx-auto mb-12">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">About Us</h2>
        <div class="section-hr"></div>
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">We deliver clean, reliable energy.</p>
      </header>

      <div class="flex flex-wrap flex-row -mx-4 justify-center mb-10">
        <img src="/src/assets/logo_square.svg" class="justify-center" style="max-width: 350px;" />
      </div>

      <div class="mb-10">
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Microgrid Asset Management's mission is to provide reliable, sustainable, and affordable energy as a service to our customers. We do this by building and managing a portfolio of microgrids that use renewable energy sources. We are committed to expanding our portfolio of microgrids and to making our energy services more accessible to everyone.</p>
      </div>



      <!-- staff -->
      <header class="text-center mx-auto mb-12">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">Our Team</h2>
      </header>

      <div class="flex flex-wrap flex-row -mx-4 justify-center mb-10">
        <main-staff-member v-for="staff in all_staff" :staff="staff"></main-staff-member>
      </div><!-- end staff -->


      <!-- partners -->
      <header class="text-center mx-auto mb-12">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">Partners</h2>
      </header>

      <div class="flex flex-wrap flex-row -mx-4 justify-center mb-20">
        <main-partner v-for="partner in all_partners" :partner="partner"></main-partner>
      </div><!-- end partners -->


    </div><!-- end container -->
  </div><!-- End Team-->
</template>