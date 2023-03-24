<template>
  <div>
    <div class="game-content">
      <div class="snake foods"
           v-for="(pos,idx) in snakeList"
           :key="'snake'+idx"
           :style="setPos(pos)"></div>
      <div class="foods"
           v-for="(pos,idx) in foods"
           :key="'food'+idx"
           :style="setPos(pos)">
      </div>
    </div>
    <div>得分：{{score}}</div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      foods: [],
      snakeList: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      moveTimer: null,
      direction: 3,
      score: 0
    }
  },
  created () {
    this.foods = this.initFoods(1)
    this.moveTimer = setInterval(() => {
      this.snakeMove()
    }, 200)
  },
  mounted () {
    window.addEventListener("keyup", (event) => {
      // event.key = ArrowUp 上
      switch (event.key) {
        case "ArrowUp":
          this.direction = 0;
          this.snakeMove();
          break;
        case "ArrowDown":
          this.direction = 1;
          this.snakeMove();
          break;
        case "ArrowLeft":
          this.direction = 2;
          this.snakeMove();
          break;
        case "ArrowRight":
          this.direction = 3;
          this.snakeMove();
          break;
        default:
          break;
      }
    });
  },
  methods: {
    setPos (pos) {
      return {
        left: pos.x * 10 + 'px',
        top: pos.y * 10 + 'px',
      }
    },
    initFoods (total) {
      let foods = []
      for (let i = 0; i < total; i++) {
        const foodX = Math.floor(Math.random() * 50);
        const foodY = Math.floor(Math.random() * 50);
        foods.push({ x: foodX, y: foodY })
      }
      return foods
    },
    snakeMove () {
      let head = this.snakeList[this.snakeList.length - 1]
      if ((this.direction == 0 && head.y < 0) || (this.direction == 1 && head.y > 49) || (this.direction == 2 && head.x < 0) || (this.direction == 3 && head.x > 49)) {
        alert('撞墙了')
        clearInterval(this.moveTimer)
        this.moveTimer = null
        return
      }
      switch (this.direction) {
        case 0:
          this.snakeList.push({ x: head.x, y: head.y - 1 })
          this.snakeList.shift()
          break
        case 1:
          this.snakeList.push({ x: head.x, y: head.y + 1 })
          this.snakeList.shift()
          break
        case 2:
          this.snakeList.push({ x: head.x - 1, y: head.y })
          this.snakeList.shift()
          break
        case 3:
          this.snakeList.push({ x: head.x + 1, y: head.y })
          this.snakeList.shift()
          break
      }
      this.isEat()
    },
    isEat () {
      let isEat = false
      let snakeHead = this.snakeList[this.snakeList.length - 1]
      let snakeTail = this.snakeList[0]
      if (snakeHead.x == this.foods[0].x && snakeHead.y == this.foods[0].y) {
        this.foods = this.initFoods(1)
        isEat = true
        this.score += 10
        switch (this.direction) {
          case 0:
            this.snakeList.unshift({ x: snakeTail.x - 1, y: snakeTail.y })
            break
          case 1:
            this.snakeList.unshift({ x: snakeTail.x, y: snakeTail.y + 1 })
            break
          case 2:
            this.snakeList.unshift({ x: snakeTail.x - 1, y: snakeTail.y })
            break
          case 3:
            this.snakeList.unshift({ x: snakeTail.x + 1, y: snakeTail.y })
            break
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.game-content {
  width: 500px;
  height: 500px;
  background-color: aquamarine;
  margin: 0 auto;
  position: relative;
  .foods {
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
  }
}
</style>