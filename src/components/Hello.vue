<template>
  <div class="hello" v-stream:mousemove="mouse$" v-bind:style="{ background: `hsla(${coor && coor.x + coor.y}, 67.4%, 73.5%, 1)` }">
    <h1>creative web developer</h1>
    <sr-contact></sr-contact>
  </div>
</template>

<script>
import SrContact from './Contact'
import Rx from 'rxjs/Rx'

export default {
  name: 'sr-hello',
  components: { SrContact },
  subscriptions () {
    this.mouse$ = new Rx.Subject()

    return {
      coor: this.mouse$.throttleTime(1000).map(e => {
        return {
          x: e.event.clientX,
          y: e.event.clientY,
        }
      }),
    }
  },
}
</script>

<style lang="scss" scoped>
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /*background: rgba(142, 206, 233, 1);*/
  background: hsla(198, 67.4%, 73.5%, 1);
  padding: 100px 6%;
  transition: background 1s ease-in;
  h1 {
    margin: 48px;
  }
}
</style>
