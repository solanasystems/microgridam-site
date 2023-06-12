<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: "site-footer",
    data() {
        return {};
    },
    methods: {},
    components: { FontAwesomeIcon }
}

</script>

<template>
  <footer>
    <div class="footer-dark">
      <div class="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
        <div class="row">
          <div class="col-12 col-md text-center">
            <p class="d-block my-3"><font-awesome-icon :icon="['far', 'copyright']" /> 2023 Microgrid Solutions | All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>