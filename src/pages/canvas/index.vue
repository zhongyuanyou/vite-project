<template>
  <div class="canvas-box">
    <aInput @blur="blur"
            v-model="test"
            clearable
            placeholder="请输入"
            btn-text="保存"
            @some-event="someEvent"
            :propsTitle="title"
            ref="input"></aInput>
    <el-button @click="change">修改{{ count }}</el-button>
    <zInput placeholder="请输入"
            v-model="textMsg"
            @sureBtn="sureBtn"
            btnText="确 定"></zInput>
    <div>{{ textMsg }}</div>
    <div id="canvas"></div>
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

var canvas = document.createElement('canvas');
canvas.id = "CursorLayer";
canvas.width = 500;
canvas.height = 500;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";
document.body.appendChild(canvas);
var canvas = document.getElementById('CursorLayer');
// 得到canvas上下文
var ctx = canvas.getContext('2d');
var img = new Image();   // 创建一个<img>元素
img.src = 'https://wecpt3.dongzouxizou.com/sourceCenter/3953007c65207621640abd12217fe3aa.mp4?vframe/jpg/offset/1'; // 设置图片源地址
img.onload = function () {
  ctx.drawImage(img, 0, 0)//绘制图片
  var imageData = ctx.getImageData(0, 0, 300, 300);
  ctx.clearRect(0, 0, 500, 500)
  ctx.putImageData(imageData, 0, 0, 0, 0, 600, 300)
}

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
function change () {
  title.value = test.value
  input.value.changeTitle()
}
function blur () {
  title.value = test.value
}
function sureBtn (e) {
  console.log(e)
}
onMounted(() => {
  document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    console.log(e)
    if (e && e.keyCode == 27) { // 按 Esc 
      //要做的事情
    }
    if (e && e.keyCode == 113) { // 按 F2 
      //要做的事情
    }
    if (e && e.keyCode == 13) { // enter 键
      //要做的事情
    }
  };
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
  color: transparent;
}
</style>
