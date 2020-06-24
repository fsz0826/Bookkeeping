<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" @click="goBack" name="back"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                @update:value="update"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="js">
  import tagListModel from "@/models/tagListModel"
  import FormItem from '@/components/FormItem.vue';
  import Button from '@/components/Button.vue';
  export default {
    name: "EditLabel",
    components:{FormItem,Button},
    data(){
      return{
        tag:undefined
      }
    },
    methods:{
      update(name) {
        if (this.tag) {
          tagListModel.update(this.tag.id, name);
        }
      },
      remove() {
        if (this.tag) {
          if (tagListModel.remove(this.tag.id)) {
            this.$router.back();
          } else {
            window.alert('删除失败');
          }
        }
      },
      goBack() {
        console.log('-----')
        this.$router.back();
      }
    },
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        this.tag = tag;
      } else {
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