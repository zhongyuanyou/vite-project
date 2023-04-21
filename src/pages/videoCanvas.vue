<template>
  <div class="video-box">
    <video id="myVideo"
           controls="controls"
           class="video"
           poster="https://wecpt3.dongzouxizou.com/sourceCenter/3953007c65207621640abd12217fe3aa.mp4?vframe/jpg/offset/1"
           src="https://wecpt3.dongzouxizou.com/sourceCenter/3953007c65207621640abd12217fe3aa.mp4">

    </video>
    <div class="canvas-box">
      <div class="canvas-cover"
           @mousedown="move"
           @mousemove="mousemove"
           @mouseup="up"
           ref="setup_angle">
        <VueResizable width="600"
                      height="369"
                      class="resizable"
                      :top="boxTop"
                      :left="boxLeft"
                      @resize:end="end"
                      ref="setup_angle"
                      :style="{
              transform:'rotate('+angle_data+'deg)',
          }">
          <canvas class="canvas"
                  id="canvas1"></canvas>
          <span class="resizable-lt resizable-point"></span>
          <span class="resizable-rt resizable-point"></span>
          <span class="resizable-lb resizable-point"></span>
          <span class="resizable-rb resizable-point"></span>
          <span class="resizable-xz resizable-point"></span>
        </VueResizable>
      </div>

    </div>
    <div style="display:flex; justify-content: center;">
      <button @click="playBtn">播放</button>
      <button @click="muted">静音</button>
    </div>
  </div>
</template>

<script>



import VueResizable from 'vue-resizable'
export default {
  components: { VueResizable },
  data () {
    return {
      video: '',
      timer: '',
      myPlayer: '',
      isPlayer: false,
      isMove: false,
      boxX: '',
      boxY: '',
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      boxTop: 0,
      boxLeft: 0,
      x: 0,
      y: 0,
      mousedown: false,
      angle_data: 0,
      r: 0
    }
  },
  mounted () {
    this.initialize();
    this.timer = setInterval(() => {
      this.captureImage()
    }, 0);
  },
  methods: {
    end (e) {
      this.isMove = false
      this.mousedown = false
      console.log(e)
    },
    resize (newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    on_mousemove (event) {  //鼠标移动事件(按下移动就算拖拽，在元素里移动才算，元素外移动监听)
      if (this.mousedown) {  //表示是按下移动的
        const setup_angle = this.$refs.setup_angle;
        let centerX = -~(setup_angle.offsetHeight || setup_angle.height) / 2;
        let centerY = -~(setup_angle.offsetWidth || setup_angle.width) / 2;
        let angle = this.calculate_degree(event.offsetX, event.offsetY, centerX, centerY);
        this.angle_data = -~angle;
        this.$emit('angle', angle); //发送事件
      }
    },
    calculate_degree (x, y, centerX, centerY) {  //根据当前坐标和中心坐标计算角度
      const radians = Math.atan2(x - centerX, y - centerY);
      return (radians * (180 / Math.PI) * -1) + 180;
    },
    mousemove (e) {


      if (this.mousedown) {  //表示是按下移动的
        const setup_angle = this.$refs.setup_angle;
        let centerX = -~(setup_angle.offsetHeight || setup_angle.height) / 2;
        let centerY = -~(setup_angle.offsetWidth || setup_angle.width) / 2;
        let angle = this.calculate_degree(e.offsetX, e.offsetY, centerX, centerY);
        this.angle_data = -~angle;
        console.log(this.angle_data, setup_angle)
        this.$emit('angle', angle); //发送事件
      }
      // let event = e.currentTarget
      // let pageXs = e.pageX;
      // let pageYs = e.pageY;
      // if (this.isMove) {
      //   this.boxTop = pageYs - this.boxY
      //   this.boxLeft = pageXs - this.boxX
      //   event.style.left = pageXs - this.boxX + "px";
      //   event.style.top = pageYs - this.boxY + "px";
      // }

    },
    up () {
      console.log(11111)
      this.isMove = false
      this.mousedown = false
    },
    move (e1) {
      this.mousedown = true
      console.log(e1)
      this.isMove = true
      let event = e1.currentTarget;  //获取wqh盒子
      //获取鼠标位置
      let pageX = e1.pageX;
      let pageY = e1.pageY;
      //获取鼠标按下时鼠标在盒子中的位置
      this.boxX = pageX - event.offsetLeft;
      this.boxY = pageY - event.offsetTop;
    },
    muted () {
      if (this.video.muted) {
        this.video.muted = false
      } else {
        this.video.muted = true
      }
    },
    playBtn () {
      if (!this.isPlayer) {
        this.initPlayer()
      } else {
        this.closeVideo()
      }
      this.isPlayer = !this.isPlayer
    },
    initPlayer () {
      this.video.play(); //播放
    },
    closeVideo () {
      this.video.pause()
    },
    initialize () {

      this.video = document.getElementById("myVideo");
      this.video.addEventListener('loadeddata', this.captureImage());
      console.log(this.video)
    },
    captureImage () {

      var canvas = document.getElementById('canvas1');
      let ctx = canvas.getContext('2d')
      ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);
      // let timer = setInterval(() => {
      //   if (r >= (canvas.height / 2)) {
      //     clearInterval(timer)
      //   }

      // }, 1000 / 10)

      if (this.video.ended) {
        clearInterval(this.timer)
      }
    }
  }

}
</script>
<style lang="less" scoped>
.video-box {
  video {
    width: 600px;
    height: 400px;
    display: none;
  }
  .canvas-box {
    margin: 0 auto;
    width: 800px;
    height: 600px;

    position: relative;

    background: #202023;
    .canvas-cover {
      width: 601px;
      height: 370px;
      background: black;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .resizable {
        width: 599px;
        height: 368px;
        top: 0;
        left: 0;
        border: 1px solid #fff;
        z-index: 1;
        transform: rotate(3.7deg);
        .resizable-point {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background: #fff;
        }
        .resizable-lt {
          top: -6px;
          left: -6px;
        }
        .resizable-lb {
          bottom: -6px;
          left: -6px;
        }
        .resizable-rt {
          top: -6px;
          right: -6px;
        }
        .resizable-rb {
          bottom: -6px;
          right: -6px;
        }
        .resizable-xz {
          bottom: -30px;
          left: 50%;
          margin-left: -6px;
        }
        .canvas {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>