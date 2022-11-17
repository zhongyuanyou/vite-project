<template>
  <div class="z-input">
    <input
      class="input"
      :placeholder="props.placeholder"
      :style="{ color: textColor }"
      :value="props.modelValue"
      @input="changeValue"
    />
    <button class="button" @click="sureBtn">
      <span>{{ props.btnText }}</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const emit = defineEmits(['sureBtn'])
const props = defineProps({
  textColor: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  btnText: {
    type: String,
    default: '保 存',
  },
})
const input = ref(null)
function changeValue(e) {
  emit('update:modelValue', e.target.value)
}
function sureBtn() {
  emit('sureBtn', '按钮')
}
onMounted(() => {})
</script>

<style lang="less" scoped>
.z-input {
  display: flex;
  align-items: center;
  .input {
    width: 200px;
    height: 36px;
    font-size: 16px;
    line-height: 36px;
    padding: 0 15px;
    box-sizing: border-box;
    border: 1px solid#999999;
    outline: 0;
  }
  .input:focus {
    outline: 0;
    border-color: #409eff;
  }
  .button {
    width: 100px;
    height: 36px;
    margin-left: 20px;
    background: #409eff;
    border: none;
    position: relative;
    color: #fff;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;
    > span {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .button:active {
    opacity: 0.8;
  }
}
</style>
