<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/history-qiankun-sub">
        子应用
      </router-link>
    </div>
    <!-- 主应用渲染区 -->
    <router-view v-show="$route.name" />
    <!-- 子应用渲染区 -->
    <section v-show="!$route.name" id="subApp" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
