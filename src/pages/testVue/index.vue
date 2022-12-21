<template>
  <div class="box">
    <div> {{count}},{{doubleCount}}</div>
    <dialogC :title='count' />
    <div @click="count++">1111</div>

    <div class="btn-box">
      <div class="btn">button</div>
      <div class="btn">button</div>
    </div>
    <div class="animation">
      <div class="ball"></div>
      <!-- <div class="ball1"></div>
      <div class="ball2"></div>
      <div class="ball3"></div> -->
    </div>
  </div>
</template>



<script>
import dialogC from '../../components/dialogC.vue'
import { defineComponent, ref, computed, watchEffect, watch, isRef, onMounted } from 'vue'

export default defineComponent({
  components: {
    dialogC,
  },
  setup () {
    const count = ref(2)
    const doubleCount = computed(() => {
      return count.value * 2
    })
    watch([count, doubleCount], (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    watchEffect(() => { console.log(count.value) })

    onMounted(() => {
      console.log(doubleCount.value)
    })
    return {
      count,
      doubleCount
    }
  },
})
</script>


<style lang="less" scoped>
.btn-box {
  .btn {
    position: relative;
    padding: 10px 30px;
    margin: 50px 0;
    color: skyblue;
    text-decoration: none;
    font-size: 20px;
    transition: 0.1s;
    overflow: hidden;
    display: inline-block;
    margin-right: 20px;
  }
  .btn:hover {
    background: skyblue;
    color: #fff;
    box-shadow: 0 0 50px skyblue;
    transition-delay: 0.1s;
    border-radius: 20px;
  }
  .btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid skyblue;
    border-left: 2px solid skyblue;
    transition: 0.1s;
    transition-delay: 0.1s;
  }
  .btn::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid skyblue;
    border-bottom: 2px solid skyblue;
    transition: 0.1s;
    transition-delay: 0.1s;
  }
  .btn:hover::before {
    width: 100%;
    height: 100%;
    transition-delay: 0s;
  }
  .btn:hover::after {
    width: 100%;
    height: 100%;
    transition-delay: 0s;
  }
}
.animation {
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .ball {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: skyblue;
    animation: move 5s infinite linear;
  }
  .ball1 {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: skyblue;
    margin-left: -10px;
    animation: move1 5s infinite linear;
  }
  .ball2 {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: skyblue;
    margin-left: -10px;
    animation: move2 5s infinite linear;
  }
  .ball3 {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: skyblue;
    margin-left: -10px;
    animation: move3 5s infinite linear;
  }
}
@keyframes move {
  0% {
    transform: translateX(0px);
    background: blue;
  }
  50% {
    transform: scale(3);
    background: skyblue;
  }
  100% {
    transform: scale(1);
    background: blue;
  }
}
@keyframes move1 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(200px) scale(3);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}
@keyframes move2 {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-200px) scale(3);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}
@keyframes move3 {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translate(-150px, 150px) scale(3);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}
</style>