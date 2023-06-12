import { createApp } from 'vue'
import './css/app.css'
import App from './App.vue'

import FontAwesomeIcon from "./js/fontawesome-icons.js";
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App)
  .use(VueSmoothScroll, {
    offset: -100,
    updateHistory: false
  })
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')




