<template>
  <div id="app">
    <selectDemo />
  </div>
</template>

<script>
import selectDemo from './view/selectDemo.vue'

export default {
  name: 'App',
  components: {
    selectDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px 20px;
}
</style>
