<template>
  <div>
    <div>{{ title }}</div>
    <el-input v-bind="$attrs"></el-input>
    <el-button @click="onClick">{{ btnText || '搜索' }}</el-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  btnText: {
    type: String,
    required: true,
  },
  propsTitle: {
    type: String,
    default: '',
  },
})
onMounted(() => {
  title.value = props.propsTitle
})
const title = ref('')
function changeTitle() {
  console.log(props.propsTitle)
  title.value = props.propsTitle
}
const emit = defineEmits(['someEvent'])
function onClick() {
  emit('someEvent', '杀杀杀')
}
defineExpose({ title, changeTitle })
</script>

<style lang="less" scoped>
:deep(.el-input) {
  width: 200px;
  height: 36px;
}
:deep(.is-focus) {
  border-color: transparent !important;
}
:deep(.el-button) {
  height: 36px;
  margin-left: 20px;
}
</style>
