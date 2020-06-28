<template>
  <div>
    <Layout>
      <Tab class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tab class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
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
    },
    computed: {
      recordList() {
        return this.$store.state.recordList
      },
      result() {
        const {recordList} = this
        const hashTable = {}
        for (let i = 0; i < recordList.length; i++) {
          const [date, time] = recordList[i].createAt.split('T')
          hashTable[date] = hashTable[date] || {title: date, items: []}
          hashTable[date].items.push(recordList[i])
        }
        console.log(hashTable)
        return hashTable
      }
    },
    methods:{
      tagString(tags){
        return tags.length === 0 ? '无' : tags.join()
      }
    },
    beforeCreate() {
      this.$store.commit('fetchRecord')
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
      height: 48px;
    }
  }
</style>
<style lang="scss" scoped>
  %item{
    padding: 8px 16px;
    line-height: 24px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    @extend %item
  }

  .record {
    @extend %item;
    background: white;
  }
  .notes{
    margin-right: auto;
    margin-left: 16px;
    color: #999999;
    font-size: 14px;
  }
</style>