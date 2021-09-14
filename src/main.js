import Vue from 'vue';
import App from './App.vue';
import CommonModules from '@/index';

Vue.config.productionTip = false;
Vue.use(CommonModules);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
