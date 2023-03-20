<template>
  <div class="box">
    <div class="list">
      <div class="prev"
           @click="prev">上</div>
      <div class="page-box">
        <div class="page"
             @click="currentActive(i)"
             v-for="i in pageList"
             :key="i"
             :class="[currentPage==i?'page-active':'']">
          {{i}}
        </div>
      </div>
      <div class="prev"
           @click="next">下</div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  setup () {
    const pageCount = ref(49)
    const pageSize = ref(5)
    const pageList = ref(1)
    const currentPage = ref(1)
    pageList.value = parseInt(pageCount.value % pageSize.value) == 0 ? parseInt(pageCount.value / pageSize.value) : parseInt(pageCount.value / pageSize.value) + 1
    const next = function () {
      if (currentPage.value < pageList.value) {
        currentPage.value++
      }
    }
    const prev = function () {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    }
    const currentActive = function (e) {
      currentPage.value = e
    }
    onMounted(() => {
      console.log(window.scrollY)
    })
    return { pageCount, pageSize, pageList, currentPage, next, prev, currentActive }
  }
})

</script>


<style lang="less" scoped>
.box {
  width: 100%;
  .list {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    .prev {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #f5f5f5;
      cursor: pointer;
    }
    .prev:hover {
      filter: contrast(100%);
      border: 1px solid skyblue;
    }
    .page-box {
      flex: 1;
      margin: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .page {
      margin: 0 5px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #f5f5f5;
      cursor: pointer;
    }
    .page-active {
      border: 1px solid skyblue;
      color: skyblue;
    }
  }
}
</style>