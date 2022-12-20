<template>
  <div>
    <div class="check">
      <div class="check-child"></div>
    </div>
    <div class="drag">
      <div class="drag-child"></div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      offsetX: 0
    }
  },
  mounted () {
    // 获取元素实例
    const drag = document.querySelector('.drag-child')

    // 图形被校验区域
    const check = document.querySelector('.check-child')

    // 通过校验回调
    const success = () => {
      console.log('通过校验');
    }

    // 声明鼠标按下事件
    const dragMouseDown = event => {
      // 添加鼠标移动事件
      document.addEventListener('mousemove', dragMouseMove)
    }
    // 监听鼠标移动事件
    const dragMouseMove = event => {
      // 获取当前 x 轴坐标
      const { pageX } = event
      if (pageX < 0 || pageX > 350) {
        return
      }
      // 修改可移动盒子的 x 轴坐标
      drag.style.transform = `translateX(${pageX}px)`

      // 修改被校验区域坐标
      check.style.transform = `translateX(${pageX}px)`

      if (pageX >= 278 && pageX <= 285) {
        // 执行回调
        success()
      }
    }
    // 结束鼠标监听事件
    const dragMouseUP = event => {
      // 移除鼠标移动事件
      document.removeEventListener('mousemove', dragMouseMove)

      // 获取当前 x 轴坐标
      const { pageX } = event

      if (pageX < 278 || pageX > 285) {
        // 修改可移动盒子的 x 轴坐标
        drag.style.animation = 'move 0.5s ease-in-out'
        // 修改被校验区域坐标
        check.style.animation = 'move 0.5s ease-in-out'

        // 动画结束监听回调
        const animationEnd = () => {
          // 修改可移动盒子的 x 轴坐标
          drag.style.transform = `translateX(${0}px)`
          // 修改被校验区域坐标
          check.style.transform = `translateX(${0}px)`

          // 清除动画属性
          drag.style.animation = ''
          check.style.animation = ''
          // 移出动画结束监听
          document.removeEventListener("animationend", animationEnd)
        }
        // 添加动画结束监听
        document.addEventListener("animationend", animationEnd)
      }
    }

    // 添加鼠标按下事件
    document.addEventListener('mousedown', dragMouseDown)
    // 添加鼠标弹起事件
    document.addEventListener('mouseup', dragMouseUP)



  },
  methods: {
    handleDragStart (e) {
      console.log(e)
      let { offsetX } = e
      if (offsetX < 0 || offsetX > 350) return
      this.offsetX = offsetX
    }
  },
}
</script>

<style lang="less" scoped>
@keyframes move {
  to {
    transform: translateX(0);
  }
}
.check {
  width: 400px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500);
  .check-child {
    content: "";
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    background-image: inherit;
    background-repeat: inherit;
    background-size: 400px 300px;
    background-position: -280px -100px;
    position: absolute;
    top: 100px;
    left: 10px;
  }
}
.check::before {
  content: "";
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;
  position: absolute;
  top: 100px;
  left: 280px;
}
.drag {
  width: 400px;
  height: 50px;
  background-color: #e3e3e3;
  margin-top: 10px;
  position: relative;
  .drag-child {
    width: 50px;
    height: 50px;
    background-color: aquamarine;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>