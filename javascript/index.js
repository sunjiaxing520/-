// 折线
(function(){
  // 实例化对象

  var chart1= echarts.init(document.querySelector(".zhe"));


  const colors = ['#FF0000', 'rgb(47, 0, 255)'];
   var tu1 = {
    color: colors,
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      textStyle:{
        color:"#4c9bfd"
      }
    },
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
          show: false
        },
        axisLabel:{
          color:"#4c9bfd"
        },
        axisLine: {
          show:false,
          onZero: false,
          lineStyle: {
            color: colors[1]
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                'Precipitation  ' +
                params.value +
                (params.seriesData.length ? '：' + params.seriesData[0].data : '')
              );
            }
          }
        },
        // prettier-ignore
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[0]
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                'Precipitation  ' +
                params.value +
                (params.seriesData.length ? '：' + params.seriesData[0].data : '')
              );
            }
          }
        },
        // prettier-ignore
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick:{
          show:false
        },
        axisLabel:{
          color:"#4c9bfd"
        },
        axisLine:{
          show:false
        },
        splitLine:{
          lineStyle:{
            color:'#012f4a'
          }
        }
      }
    ],
    series: [
      {
        name: '去年同阶段他人收入曲线',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [
          1000, 1300, 1700, 1200, 2030, 4100, 6219, 7100, 6100, 6700, 7600, 8000
        ]
      },
      {
        name: '去年同阶段本人收入曲线',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [
          900, 1700, 2300, 1700, 1030, 2100, 3219, 6100, 7100, 9700, 8600, 7000
        ]
      }
    ]
  };
  // 把配置给实例对象
  chart1.setOption(tu1);
  window.addEventListener("resize", function() {
    chart1.resize();
  });
})();