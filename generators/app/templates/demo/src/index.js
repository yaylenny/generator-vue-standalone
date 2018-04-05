import Vue from 'vue';
import demo from './views/demo.vue';

/* * *    VUE ROUTER    * * */
// import VueRouter from 'vue-router';
// import routes from './routes.js';
// Vue.use( VueRouter );

new Vue({
  el: `#demo`,
  render:h=>h( demo ),
  router: new VueRouter({ mode: 'hash', routes })
});
