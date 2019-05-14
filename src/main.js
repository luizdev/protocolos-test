import Vue from 'vue'
import App from './App.vue'
import sync  from 'vuex-router-sync'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './config'
import jQuery from "jquery";
import setupAxios from './utils/interceptors'
import Bootstrap from "bootstrap/dist/js/bootstrap"
//import AppJS from "../src/assets/js/app"
//import AppJS from "../src/assets/js/app"

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.axios.defaults.baseURL = config.baseURL

window.$ = jQuery

$(function() {
  const simpleBarEnabled =
    document.getElementsByClassName("js-simplebar").length > 0;
  const simpleBarInstance = simpleBarEnabled
    ? new SimpleBar(document.getElementsByClassName("js-simplebar")[0])
    : null;

  /* Sidebar toggle behaviour */
  $(".sidebar-toggle").on("click", function() {
    $(".sidebar")
      .toggleClass("toggled")
      // Triger resize after animation
      .one("transitionend", function() {
        setTimeout(function() {
          window.dispatchEvent(new Event("resize"));
        }, 100);
      });
  });

  const active = $(".sidebar .active");

  if (active.length && active.parent(".collapse").length) {
    const parent = active.parent(".collapse");

    parent.prev("a").attr("aria-expanded", true);
    parent.addClass("show");
  }
});


setupAxios()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


