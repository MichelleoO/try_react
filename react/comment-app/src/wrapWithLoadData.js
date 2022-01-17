/*
 * @Author: your name
 * @Date: 2022-01-06 10:53:19
 * @LastEditTime: 2022-01-06 11:27:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\comment-app\src\NewComponent.js
 */
import React, { Component } from 'react'

export default ( WrappedComponent, name )=>{
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                data:null
            }
        }
        componentWillMount() {
            let data = localStorage.getItem(name)
            this.setState({data})
        }
        render() {
            return <WrappedComponent data={this.state.data}/>
        }
    }
    return NewComponent
 }