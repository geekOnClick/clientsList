import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router/router';
import store from './store/index'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
