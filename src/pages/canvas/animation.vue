<template>
  <div class="animation-box">
    <canvas id="canvas"></canvas>
    <div @click="playVideo(currentVideo)"
         style="margin:0 auto;border:1px solid blue;width:100px;height:36px;text-align: center;line-height: 36px;">播放</div>
    <div @click="playVideo1()"
         style="margin:0 auto;border:1px solid blue;width:100px;height:36px;text-align: center;line-height: 36px;">暂停</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      r: 0,
      currentTime: 0,
      currentVideo: 0,
      duration: 0,
      videoList: [
        { src: 'https://wecpt3.dongzouxizou.com/sourceCenter/3953007c65207621640abd12217fe3aa.mp4', id: 1 },
        { src: 'https://wecpt4.dongzouxizou.com/Micro_DouVideo/2023040710070159051366.mp4', id: 2 }]
    }
  },
  mounted () {
    this.initVideo()
    this.initCanvas()
  },
  methods: {
    //
    playVideo1 () {


      clearInterval(this.videoList[this.currentVideo].timer)
      let video = document.getElementById('video' + this.videoList[this.currentVideo].id)
      video.pause()
    },
    // 视频播放
    playVideo (idx) {
      if (idx > 0) {
        this.currentVideo = idx
      }
      if (this.currentVideo == this.videoList.length - 1 && this.currentTime == this.videoList[this.currentVideo].duration) {
        this.currentVideo = 0
      }
      let video = document.getElementById('video' + this.videoList[this.currentVideo].id)

      video.play()
      video.addEventListener('timeupdate', () => {
        this.currentTime = video.currentTime
      }, false)
      this.drawImageVideo()
    },
    //  初始化视频
    initVideo () {
      for (let i = 0; i < this.videoList.length; i++) {
        let video = document.createElement('video')
        video.setAttribute("id", 'video' + this.videoList[i].id);
        video.setAttribute("width", "100px");
        video.setAttribute("height", "100px");
        video.setAttribute("controls", "controls");
        video.setAttribute("src", this.videoList[i].src);
        video.style.display = 'none'
        if (video.onload) {
          if (i == 0) {
            let ctx = this.canvas.getContext("2d")
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          }
        }
        video.addEventListener('loadeddata', () => {
          this.videoList[i].duration = video.duration
        });


        document.body.appendChild(video);
      }
    },
    // 初始化画布
    initCanvas () {
      this.canvas = document.getElementById("canvas");
      canvas.width = 600
      canvas.height = 400
    },

    // 画视频
    drawImageVideo () {
      let video = document.getElementById('video' + this.videoList[this.currentVideo].id)
      let ctx = this.canvas.getContext("2d")
      let timer = setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        ctx.save()
        if (this.currentVideo == 0 && this.currentTime > this.videoList[this.currentVideo].duration - 2 && this.currentTime < this.videoList[this.currentVideo].duration + 2) {
          // if (this.currentTime > 2 && this.currentTime < 15) {
          let video1 = document.getElementById('video' + this.videoList[this.currentVideo + 1].id)
          video1.play()
          ctx.arc(300, 200, this.r, 0, 2 * Math.PI);
          ctx.clip();
          ctx.drawImage(video1, 0, 0, this.canvas.width, this.canvas.height);
          ctx.restore();
          this.r += 3
        }
        if (this.currentTime >= this.videoList[this.currentVideo].duration) {

          console.log(this.currentTime, this.videoList[this.currentVideo].duration)
          clearInterval(this.videoList[this.currentVideo].timer)
          this.currentTime = 0
          if ((this.currentVideo + 1) < this.videoList.length)
            this.playVideo(this.currentVideo * 1 + 1)
        }
      }, 1000 / 30)
      this.videoList[this.currentVideo].timer = timer
    }
  }
}
</script>
<style lang="less" scoped>
.animation-box {
  width: 100vw;
  height: 100vh;
}
</style>