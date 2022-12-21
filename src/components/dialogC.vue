<template>
  <div class="dialog-c">
    {{title}}
  </div>
</template>

<script>
import { defineComponent, toRef } from 'vue'

export default defineComponent({
  props: {
    title: Number,

  },
  setup (props) {
    const title = toRef(props, 'title')
    return { title }
  },
})
</script>


<style lang="less" scoped>
</style>