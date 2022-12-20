<template>
  <div class="box">
    <div class="glassWrapper">
      <img src="https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
           class="img" />
      <div class="glass"
           id="glass"></div>
    </div>
    <div class="bigWrapper">
      <img src="https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
           class="bigImg" />
    </div>
  </div>
</template>

<script>
// 扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 扩展库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export default {
  mounted () {

    console.log(OrbitControls);
    console.log(GLTFLoader);
    const box = document.querySelector('.box');
    const glassWrapper = document.querySelector('.glassWrapper'); // 放大镜的盒子
    const glass = document.querySelector('.glass');
    const bigImg = document.querySelector('.bigImg');
    const img = document.querySelector('.img');
    const bigWrapper = document.querySelector('.bigWrapper');
    box.addEventListener('mousemove', (e) => {
      // 该操作让glassWrapper的左上角变成坐标原点, 因为glass是先相对于glassWrapper而移动的
      const x = e.pageX - glassWrapper.offsetLeft;
      const y = e.pageY - glassWrapper.offsetTop;
      // 让鼠标在glass的中间位置
      let width = x - glass.offsetWidth / 2;
      let height = y - glass.offsetHeight / 2;
      if (width <= 0) {
        width = 0;
      } else if (width >= glassWrapper.offsetWidth - glass.offsetWidth) {
        width = glassWrapper.offsetWidth - glass.offsetWidth;
      }
      if (height <= 0) {
        height = 0;
      } else if (height >= glassWrapper.offsetHeight - glass.offsetHeight) {
        height = glassWrapper.offsetHeight - glass.offsetHeight;
      }
      // 改变放大镜的位置
      glass.style.left = width + 'px';
      glass.style.top = height + 'px';
      bigImg.style.width = img.offsetWidth * bigWrapper.offsetWidth / glass.offsetWidth + 'px';
      bigImg.style.left = - width * bigImg.offsetWidth / img.offsetWidth + 'px';
      bigImg.style.top = - height * bigImg.offsetHeight / img.offsetHeight + 'px';
    })

    glassWrapper.addEventListener('mouseover', () => {
      glass.style.display = 'block';
      bigImg.style.display = 'block';
    });

    glassWrapper.addEventListener('mouseout', () => {
      glass.style.display = 'none';
      bigImg.style.display = 'none';
    })



  }
}
</script>

<style lang="less" scoped>
.box {
  width: 80vw;
  min-width: 800px;
  height: 80vh;
  min-height: 600px;
  line-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f3f4;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #5d8aa8;
  .glassWrapper {
    line-height: 0;
    position: relative;
    > img {
      display: block;
      width: 250px;
      height: auto;
    }
    .glass {
      position: absolute;
      width: 80px;
      height: 80px;
      background: #89cff0;
      opacity: 0.5;
      display: none;
    }
  }
  .bigWrapper {
    position: relative;
    width: 500px;
    height: 500px;
    background-color: #fff;
    border: 1px dashed #89cff0;
    border-radius: 10px;
    overflow: hidden;
    .bigImg {
      width: 2500px;
      display: none;
      position: absolute;
    }
  }
}
</style>