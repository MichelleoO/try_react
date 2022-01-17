/*
 * @Author: your name
 * @Date: 2021-12-30 19:30:01
 * @LastEditTime: 2022-01-04 17:33:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2021_9\html\learn\react\try\src\In-Output.js
 */
import React, { Component } from 'react'


class InOutput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            background:'',
            anomaly:''
        };
        // this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleBackgroundChange(event){
        this.setState({
            background: event.target.value
        })
    }
    handleAnomalyChange(event){
        this.setState({
            anomaly: event.target.value
        })
    }
    componentDidUpdate(){
		document.addEventListener('keydown',this.onkeydown);
	}

    handleSend = ()=>{ 
        if (this.props.onSubmit) {
            const { background, anomaly } = this.state
            this.props.onSubmit({background, anomaly})
          }
        // this.setState({ background:'', anomaly:'' })y
        }

    onkeydown = (e)=>{
            if (e.keyCode === 13) {
                this.handleSend()
            }
        }
    render() {
        return (
                <div className='right-InOutput'>
                    <div className='right-Layer'>
                        <span className='right-name'>Input Layer</span>
                        <div className='right-select'>
                            <select className='select' value={this.state.value} onChange={this.handleChange.bind(this)}>
                                {/* <option valu=" ">Select Mode</option> */}
                                {/* <option value=" Spectrum Area Method"> Spectrum Area Method
                                </option>
                                <option value="Concentration area Method">Concentration area Method</option> */}
                                {/* {LayerName} */}
                            </select>
                        </div>
                    </div>
                    <div className='right-B'>
                        <span className='right-name'>Output Name (Background)</span>
                        <div className='right-input'>
                            <input className='input' 
                            value={this.state.background}
                            onChange={this.handleBackgroundChange.bind(this)}/>
                        </div>
                    </div>
                    <div className='right-A'>
                        <span className='right-name'>Output Name (Anomaly)</span>
                        <div className='right-input'>
                            <input className='input' 
                            value={this.state.anomaly}
                            onChange={this.handleAnomalyChange.bind(this)}
                            // onClick={this.handleSend.bind(this)}  
                            onKeyDown={(e)=>this.onkeydown(e)}/>
                        </div>
                    </div>
                </div>
        )
    }
}
export default InOutput