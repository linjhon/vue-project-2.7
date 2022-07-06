import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import App from "./App.vue";
import router from "./router";

Vue.use(PiniaVuePlugin);

const app = new Vue({
  el: "#app",
  router,
  pinia: createPinia(),
  render: (h) => h(App),
});
