/*
 * @Author: your name
 * @Date: 2021-12-30 19:29:34
 * @LastEditTime: 2021-12-30 20:52:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2021_9\html\learn\react\try\src\Analysis.js
 */
import React,{Component} from 'react'

class Analysis extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ' '};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
                <div className='right-analtsis'>
                    <span className='right-name'>Analysis Model</span>
                        <div className='right-select'>
                            <select className='select' value={this.state.value} onChange={this.handleChange}>
                                {/* <option valu=" ">Select Mode</option> */}
                                <option value=" Spectrum Area Method"> Spectrum Area Method
                                </option>
                                <option value="Concentration area Method">Concentration area Method</option>
                            </select>
                        </div>
                </div>
        )
    }
}
export default Analysis