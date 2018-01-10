<template>
  <div class="links">
    <div class="hash">
      <router-link to="/">#</router-link>
    </div>
    <div class="snake">
      <router-link to="/games/snake">
        <svg viewBox="0 0 36 36">
          <path d="M34,18v1v1h-2h-5v-9h-8v3h-4v-3H9v9H3v1h31v1H2v-3h6v-9h8v3h2v-3h10v9h4v-1H34z M17,28h2v-2h-2V28z"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sr-links',
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  align-items: center;
  &> div {
    padding: 5%;
    margin: 0 10px;
    border-radius: 50%;
    &.hash {
      font-weight: bold;
      font-size: 24px;
    }
    &:hover:not(.at) {
      cursor: pointer;
      background: radial-gradient(rgba(255, 255, 255, .2) 0%, transparent 60%);
      transform: scale(1.05, 1.05);
    }
  }
  svg {
    width: 30px;
    height: auto;
  }
  path {
    fill: black;
  }
  a {
    color: black;
    text-decoration: none;
  }
}
</style>
