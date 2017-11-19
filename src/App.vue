<template>
  <div id="app">
    <sr-header></sr-header>
    <aside class="aside-left"></aside>
    <aside class="aside-right"></aside>
    <aside class="aside-bottom"></aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SrHeader from './components/Header'
export default {
  name: 'sr-app',
  components: { SrHeader },
}
</script>

<style lang="scss">
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { height: 100%; }
body {
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; 
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 6px;
}
#app, main {
  height: 100%;
}
#app {
  display: grid;
  grid-template: 60px auto 60px / 60px auto 60px;
  grid-gap: 6px;
  &>* { background: rgba(142, 206, 233, 1); }
  .header {
    grid-area: 1 / 1 / 2 / 3;
  }
  .aside-left {
    grid-area: 2 / 1 / 4 / 2;
  }
  .aside-right {
    grid-area: 1 / 3 / 3 / 4;
  }
  .aside-bottom {
    grid-area: 3 / 2 / 4 / 4;
  }
  main {
    grid-area: 2 / 2 / 3 / 3;
  }
}
</style>
