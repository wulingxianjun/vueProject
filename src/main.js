import Vue from 'vue'

import App from './App.vue'
import $ from 'jquery'

import router from './router/router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
