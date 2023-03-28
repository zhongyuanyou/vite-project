<template>
  <div></div>
</template>

<script>
import * as PIXI from 'pixi.js'
export default {
  mounted () {
    // 1、创建 pixi画布
    let app = new PIXI.Application({
      width: 640,
      height: 360,
      backgroundColor: 'pink'
    })
    console.log(app, 211)
    // 2、将画布添加到页面中
    document.body.appendChild(app.view)
    app.renderer.resize(window.innerWidth, window.innerHeight);
    const graphics = new PIXI.Graphics()
    graphics.beginFill(0xffd900, 1)
    graphics.drawRect(50, 50, 200, 100)
    graphics.endFill()
    app.stage.addChild(graphics)
    const graphics1 = new PIXI.Graphics()
    graphics1.beginFill(0xffd900, 1)
    graphics1.drawRoundedRect(260, 50, 200, 100, 20)
    graphics1.endFill()
    app.stage.addChild(graphics1)

  }
}
</script>

<style>
</style>