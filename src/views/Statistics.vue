<template>
  <div>
    <Layout>
      <Tab class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tab class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    </Layout>
  </div>
</template>

<script lang="js">
  import Layout from "../components/Layout"
  import Tab from "@/components/Tab"
  import intervalList from "@/constants/intervalList"
  import typeList from "@/constants/typeList"

  export default {
    name: "Statistics",
    components: {Tab, Layout},
    data() {
      return {
        type: '-',
        interval: 'day',
        intervalList: intervalList,
        typeList: typeList
      }
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .type-tabs-item {
      background: #c4c4c4;

      &.selected {
        background: white;

        &::after {
          display: none;
        }
      }
    }
    .interval-tabs-item {
      background: #c4c4c4;

      &.selected {
        background: white;

        &::after {
          display: none;
        }
      }
    }
  }
</style>