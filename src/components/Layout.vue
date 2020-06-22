<template>
  <div class="layout-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="js">
  export default {
    name: "Layout",
  }
</script>

<style lang="scss" scoped>

</style>