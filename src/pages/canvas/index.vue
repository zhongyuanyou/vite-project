<template>
  <div class="canvas-box">
    <aInput
      @blur="blur"
      v-model="test"
      clearable
      placeholder="请输入"
      btn-text="保存"
      @some-event="someEvent"
      :propsTitle="title"
      ref="input"
    ></aInput>
    <el-button @click="change">修改{{ count }}</el-button>
    <zInput
      placeholder="请输入"
      v-model="textMsg"
      @sureBtn="sureBtn"
      btnText="确 定"
    ></zInput>
    <div>{{ textMsg }}</div>
  </div>
</template>
<script setup>
import aInput from '../../components/Ainput.vue'
import zInput from '../../components/ZInput.vue'
import {
  ref,
  onMounted,
  watchEffect,
  onUnmounted,
  useAttrs,
  useSlots,
  reactive,
} from 'vue'
const arrayData = [
  { id: 2, title: '中国', parent_id: 0 },
  { id: 3, title: '广东省', parent_id: 2 },
  { id: 4, title: '广州市', parent_id: 3 },
  { id: 5, title: '天河区', parent_id: 4 },
  { id: 6, title: '湖南省', parent_id: 2 },
  { id: 1, title: '俄罗斯', parent_id: 0 },
]
const input = ref(null)
const test = ref('')
const title = ref('商品信息')
const count = ref(0)
const result = []
const textMsg = ref('')
const attrs = useAttrs()
const slots = useSlots()
function change() {
  title.value = test.value
  input.value.changeTitle()
}
function blur() {
  title.value = test.value
}
function sureBtn(e) {
  console.log(e)
}
onMounted(() => {
  console.log(attrs)
  console.log(slots)
  const obj = arrayData.reduce((pre, cur) => {
    pre[cur.id] = cur
    return pre
  }, {})
  for (let item of arrayData) {
    if (item.parent_id === 0) {
      result.push(item)
      continue
    }
    if (item.parent_id in obj) {
      const parent = obj[item.parent_id]
      parent.children = parent.children || []
      parent.children.push(item)
    }
  }

  console.log(result)
})
watchEffect(() => console.log(test.value), console.log(title.value))
</script>
<style lang="less" scoped>
.canvas-box {
  width: 100%;
}
</style>
