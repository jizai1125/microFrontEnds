<template>
  <div class="LayoutContainer">
    <h1>主应用</h1>
    <header>
      <button class="router-link" @click="$router.push('/')">主home</button>
      <button class="router-link" @click="$router.push('/app-vue')">vue子应用</button>
      <!-- <button class="router-link" @click="$router.push('/app-vue/home')">vue子应用home</button> -->
      <button class="router-link" @click="$router.push('/app-react')">react子应用</button>
      <!-- <router-link class="router-link" to="/app-vue">vue子应用</router-link>
      <router-link class="router-link" to="/app-react">react子应用</router-link> -->
    </header>
    <router-view></router-view>
    <section id="mainContainer">
    </section>
  </div>
</template>

<script>
import { ref, reactive, onBeforeMounted, onMounted } from 'vue'
import { registerMicroApps, start, loadMicroApp } from 'qiankun'

export default {
  name: 'Layout',
  setup() {
    // onMounted(() => {
    //   if (!window.qiankunStarted) {
    //     window.qiankunStarted = true
    //     start()
    //   }
    // })
    return {}
  }
}
</script>

<style scoped>
.LayoutContainer {
  width: 100%;
  height: 100%;
}
h1 {
  height: 40px;
  margin-top: 0;
  margin-bottom: 20px;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
}
.router-link {
  margin: 0 10px;
}
#mainContainer {
  height: calc(100% - 100px);
  padding: 10px;
  margin: 0 20px;
  border: 1px solid;
  box-sizing: border-box;
}
</style>
