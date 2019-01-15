import Vue from 'vue';
import App from './App.vue';
import feather from 'vue-icon';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';

Vue.use(feather, 'v-icon')
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),
});
