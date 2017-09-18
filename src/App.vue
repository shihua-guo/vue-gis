<template>
  <div id="app">
    <maptest></maptest>
  </div>
</template>

<script>
import Maptest from './components/Map'
export default {
  name: 'app',
  components: {
     Maptest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
