<template>
  <div id="app">
    <sr-header></sr-header>
    <aside class="aside-left"></aside>
    <aside class="aside-right">
      <sr-contact></sr-contact>
    </aside>
    <aside class="aside-bottom">
      <sr-links></sr-links>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SrHeader from './components/Header'
import SrContact from './components/Contact'
import SrLinks from './components/Links'

export default {
  name: 'sr-app',
  components: { SrHeader, SrContact, SrLinks },
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
  grid-gap: 4px;
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .links {
      color: black;
      font-weight: bold;
      font-size: 24px;
      margin: 10px;
      padding: 10px;
    }
  }
  main {
    grid-area: 2 / 2 / 3 / 3;
  }
}
</style>
