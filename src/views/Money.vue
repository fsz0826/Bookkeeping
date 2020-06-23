<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Types/>
      <div class="notes">
        <FormItem field-name="备注"
                  placeholder="在这里输入备注"/>
      </div>
      <Tags :data-source="tags"/>
    </Layout>
  </div>
</template>

<script lang="js">
  import Layout from "@/components/Layout"
  import NumberPad from "@/components/money/NumberPad"
  import Types from "@/components/money/Types"
  import FormItem from "@/components/money/FormItem"
  import Tags from "@/components/money/Tags"

  export default {
    name: "Money",
    components: {Tags, FormItem, Types, NumberPad, Layout},
    data(){
      return{
        tags:['衣','食','住','行']
      }
    },
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;
  }
</style>