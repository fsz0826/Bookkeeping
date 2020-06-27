<template>
  <ul class="tab">
    <li v-for="item in dataSource" :key="item.taxt" :class="liClass(item)"
        @click="select(item)">{{item.text}}</li>
  </ul>
</template>

<script lang="js">
  export default {
    name: "Tab",
    props:['dataSource','value','classPrefix'],
    methods:{
      select(item){
        this.$emit('update:value',item.value)
      },
      liClass(item){
        return{
          [this.classPrefix + '-tabs-item']:this.classPrefix,
          selected:item.value === this.value
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tab {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>