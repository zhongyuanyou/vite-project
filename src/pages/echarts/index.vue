<template>
  <div id="main"
       style="width: 600px;height:400px;"></div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from "vue"
const { proxy } = getCurrentInstance()
onMounted(() => {
  console.log(getCurrentInstance())
  var myChart = proxy.$echarts.init(document.getElementById('main'));
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例',
      subtext: '入门测试实例',
      x: 'center',
      textStyle: {
        color: 'blue',
      },
      subtextStyle: {
        color: 'red'
      }
    },
    tooltip: {},
    // xAxis: {
    //   // name: '总类',
    //   // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    // },
    // yAxis: {
    //   // name: '销量' 
    // },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['A', 'B', 'C', 'D', 'E']
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 335, name: 'A' },
          { value: 310, name: 'B' },
          { value: 234, name: 'C' },
          { value: 135, name: 'D' },
          { value: 1548, name: 'E' }
        ]

      },

    ]
  });
})
</script>

<style>
</style>