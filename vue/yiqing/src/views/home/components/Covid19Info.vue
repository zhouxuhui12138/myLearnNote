<template>
  <div class="info">
    <p class="title">
      <i></i>
      病毒信息
    </p>

    <div class="content">
      <p v-for="(item, index) in covid19Info" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    covid19Info: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;

  .title {
    font-size: 0.17rem;
    i {
      display: inline-block;
      width: 0.04rem;
      height: 0.16rem;
      margin-right: 0.03rem;
      vertical-align: middle;
      background: #4169e2;
    }
  }

  .content {
    padding: 0.06rem 0.16rem;
    p {
      font-size: 13px;
      margin: 5px 0;
    }
  }
}
</style>
