<template>
  <nav>
    <router-link to="/money" class="link" active-class="selected">
      <Icon name="money"/>
      记一笔
    </router-link>
    <router-link to="/labels" class="link" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="link" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="js">

  export default {
    name: "Nav",
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/helper.scss";

  nav {
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    font-size: 12px;

    > .link {
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

    > .link.selected {
      color: $color-highlight;
    }
  }
</style>