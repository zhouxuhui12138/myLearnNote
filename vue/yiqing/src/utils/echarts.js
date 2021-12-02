import echarts from "echarts"
import "../../node_modules/echarts/map/js/china"

function chinaMap(id) {
  var chartDom = document.getElementById(id)
  var myChart = echarts.init(chartDom)

  let option = {
    tooltip: {

    },
    series: [
      {
        name: "省",
        type: "map",
        map: "china",
        roam: false,
        zoom: 1.2,
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 8
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: "rgba(0,255,236,0)",
            borderColor: "rgba(0,0,0,.2)"
          },
          emphasis: {
            areaColor: "skyblue",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: "rgba(0,0,0,.5)"
          }
        },
      }
    ]
  }

  option && myChart.setOption(option)
}

export default chinaMap
