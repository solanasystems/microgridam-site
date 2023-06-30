import { createApp } from 'vue'
import './css/app.css'
import App from './App.vue'

import FontAwesomeIcon from "./js/fontawesome-icons.js";
import VueSmoothScroll from 'vue3-smooth-scroll';
// import { Spotlight } from 'spotlight.js';

import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
  .use(VueSmoothScroll, {
    offset: -100,
    updateHistory: false
  })
  .component('font-awesome-icon', FontAwesomeIcon)
;
// app.use(Spotlight);
app.config.globalProperties.emitter = emitter;
app.mount('#app')




