<template>
  <div>
    <Layout>
      <Tab class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tab class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <ol>
        <li v-for="(group,index) in groupList" :key="index">
          <h3 class="title">{{beautify(group.title)}}</h3>
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
  import dayjs from 'dayjs'
  import clone from "@/lib/clone"


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
      groupList() {
        const {recordList} = this
        if (recordList.length === 0) {return []}
        const newList = clone(recordList).sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf())
        const result = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}]
        for (let i = 1; i < newList.length; i++) {
          const current = newList[i]
          const last = result[result.length - 1]
          if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
            last.items.push(current)
          } else {
            result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]})
          }
        }
        return result
      }
    },
    methods: {
      tagString(tags) {
        return tags.length === 0 ? '无' : tags.join()
      },
      beautify(string) {
        const day = dayjs(string)
        const now = dayjs()
        const oneDay = 86400 * 1000
        if (day.isSame(now, 'day')) {
          return '今天'
        } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
          return '昨天'
        } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
          return '前天'
        } else if (day.isSame(day, 'year')) {
          return day.format('M月D日')
        } else {
          return day.format('YYYY年M月D日')
        }
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

  %item {
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

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999999;
    font-size: 14px;
  }
</style>