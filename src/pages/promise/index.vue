<template>
  <div class="test">
    <div class="box"
         v-for="(i,idx) in  list"
         :key="idx"
         v-show="i.show"
         :style="{background:i.color}">
      <div class="close"
           @click="closed(idx)">X</div>
    </div>
  </div>
</template>
<script>


export default {
  data () {
    return {
      list: [{ id: 1, color: 'red', show: true, time: 5 },
      { id: 2, color: 'skyblue', show: false, time: 3 },
      { id: 3, color: 'blue', show: false, time: 5 }]
    }
  },
  mounted () {
    const PENDING = 'PENDING';
    const FULFILLED = 'FULFILLED';
    const REJECTED = 'REJECTED';
    class myPromise {
      constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
          if (this.status == PENDING) {
            this.status = FULFILLED
            this.value = value
            this.onResolvedCallbacks.forEach(fn => { fn() })
          }
        }
        let reject = (reason) => {
          if (this.status == PENDING) {
            this.status = REJECTED
            this.reason = reason
            this.onRejectedCallbacks.forEach(fn => { fn() })
          }
        }
        try { executor(resolve, reject) } catch (error) { reject(error) }
      }
      then (onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
          onFulfilled(this.value)
        }

        if (this.status === REJECTED) {
          onRejected(this.reason)
        }
        if (this.status === PENDING) {
          this.onRejectedCallbacks.push(() => {
            onRejected(this.reason)
          })
          this.onResolvedCallbacks.push(() => {
            onFulfilled(this.value)
          })
        }
      }
    }
    const promise = new myPromise((resolve, reject) => {
      resolve('成功')
    }).then(res => {
      console.log('success', res)
    })
  },
  methods: {
    closed (idx) {
      this.list[idx].show = false
      if (idx != this.list.length - 1) {
        this.list[idx + 1].show = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  .box {
    width: 100%;
    height: 100px;
    background: skyblue;
    position: relative;
    display: block;
    transition: 1s;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>