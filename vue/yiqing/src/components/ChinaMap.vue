<template>
  <div>
    <p class="title">
      <i></i>
      疫情地图
    </p>

    <div id="china-map"></div>
  </div>
</template>

<script>
import map from "@/utils/echarts.js"
import { getNcovCityAPI } from '@/api/index.js'
export default {
  mounted() {
    map("china-map")
  },
  created() {
    const key = '62e34ad34025d5d5127135efa58d4ca'
    getNcovCityAPI({ key }).then(res => {
      console.log(res)
    })
  },
}
</script>

<style lang="less" scoped>
#china-map {
  width: 100%;
  height: 400px;
}
.title{
    border-top: .005rem solid #ebebeb;
    font-size: 0.17rem;
    background: #fff;
    padding-left: 0.16rem;
    padding-top: 0.10rem;
    padding-bottom: 0.10rem;
}

.title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.18rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
}
</style>
