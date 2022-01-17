(function(){
//3.初始化实例对象 echarts.init(dom容器)
var myChart = echarts.init(document.querySelector(".box"));
//4.指定配置项和数据
echarts.registerTransform(ecStat.transform.regression);

var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
//5.将配置项设置给echarts实例对象，使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
})();