// 导入public-path.js
import './public-path.js';
import VueRouter from 'vue-router';
import Vue from 'vue'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
console.warn('log---window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.warn('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.warn('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  console.warn("log---[react17] vue app unmount");
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
