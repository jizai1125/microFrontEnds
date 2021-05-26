import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 
import { registerMicroApps, start } from 'qiankun';
// // activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子
registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#mainContainer',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8081',
    container: '#mainContainer',
    activeRule: '/app-vue',
  },
]);
// // 启动 qiankun
start();

const app = createApp(App)

app.use(router)

app.mount('#app')
