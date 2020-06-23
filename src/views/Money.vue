<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad @update:value="onUpdateAmount"/>
      <Types :value.sync="record.type"/>
      <div class="notes">
        <FormItem field-name="备注"
                  placeholder="在这里输入备注"
                  @update:value="onUpdateNotes"/>
      </div>
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
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
    data() {
      return {
        tags: ['衣', '食', '住', '行'],
        record: {
          tags: [],
          notes: '',
          type: '-',
          amount: '0'
        },
      }
    },
    methods: {
      onUpdateNotes(value) {
        this.record.notes = value
      },
      onUpdateAmount(value) {
        this.record.amount = value
      },
      onUpdateTags(value) {
        this.record.tags = (value)
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