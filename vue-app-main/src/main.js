import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#mainContainer',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#mainContainer',
    activeRule: '/app-vue',
  },
]);

start();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
