<template>
  <div id="app">
    <h1>Vue 子应用</h1>
    <header>
      <router-link class="router-link" to="/">home</router-link>
      <router-link class="router-link" to="/about">about</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header .router-link {
  color: #333;
  margin: 0 20px;
}
header .router-link.router-link-active {
  color: #2196f3;
}
</style>
