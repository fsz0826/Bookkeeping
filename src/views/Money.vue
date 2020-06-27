<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Tab :data-source="typeList" :value.sync="record.type"/>
      <div class="notes">
        <FormItem field-name="备注"
                  placeholder="在这里输入备注"
                  @update:value="onUpdateNotes"/>
      </div>
      <Tags @update:selected="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="js">
  import NumberPad from "@/components/money/NumberPad"
  import Tab from "@/components/Tab"
  import FormItem from "@/components/FormItem"
  import Tags from "@/components/money/Tags"
  import typeList from "@/constants/typeList"


  export default {
    name: "Money",
    components: {Tags, FormItem, Tab, NumberPad},
    data() {
      return {
        record: {
          tags: [],
          notes: '',
          type: '-',
          amount: '0'
        },
        typeList:typeList
      }
    },
    computed:{
      recordList(){
        return this.$store.recordList
      },
      tagList(){
        return this.$store.tagList
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