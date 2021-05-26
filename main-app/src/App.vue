<template>
    <Layout />
    <!-- <router-view></router-view> -->
</template>

<script>
import Layout from './components/Layout'
export default {
  name: "App",
  components: {
    Layout
  },
};
</script>

<style>
html,body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
