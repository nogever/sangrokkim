<template>
  <div class="hello">
    <h1>creative web developer</h1>
    <sr-contact></sr-contact>
  </div>
</template>

<script>
import SrContact from './Contact'
export default {
  name: 'sr-hello',
  components: { SrContact },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scroped>
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgba(142, 206, 233, 1);
  padding: 100px 6%;
  h1 {
    margin: 48px;
  }
}
</style>
