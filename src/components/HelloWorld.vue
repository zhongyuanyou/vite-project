<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const stu = { name: '张三', age: 14 }
// v-memo依赖项
const subscribers = ref(10000)
// v-memo子节点依赖项
const inner = ref(500)
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">
    count is:{{ msg }}: {{ count }}
  </button>
  <div>
    <p>视图状态</p>
    <div v-memo="[subscribers]">
      <p>Subscribers: {{ subscribers }}</p>
      <p>inner: {{ inner }}</p>
    </div>
    <el-button @click="subscribers++">v-memo依赖项(Subscribers)++</el-button>
    <!-- 这里改变内部依赖 视图不会更新 -->
    <button @click="inner++">子节点依赖项(inner)++</button>
    <div>
      <p>当前状态</p>
      <p>Subscribers: {{ subscribers }}</p>
      <p>inner: {{ inner }}</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
/deep/ .el-button {
  color: @red;
  background: @bgColor;
}
a {
  color: #42b983;
}
</style>
