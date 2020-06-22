<template>
  <nav>
    <router-link to="/money" class="link">
      <Icon name="money"/>
      记一笔
    </router-link>
    <router-link to="/labels" class="link">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="link">
      <Icon name="statistics"/>
      统计</router-link>
  </nav>
</template>

<script lang="js">
  import Icon from "./Icon"
  export default {
    name: "Nav",
    components: {Icon}
  }
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    >.link{
      padding: 4px 0;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > .icon {
        width: 32px;
        height: 32px;
      }
    }
  }
</style>