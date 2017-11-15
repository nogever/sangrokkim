<template>
  <div class="contact">
    <a class="github" href="http://github.com/nogever" target="_blank">github</a>
    <a href="mailto:nogever@gmail.com">email</a>
  </div>
</template>

<script>
export default {
  name: 'sr-contact',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scroped>
.contact {
  a {
    color: white;
    text-decoration: none;
    margin: 0 12px;
    display: inline-block;
    position: relative;
    transition: color .15s ease-in;
    &.github::after {
      content: '';
      display: block;
      opacity: 0;
      position: absolute;
      top: -34px;
      left: 0;
      width: 100%;
      height: 40px;
      background: url('../assets/Octocat.png') 50% 50%;
      background-size: contain;
      background-repeat: no-repeat;
      transition: opacity .3s ease-in;
    }
    &.github:hover::after {
      opacity: 1;
    }
    &:hover {
      color: black;
    }
  }
}
</style>
