<template>
  <div>
    <Header />
    <Covid19Info :covid19Info="covid19Info" />
    <CaseNum :caseNumDate="caseNumDate" />
    <ChinaMap />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Covid19Info from "./components/Covid19Info.vue"
import CaseNum from "@/components/CaseNum"
import ChinaMap from '@/components/ChinaMap'
import { getNcovAPI } from "@/api/"

export default {
  components: {
    Header,
    Covid19Info,
    CaseNum,
    ChinaMap
  },
  data() {
    return {
      covid19Info: {
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        remark3: ""
      },
      caseNumDate: {
        modifyTime: "", // 时间
        currentConfirmedCount: "", // 现存确诊人数
        confirmedCount: "", // 累计确诊人数
        suspectedCount: "", // 累计境外输入人数
        curedCount: "", // 累计治愈人数
        deadCount: "", // 累计死亡人数
        seriousCount: "", // 现存无症状人数
        suspectedIncr: "", // 新增境外输入人数
        currentConfirmedIncr: "", // 相比昨天现存确诊人数
        confirmedIncr: "", // 相比昨天累计确诊人数
        curedIncr: "", // 相比昨天新增治愈人数
        deadIncr: "", // 相比昨天新增死亡人数
        seriousIncr: "" //	相比昨天现存无症状人数
      }
    }
  },
  created() {
    this.getNcov()
  },
  methods: {
    async getNcov() {
      const key = "1d46b2877a95ee0007d4ddfaf68ac49f"
      const { data: res } = await getNcovAPI({ key })
      // 病毒信息
      this.covid19Info.note1 = res.newslist[0].desc.note1
      this.covid19Info.note2 = res.newslist[0].desc.note2
      this.covid19Info.note3 = res.newslist[0].desc.note3
      this.covid19Info.remark1 = res.newslist[0].desc.remark1
      this.covid19Info.remark2 = res.newslist[0].desc.remark2
      this.covid19Info.remark3 = res.newslist[0].desc.remark3
      // 数据统计
      this.caseNumDate.modifyTime = res.newslist[0].desc.modifyTime
      this.caseNumDate.currentConfirmedCount = res.newslist[0].desc.currentConfirmedCount
      this.caseNumDate.confirmedCount = res.newslist[0].desc.confirmedCount
      this.caseNumDate.suspectedCount = res.newslist[0].desc.suspectedCount
      this.caseNumDate.curedCount = res.newslist[0].desc.curedCount
      this.caseNumDate.deadCount = res.newslist[0].desc.deadCount
      this.caseNumDate.seriousCount = res.newslist[0].desc.seriousCount
      this.caseNumDate.suspectedIncr = res.newslist[0].desc.suspectedIncr
      this.caseNumDate.currentConfirmedIncr = res.newslist[0].desc.currentConfirmedIncr
      this.caseNumDate.confirmedIncr = res.newslist[0].desc.confirmedIncr
      this.caseNumDate.curedIncr = res.newslist[0].desc.curedIncr
      this.caseNumDate.deadIncr = res.newslist[0].desc.deadIncr
      this.caseNumDate.seriousIncr = res.newslist[0].desc.seriousIncr
    }
  },
}
</script>

<style lang="less" scoped>
</style>
