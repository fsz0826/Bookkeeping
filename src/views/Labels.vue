<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag"
                     v-for="tag in tagList" :key="tag.name"
                     :to="`/labels/edit/${tag.id}`">
          <span>{{tag.name}}</span>
          <Icon name="next"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag"
                @click="createTag">
          新建标签
        </Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="js">
  import Button from "@/components/Button"


  export default {
    name: "Labels",
    components: {Button},
    data(){
      return{
      }
    },
    computed:{
      tagList() {
        return this.$store.state.tagList;
      }
    },
    methods:{
      createTag() {
        const name = window.prompt('请输入标签名')
        if(name === null){return}
        if (name){

          const message = this.$store.commit('createTag',name)
          if (message === 'duplicated'){
            window.alert('标签名重复')
          }
        if(message ==='success'){
          window.alert('成功')
        }
        }
      }
    },
    created(){
      this.$store.commit('fetchTag')
    },
  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;

    .tag {
      min-height: 44px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >svg{
        color: #666666;
        margin-right: 16px;
        width: 20px;
        height: 20px;
      }
    }
  }.createTag {
     background: #767676;
     color: white;
     border-radius: 4px;
     border: none;
     height: 40px;
     padding: 0 16px;
     &-wrapper {
       text-align: center;
       padding: 16px;
       margin-top: 44-16px;
     }
   }
</style>