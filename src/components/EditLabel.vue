<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="back" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="currentTag.name"
                @update:value="update"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="js">
  import FormItem from '@/components/FormItem.vue';
  import Button from '@/components/Button.vue';
  export default {
    name: "EditLabel",
    components:{FormItem,Button},
    data(){
      return{
      }
    },
    computed:{
      currentTag(){
        return this.$store.state.currentTag
      }
    },
    methods:{
      update(name) {
        if (this.currentTag) {
          this.$store.commit('updateTag', {id:this.currentTag.id,name})
        }
      },
      remove() {
        if (this.currentTag) {
          this.$store.commit('removeTag',this.currentTag.id)
          this.$router.back()
        }
      },
      goBack(){
        this.$router.back()
      }
    },
    created() {
      this.$store.commit('fetchTag')
      const id = this.$route.params.id;
      this.$store.commit('findTag',id)
      if (!this.currentTag) {
        this.$router.replace('/404');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {
    }

    > .leftIcon {
      width: 24px;
      height: 24px;
    }

    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }

  .form-wrapper {
    background: white;
    margin-top: 8px;
  }

  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>