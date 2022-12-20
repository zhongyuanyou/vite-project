<template>
  <div class="prize-draw">
    <div class="prize-item"
         v-for="(item, idx) in state.prizeList"
         :key="idx"
         :class="[state.currentIndex == idx ? 'active' : '']"
         @click="start(idx)">
      <img :src="item.pic" />
      <div class="name"
           v-show="idx != 4">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { computed } from 'vue'
const state = reactive({
  prizeList: [
    {
      name: '手机',
      pic: 'https://bkimg.cdn.bcebos.com/pic/3801213fb80e7bec54e7d237ad7eae389b504ec23d9e',
    },
    {
      name: '手表',
      pic: 'https://img1.baidu.com/it/u=2631716577,1296460670&fm=253&fmt=auto&app=120&f=JPEG',
    },
    {
      name: '苹果',
      pic: 'https://img2.baidu.com/it/u=2611478896,137965957&fm=253&fmt=auto&app=138&f=JPEG',
    },
    {
      name: '棒棒糖',
      pic: 'https://img2.baidu.com/it/u=576980037,1655121105&fm=253&fmt=auto&app=138&f=PNG',
    },
    {
      name: '娃娃',
      pic: 'https://img2.baidu.com/it/u=4075390137,3967712457&fm=253&fmt=auto&app=138&f=PNG',
    },
    {
      name: '木马',
      pic: 'https://img1.baidu.com/it/u=2434318933,2727681086&fm=253&fmt=auto&app=120&f=JPEG',
    },
    {
      name: '德芙',
      pic: 'https://img0.baidu.com/it/u=1378564582,2397555841&fm=253&fmt=auto&app=120&f=JPEG',
    },
    {
      name: '玫瑰',
      pic: 'https://img1.baidu.com/it/u=1125656938,422247900&fm=253&fmt=auto&app=120&f=JPEG',
    },
  ],
  currentIndex: 0,
  isRunning: false, // 是否正在抽奖
  speed: 10, // 抽奖转动速度
  timerIns: null, // 定时器实例
  currentRunCount: 0, // 已跑次数
  totalRunCount: 32, // 总共跑动次数 8的倍数
  prizeId: 0, // 中奖id
})

const prizeSort = [0, 1, 2, 5, 8, 7, 6, 3]
const startBtn = {
  name: '开始按钮',
  pic: 'https://img2.baidu.com/it/u=1497996119,382735686&fm=253',
}
// 要执行总步数
const totalRunStep = computed(() => {
  return state.totalRunCount + prizeSort.indexOf(state.prizeId)
})
onMounted(() => {
  state.prizeList.splice(4, 0, startBtn)
})
const getRandomNum = () => {
  return prizeSort[Math.floor(Math.random() * prizeSort.length)]
}

function start (i) {
  if (i === 4 && !state.isRunning) {
    // 重置数据
    state.currentRunCount = 0
    state.speed = 100
    state.isRunning = true
    setTimeout(() => {
      const prizeId = getRandomNum()
      state.prizeId = prizeId
    }, 2000)
    startRun()
  }
}
const startRun = () => {
  stopRun()

  // 要执行总步数
  // 已走步数超过
  if (state.currentRunCount > totalRunStep.value) {
    state.isRunning = false
    return
  }
  state.currentIndex = prizeSort[state.currentRunCount % 8]
  // 如果当前步数超过了2/3则速度慢下来
  if (state.currentRunCount > Math.floor((state.totalRunCount * 2) / 3)) {
    state.speed = state.speed + Math.floor(state.currentRunCount / 3)
  }
  state.timerIns = setTimeout(() => {
    state.currentRunCount++
    startRun()
  }, state.speed)
}

const stopRun = () => {
  state.timerIns && clearTimeout(state.timerIns)
}
</script>

<style lang="less" scoped>
.prize-draw {
  display: flex;
  align-items: center;
  width: 330px;
  flex-wrap: wrap;
  .active {
    border: 2px solid red;
  }
  .prize-item {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 5px;
    box-sizing: border-box;
    > img {
      width: 100%;
      height: 100%;
      font-size: 0;
    }
    .name {
      position: absolute;
      width: 100%;
      height: 20px;
      font-size: 18px;
      text-align: center;
      line-height: 20px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
