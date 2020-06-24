<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
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
  import recordListModel from "@/models/recordListModel"

  const recordList = recordListModel.fetch()

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
        recordList:recordList
      }
    },
    methods: {
      onUpdateNotes(value) {
        this.record.notes = value
      },
      onUpdateTags(value) {
        this.record.tags = (value)
      },
      saveRecord() {
        const record2 = recordListModel.clone(this.record)
        record2.createAt = new Date()
        this.recordList.push(record2)
      }
    },
    watch: {
      recordList:function() {
        recordListModel.save(this.recordList);
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