<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.name"
          :class="{selected: selectedTags.indexOf(tag.name)>=0}"
          @click="toggle(tag.name)">{{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="js">

  export default {
    name: "Tags",
    props: ['dataSource'],
    data() {
      return {
        selectedTags: [],
      }
    },
    computed:{
      tagList(){
        return this.$store.state.tagList
      }
    },
    methods: {
      toggle(tag) {
        const index = this.selectedTags.indexOf(tag);
        if (index >= 0) {
          this.selectedTags.splice(index, 1);
        } else {
          this.selectedTags.push(tag);
        }
        this.$emit('update:selected', this.selectedTags)
        //console.log(index)
        //console.log(this.selectedTags)
      },
      createTag() {
        const name = window.prompt('请输入标签名')
        if (name === null) {return}
        if (name) {

          const message = this.$store.commit('createTag',name)
          if (message === 'duplicated') {
            window.alert('标签名重复')
          }
          if (message === 'success') {
            window.alert('成功')
            console.log(this.tags)
          }
        }
      }
    },
    created(){
      this.$store.commit('fetchTag')
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        $bg: #d9d9d9;
        background: $bg;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background: darken($bg, 50%);
          color: white;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>