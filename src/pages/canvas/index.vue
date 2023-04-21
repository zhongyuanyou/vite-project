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


var canvas1 = document.createElement('canvas');
canvas1.id = "canvasTest";
canvas1.width = 500;
canvas1.height = 500;
canvas1.style.zIndex = 8;
canvas1.style.position = "absolute";
canvas1.style.left = '50%';
canvas1.style.border = "1px solid red";
document.body.appendChild(canvas1);
var canvas = document.getElementById('canvasTest');
// 得到canvas上下文
var ctx1 = canvas.getContext('2d');
ctx1.moveTo(250, 50)
ctx1.lineTo(330, 100)
ctx1.lineTo(330, 200)
ctx1.lineTo(250, 250)
ctx1.lineTo(170, 200)
ctx1.lineTo(170, 100)
ctx1.lineTo(250, 50)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 60)
ctx1.lineTo(320, 105)
ctx1.lineTo(320, 195)
ctx1.lineTo(250, 240)
ctx1.lineTo(180, 195)
ctx1.lineTo(180, 105)
ctx1.lineTo(250, 60)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 70)
ctx1.lineTo(310, 110)
ctx1.lineTo(310, 190)
ctx1.lineTo(250, 230)
ctx1.lineTo(190, 190)
ctx1.lineTo(190, 110)
ctx1.lineTo(250, 70)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 80)
ctx1.lineTo(300, 115)
ctx1.lineTo(300, 185)
ctx1.lineTo(250, 220)
ctx1.lineTo(200, 185)
ctx1.lineTo(200, 115)
ctx1.lineTo(250, 80)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 90)
ctx1.lineTo(290, 120)
ctx1.lineTo(290, 180)
ctx1.lineTo(250, 210)
ctx1.lineTo(210, 180)
ctx1.lineTo(210, 120)
ctx1.lineTo(250, 90)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 100)
ctx1.lineTo(280, 125)
ctx1.lineTo(280, 175)
ctx1.lineTo(250, 200)
ctx1.lineTo(220, 175)
ctx1.lineTo(220, 125)
ctx1.lineTo(250, 100)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 110)
ctx1.lineTo(270, 130)
ctx1.lineTo(270, 170)
ctx1.lineTo(250, 190)
ctx1.lineTo(230, 170)
ctx1.lineTo(230, 130)
ctx1.lineTo(250, 110)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 120)
ctx1.lineTo(260, 135)
ctx1.lineTo(260, 165)
ctx1.lineTo(250, 180)
ctx1.lineTo(240, 165)
ctx1.lineTo(240, 135)
ctx1.lineTo(250, 120)
ctx1.stroke();
ctx1.beginPath();
ctx1.moveTo(250, 60)
ctx1.lineTo(310, 110)
ctx1.lineTo(290, 180)
ctx1.lineTo(250, 220)
ctx1.lineTo(220, 175)
ctx1.lineTo(210, 120)
ctx1.lineTo(250, 60)
ctx1.stroke();
ctx1.fill()
var canvas = document.createElement('canvas');
canvas.id = "CursorLayer";
canvas.width = 500;
canvas.height = 500;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";
document.body.appendChild(canvas);
var canvas = document.getElementById('CursorLayer');
console.log(canvas);
// 得到canvas上下文
var ctx = canvas.getContext('2d');
ctx.moveTo(50, 0);
ctx.lineTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(100, 100);
ctx.lineTo(150, 100);
ctx.lineTo(150, 150);
ctx.lineTo(200, 150);
ctx.lineTo(200, 200);
ctx.lineTo(300, 200);
ctx.lineTo(300, 150);
ctx.lineTo(350, 150);
ctx.lineTo(350, 100);
ctx.lineTo(400, 100);
ctx.lineTo(400, 50);
ctx.lineTo(450, 50);
ctx.lineTo(450, 0);
ctx.lineTo(50, 0);
ctx.stroke();

ctx.moveTo(50, 500)
ctx.lineTo(50, 450);
ctx.lineTo(100, 450);
ctx.lineTo(100, 400);
ctx.lineTo(150, 400);
ctx.lineTo(150, 350);
ctx.lineTo(200, 350);
ctx.lineTo(200, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 350);
ctx.lineTo(350, 350);
ctx.lineTo(350, 400);
ctx.lineTo(400, 400);
ctx.lineTo(400, 450);
ctx.lineTo(450, 450);
ctx.lineTo(450, 500);
ctx.closePath(50, 500);
ctx.stroke();
ctx.fillStyle = '#FF0000'
ctx.fill()
ctx.beginPath();
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.stroke();


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
