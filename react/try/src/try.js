import React from 'react';
import * as echarts from 'echarts'
import ecStat from 'echarts-stat';
import dataJson from './S_A1.json'
import $ from 'jquery'

class Echart extends React.Component{
  
    constructor(props) {
        super(props)
        this.state = {
          blogPost:'',
          finishedLoading: true,
          series: [],
          index: 0
        }
  }
  
    async componentDidMount() {
      var dom = document.getElementById("container");
      const myChart = echarts.init(dom);
      echarts.registerTransform(ecStat.transform.regression);
      myChart.showLoading();
      const data = dataJson;
      
        
        // console.log(data)
        myChart.hideLoading();
        myChart.setOption({
          // dataset: [
          //    {
          //      transform: {
          //        type: 'ecStat:regression'
          //      }
          //    }
          //  ],
           title: {
             sublink: 'https://github.com/ecomfe/echarts-stat',
             left: 'center'
           },
           legend: {
             bottom: 5
           },
           tooltip: {
             trigger: 'axis',
             axisPointer: {
               type: 'cross'
             }
           },
           toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: false
              },
              restore: {},//返回
              saveAsImage: {}//保存
            }
          },
          brush: {
            toolbox: [ /*'rect', 'polygon',  */'lineX',/*  'lineY', */ 'keep', 'clear'],
            xAxisIndex: 0,
            throttleType: 'debounce',//开启选中延迟后调用回调延迟
            throttleDelay: 600,//选中延迟后调用回调延迟时间
         },
           
           dataZoom: [
               {
               type: 'inside',
               start: 0,
               end: 200
               },
               {
               start: 0,
               end: 200
               }
           ],
           xAxis: {
             splitLine: {
               lineStyle: {
                 type: 'dashed'
               }
             }
           },
           yAxis: {
             splitLine: {
               lineStyle: {
                 type: 'dashed'
               }
             }
          },
           series: [
             {
               name: 'scatter',
               type: 'scatter',
               data
             },
           ]
          }
        )
        myChart.on('brushSelected', function (params) {
          var brushed = [];
          var brushComponent = params.batch[0];
          for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
            var rawIndices = brushComponent.selected[sIdx].dataIndex;
            brushed.push( rawIndices.join(', '));
          } 
          console.log(brushed.join('\n'));
          document.getElementById('echart').value = brushed.join('\n');
        }); 
      myChart.on('click', e => {
          console.log('point',e)
        console.log('index', e.dataIndex)
        if (e.seriesName == 'scaatt') {
          let num = e.dataIndex/*  +this.state.index */;
          this.setState({ index: num });
          var dataBefore = data.slice(0, num);
          // console.log('dataBefore', dataBefore)
          var dataAfter = data.slice(num, data.length - 1);
        }else
        {
          let num = e.dataIndex + this.state.index;
          this.setState({ index: num });
          var dataBefore = data.slice(0, num);
          // console.log('dataBefore', dataBefore)
          var dataAfter = data.slice(num, data.length - 1);
         }
          
          
        myChart.setOption({
            
            dataset: [
              {
                source:  dataBefore
              },
              {
                source:  dataAfter
              },
              {
                fromDatasetIndex: 0,
                transform: {
                  type: 'ecStat:regression',
                  // config: { method: 'linear', formulaOn: 'end'}
                }
              },
              {
                fromDatasetIndex: 1,
                transform: {
                  type: 'ecStat:regression'
                }
              }
              ],
            series: [
              {
                name: 'scaatt',
                type: 'scatter',
                data: dataBefore
              },
              {
                name: 'scaatt2',
                type: 'scatter',
                data: dataAfter
              },
              {
                silent: true,
                name: 'line',
                type: 'line',
                datasetIndex: 2,
                symbolSize: 0.1,
                symbol: 'circle',
                label: { show: true, fontSize: 16 },
                labelLayout: { dx: -20 },
                encode: { label: 2, tooltip: 1 }
              },
              {
                silent: true,
                name: 'line',
                type: 'line',
                datasetIndex: 3,
                symbolSize: 0.1,
                symbol: 'circle',
                label: { show: true, fontSize: 16 },
                labelLayout: { dx: -20 },
                encode: { label: 2, tooltip: 1 }
              },
            ]
            },
         )
        })

        
  }
  handleSubmit() {
    
    if (this.props.onSubmit) {
      const blogPost = this.state
      this.props.onSubmit(blogPost)
    }
    this.setState({ blogPost: '' })
  }
    render() {
        return (
          <div >
            <div style={{ width: '300px', height: '300px' }} id='container'  ></div>
            <button style={{float:'right'}} onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
        )
    }
}

export default Echart;
