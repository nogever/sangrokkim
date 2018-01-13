<template>
  <div class="snow"
      v-bind:style="{
        width: randomWidth + 'px',
        height: randomWidth + 'px',
        left: Math.random() * 100 + '%',
        marginTop: '-' + Math.random() * 100 + 'px',
        animationDelay: start + 's',
      }"
  >
  </div>
</template>

<script>
export default {
  name: 'sr-snow',
  props: ['start'],
  data() {
    return {
      width: 6,
    }
  },
  computed: {
    randomWidth: function() {
      return Math.random() * 20 + this.width;
    },
  }
}
</script>

<style lang="scss" scoped>
.snow {
  position: absolute;
  border-radius: 50%;
  animation: snow 12s infinite;
}
@keyframes snow {
  0% {
    background-color: rgba(255, 255, 255, .8);
    top: 0;
  }
  25% {
  }
  50% {
  }
  75% {
    background-color: rgba(255, 255, 255, .4);
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
    top: 100%;
  }
}
</style>
