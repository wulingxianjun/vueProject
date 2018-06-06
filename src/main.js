import Vue from 'vue'

import App from './App.vue'
import $ from 'jquery'

import router from './router/router';
import store from './vuex/store.js';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
