/*
 * @Author: your name
 * @Date: 2022-01-04 19:27:26
 * @LastEditTime: 2022-01-04 19:55:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\comment-app\Clock.js
 */
import React, {Component}from 'react'
import ReactDOM from 'react-dom'

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {

        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
export default Clock