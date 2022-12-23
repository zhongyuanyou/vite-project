<template>
  <div class="box">
    <RefTest ref="refTestRef"></RefTest>
  </div>
</template>

<script >
import RefTest from '../../components/refTest.vue'
import {
  defineComponent,
  ref,
  onMounted
} from "vue";

export default defineComponent({
  components: {
    RefTest
  },
  setup () {
    const refTestRef = ref('refTestRef')
    onMounted(() => {
      const box = document.querySelector('.box')
      box.addEventListener("scroll", function (e) {
        console.log(e)
      })
    })

  },
});
</script>
<style lang="less" scoped>
.box {
}
</style>