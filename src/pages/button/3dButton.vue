<template>
  <div>
    <div class="btn-list">
      <div class="btn" v-for="(tab, idx) in tabList" :key="idx">{{ tab }}</div>
    </div>
    <div class="menu-list">
      <div class="list">
        <div
          class="menu"
          v-for="(tab, idx) in tabList"
          :key="idx"
          :style="`--i:${tabList.length - idx}`"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <div class="throttle-btn">
      <button class="save-btn" @click="saveBtn">保存</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tabList = ref(['首页', '系统', '邮件'])
function saveBtn() {
  console.log('保存')
}
</script>

<style lang="less" scoped>
.btn-list {
  padding: 100px;
  background: black;
  display: flex;
  align-items: center;
  .btn {
    margin: 0 20px;
    width: 150px;
    height: 45px;
    background: #ffffff;
    position: relative;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .btn::before {
    content: '';
    position: absolute;
    top: 8px;
    left: -16px;
    height: 100%;
    width: 17px;
    background-color: #cecece;
    transition: 0.5s;
    transform: skewY(-45deg);
  }
  .btn::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 16px;
    background-color: #cecece;
    bottom: -16px;
    left: -8px;
    transition: 0.5s;
    transform: skewX(-45deg);
  }
  .btn:hover {
    background-color: #dd4b39;
    transform: translate(10px, -10px);
    color: white;
  }
  .btn:hover::after {
    background-color: #dd4b39;
  }
  .btn:hover::before {
    background-color: #dd4b39;
  }
}
.menu-list {
  background: #424345;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  .list {
    display: flex;
    flex-direction: column;
    width: 150px;
    transform: skewY(-15deg);
    .menu {
      width: 150px;
      background: #3e3f46;
      height: 40px;
      line-height: 40px;
      color: #cecece;
      z-index: var(--i);
      position: relative;
      transition: 0.5s;
    }
    .menu::before {
      content: '';
      position: absolute;
      top: 0;
      left: -40px;
      width: 40px;
      height: 100%;
      background: #35383e;
      transform-origin: right;
      transform: skewY(45deg);
      transition: 0.5s;
    }
    .menu::after {
      content: '';
      position: absolute;
      top: -40px;
      left: 0;
      height: 40px;
      width: 100%;
      background: #35383e;
      transform-origin: bottom;
      transform: skewX(45deg);
      transition: 0.5s;
    }
    .menu:hover {
      background: #33a3ee;
      transform: translateX(50px);
    }
    .menu:hover::before {
      background: #2982b9;
    }

    .menu:hover::after {
      background: #1f5378;
    }
  }
}
.throttle-btn {
  .save-btn {
    width: 100px;
    height: 36px;
    margin-top: 20px;
    background: #2982b9;
    color: #ffffff;
    border-color: transparent;
    border-radius: 6px;
  }
  .save-btn:hover {
    background: #33a3ee;
  }
}
.throttle-btn {
  animation: throttle 2s step-end forwards;
}
.throttle-btn:active {
  animation: none;
}
@keyframes throttle {
  from {
    color: green;
    pointer-events: none;
  }
  to {
    pointer-events: all;
    color: red;
  }
} ;
</style>
