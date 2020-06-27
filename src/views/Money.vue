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
    {{recordList}}
    </Layout>
  </div>
</template>

<script lang="js">
  import NumberPad from "@/components/money/NumberPad"
  import Types from "@/components/money/Types"
  import FormItem from "@/components/FormItem"
  import Tags from "@/components/money/Tags"
  import tagListModel from "@/models/tagListModel"


  tagListModel.fetch()
  export default {
    name: "Money",
    components: {Tags, FormItem, Types, NumberPad},
    data() {
      return {
        tags: tagListModel.data,
        record: {
          tags: [],
          notes: '',
          type: '-',
          amount: '0'
        },
      }
    },
    computed:{
      recordList(){
        return this.$store.recordList
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
        this.$store.commit('createRecord',this.record)
      }
    },
    created() {
      this.$store.commit('fetchRecord')
    }
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