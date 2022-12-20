<template>
  <div class="box"></div>
</template>

<script>
import * as THREE from 'three'
// 扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 扩展库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export default {
  mounted () {
    var scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
    // var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    var geometry = new THREE.CylinderGeometry(10, 10, 100, 25);
    var geometry1 = new THREE.CylinderGeometry(10, 10, 100, 25);
    var material = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
      specular: 0x4488ee,
      shininess: 12
    }); //材质对象Material
    var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    var material1 = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
      opacity: 0.7,
      transparent: true
    });
    var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    mesh1.translateX(120)
    scene.add(mesh1); //网格模型添加到场景中

    var geometry2 = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
    var vertices = new Float32Array([
      0, 50, 0, //顶点1坐标
      50, 50, 0,
      50, 0, 0,
      50, 0, 50,
      0, 0, 50,
      0, 50, 50,
      0, 50, 0,

    ]);
    // 创建属性缓冲区对象
    var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
    // 设置几何体attributes属性的位置属性
    geometry.attributes.position = attribue;
    // 三角面(网格)渲染模式
    var material2 = new THREE.MeshBasicMaterial({
      color: 0x0000ff, //三角面颜色
      side: THREE.DoubleSide //两面可见
    }); //材质对象
    var mesh2 = new THREE.Mesh(geometry2, material2);

    scene.add(mesh2);
    var axisHelper = new THREE.AxesHelper(250);
    scene.add(axisHelper);
    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(100, -500, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);


    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数

    function render () {
      renderer.render(scene, camera);//执行渲染操作
      // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
      // mesh.rotateX(0.01);
      // requestAnimationFrame(render);//请求再次执行渲染函数render
    }
    render();
    var controls = new OrbitControls(camera, renderer.domElement);//创建控件对象
    controls.addEventListener('change', render);//监听鼠标、键盘事件
  },
}
</script>

<style>
</style>