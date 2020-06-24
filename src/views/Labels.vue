<template>
  <div>
    <Layout>
      <ul class="tag">
        <li>
          <span>衣</span>
          <Icon name="next"/>
        </li>
        <li>
          <span>食</span>
          <Icon name="next"/>
        </li>
        <li>
          <span>住</span>
          <Icon name="next"/>
        </li>
        <li>
          <span>行</span>
          <Icon name="next"/>
        </li>
      </ul>
      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="js">
  import Layout from "@/components/Layout"

  export default {
    name: "Labels",
    components: {Layout}
  }
</script>

<style lang="scss" scoped>
  .tag {
    background: white;
    font-size: 16px;
    padding-left: 16px;

    li {
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
  }
  .createTag{
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper{
      text-align: center;
      padding: 16px;
      margin: 44-16px;
    }
  }
</style>