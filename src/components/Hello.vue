<template>
  <div class="hello">
    <r-profile class="profile"></r-profile>
    <h1>Sangrok is a creative web developer</h1>
    <div class="contact">
      <a class="github" href="http://github.com/nogever" target="_blank">github</a>
      <a href="mailto:nogever@gmail.com">email</a>
    </div>
  </div>
</template>

<script>
import RProfile from './Profile'

export default {
  name: 'hello',
  components: { RProfile },
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
  .profile {
    width: 80px;
    height: 80px;
    margin: 12px;
    position: fixed;
    top: 6px;
  }
  h1 {
    margin: 48px;
  }
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
