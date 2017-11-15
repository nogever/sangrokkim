<template>
  <div id="app">
    <r-header></r-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import RHeader from './components/Header'

export default {
  name: 'app',
  components: { RHeader },
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { height: 100%; }
body {
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; 
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 12px;
}
#app, main {
  height: 100%;
}
</style>
