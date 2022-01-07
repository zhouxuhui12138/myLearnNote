<template>
  <div id="app">
    <div class="content">
      <a-input placeholder="请输入任务" class="my_ipt" @change="onInputChange" :value="inputVal" />
      <a-button type="primary" @click="add">添加事项</a-button>

      <a-list bordered :dataSource="infoList" class="dt_list">
        <a-list-item slot="renderItem" slot-scope="item">
          <!-- 复选框 -->
          <a-checkbox :checked="item.done" @change="checkboxChange($event, item.id)">{{ item.info }}</a-checkbox>
          <!-- 删除链接 -->
          <a slot="actions" @click="removeItem(item.id)">删除</a>
        </a-list-item>

        <!-- footer区域 -->
        <div class="footer" slot="footer">
          <span>{{ unDoneLength }}条剩余</span>
          <a-button-group>
            <a-button :type="viewKey === 'all' ? 'primary' : 'default'" @click="changeViewKey('all')">全部</a-button>
            <a-button :type="viewKey === 'undone' ? 'primary' : 'default'" @click="changeViewKey('undone')"
              >未完成</a-button
            >
            <a-button :type="viewKey === 'done' ? 'primary' : 'default'" @click="changeViewKey('done')"
              >已完成</a-button
            >
          </a-button-group>
          <a @click="clearDone">清除已完成</a>
        </div>
      </a-list>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: "app",
  data() {
    return {}
  },
  computed: {
    ...mapState(["list", "inputVal", "viewKey"]),
    ...mapGetters(["unDoneLength", 'infoList'])
  },
  methods: {
    onInputChange(e) {
      this.$store.commit("setInputVal", e.target.value)
    },
    add() {
      if (this.inputVal.trim() !== "") {
        this.$store.commit("addList")
      }
    },
    removeItem(id) {
      this.$store.commit("removeItem", id)
    },
    checkboxChange(e, id) {
      this.$store.commit("editCheck", { id: id, done: e.target.checked })
    },
    clearDone() {
      this.$store.commit("clearDone")
    },
    changeViewKey(key) {
      this.$store.commit("changeViewKey", key)
    }
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
}
.content {
  margin-top: 50px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}
.dt_list {
  width: 600px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
