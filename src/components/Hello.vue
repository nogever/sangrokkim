<template>
  <div class="hello">
    <r-profile class="profile"></r-profile>
    <h1>Sangrok is a creative web developer</h1>
    <a href="mailto:nogever@gmail.com">nogever@gmail.com</a>
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
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background: rgba(142, 206, 233, 1);
  padding: 6%;
  .profile {
    width: 80px;
    height: 80px;
    margin: 12px;
  } 
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
