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
  &> div {
    padding: 2px;
    margin: 1px;
    border-radius: 50%;
    max-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.hash {
      font-weight: bold;
      font-size: 24px;
    }
    &:hover:not(.at) {
      cursor: pointer;
      path {
        fill: white;
      }
      a {
        color: white;
      }
    }
  }
  svg {
    width: 100%;
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
