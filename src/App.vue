<template>
  <div id="app" v-bind:class="classObject">
    <aside class="aside-top" v-on:mouseenter="handleHover" v-on:mouseleave="handleHover">
      <sr-header></sr-header>
    </aside>
    <aside class="aside-left" v-on:mouseenter="handleHover" v-on:mouseleave="handleHover"></aside>
    <aside class="aside-right" v-on:mouseenter="handleHover" v-on:mouseleave="handleHover">
      <sr-links></sr-links>
    </aside>
    <aside class="aside-bottom" v-on:mouseenter="handleHover" v-on:mouseleave="handleHover">
      <sr-contact></sr-contact>
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
  data () {
    return {
      classObject: {
        home: this.$route.name == 'hello',
        top: false,
        right: false,
        bottom: false,
        left: false,
      },
    };
  },
  methods: {
    handleHover: function(e) {
      if (e.type == 'mouseleave') {
        this.classObject.top = false;
        this.classObject.right = false;
        this.classObject.bottom = false;
        this.classObject.left = false;
      } else {
        this.classObject.top = e.target.className == 'aside-top';
        this.classObject.right = e.target.className == 'aside-right';
        this.classObject.bottom = e.target.className == 'aside-bottom';
        this.classObject.left = e.target.className == 'aside-left';
      }
    },
  },
  updated: function() {
    this.classObject.home = this.$route.name == 'hello';
  }
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
  grid-template: 30px auto 30px / 30px auto 30px;
  grid-gap: 4px;
  &.top {
    grid-template: 80px auto 30px / 30px auto 30px;
  }
  &.right {
    grid-template: 30px auto 30px / 30px auto 80px;
  }
  &.left {
    grid-template: 30px auto 30px / 80px auto 30px;
  }
  &.bottom {
    grid-template: 30px auto 80px / 30px auto 30px;
  }
  &.home {
    grid-template: 80px auto 80px / 80px auto 80px;
  }
  &>* { background: rgba(142, 206, 233, 1); }
  .aside-top {
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
  aside {
    display: flex;
    > div {
      display: flex;
      flex: 1 1 auto;
    }
    &.aside-left,
    &.aside-right {
      justify-content: center;
      > div {
        flex-direction: column;
        align-items: center;
      }
    }
    &.aside-bottom,
    &.aside-top {
      div {
        align-items: center;
      }
    }
  }
}
</style>
