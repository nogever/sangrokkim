<template>
  <div class="hello" v-stream:mousemove="mouse$" v-stream:mouseout="mouseout$" v-bind:style="{ background: `hsla(${mouseout ? 198 : coor && coor.x + coor.y}, 67.4%, 73.5%, 1)` }">
    <div class="winter">
      <sr-snow v-bind:key="idx" v-for="idx in 100" :start="idx"></sr-snow>
    </div>
  </div>
</template>

<script>
import Rx from 'rxjs/Rx'
import SrSnow from './main/Snow'

export default {
  name: 'sr-hello',
  components: { SrSnow },
  subscriptions () {
    this.mouse$ = new Rx.Subject()
    this.mouseout$ = new Rx.Subject()

    return {
      coor: this.mouse$.throttleTime(1000).map(e => {
        this.mouseout$.next(null)
        return {
          x: e.event.clientX,
          y: e.event.clientY,
        }
      }),
      mouseout: this.mouseout$
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
  text-align: center;
  height: 100%;
  background: hsla(198, 67.4%, 73.5%, 1);
  transition: background 1s ease-in;
  h1 {
    margin: 48px;
    text-align: center;
  }
  .winter {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
