import Vue from 'vue';
import Demo from './views/Demo.vue';
import <%= name %> from "../src";
Vue.use( <%= name %> );

new Vue({
  el: `#demo`,
  render:h=>h( Demo )
});
