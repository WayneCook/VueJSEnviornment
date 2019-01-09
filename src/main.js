import Vue from 'vue';
import App from './App.vue';
// import ProfileModal from './components/profileModal.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);


new Vue({
  el: '#app',
  render: h => h(App),
});
