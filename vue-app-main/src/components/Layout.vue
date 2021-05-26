<template>
  <div class="LayoutContainer">
    <h1>主应用</h1>
    <header>
      <router-link class="router-link" to="/app-vue">vue子应用</router-link>
      <router-link class="router-link" to="/app-react">react子应用</router-link>
    </header>
    <!-- <router-view></router-view> -->
    <section id="mainContainer">
    </section>
  </div>
</template>

<script>

export default {
  name: 'Layout',
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
