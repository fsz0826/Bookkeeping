<template>
  <div>
    <Layout>
      <Types/>
      <NumberPad/>
    </Layout>
  </div>
</template>

<script lang="js">
  import Layout from "@/components/Layout"
  import NumberPad from "@/components/money/NumberPad"
  import Types from "@/components/money/Types"
  export default {
    name: "Money",
    components: {Types, NumberPad, Layout}
  }
</script>

<style lang="scss" scoped>

</style>