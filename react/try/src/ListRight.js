/*
 * @Author: your name
 * @Date: 2021-12-30 19:29:18
 * @LastEditTime: 2022-01-04 14:45:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2021_9\html\learn\react\try\src\ListRight.js
 */
import React,{Component} from 'react'
import Analysis from './Analysis'
import InOutput from './InOutput'
import Echart from './Echart'
// import Try from './try'


class ListRight extends Component{
    handleSendPut(put){
        console.log(put)
    }
    handleSubmitEchart(chart) {
        console.log(chart)
    }
    render(){
        return(
            <div className='right'>
                <Analysis/>
                <InOutput
                    onSubmit={this.handleSendPut.bind(this)}/>
                <Echart
                    onSubmit={this.handleSubmitEchart.bind(this)} />
                {/* <Try/> */}
            </div>
        )
    }
}
export default ListRight