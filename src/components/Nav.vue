<template>
  <nav>
    <router-link to="/money" class="link">记一笔</router-link>
    <router-link to="/labels" class="link">标签</router-link>
    <router-link to="/statistics" class="link">统计</router-link>
  </nav>
</template>

<script lang="js">
  export default {
    name: "Nav"
  }
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    border: 1px solid red;
    >.link{
      border: 1px solid green;
      justify-content: center;
      align-items: center;
      width: 33.33333%;
    }
  }
</style>