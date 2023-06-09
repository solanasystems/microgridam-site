import { createApp } from 'vue'
import './css/app.css'
import App from './App.vue'

import FontAwesomeIcon from "./js/fontawesome-icons.js";

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')




