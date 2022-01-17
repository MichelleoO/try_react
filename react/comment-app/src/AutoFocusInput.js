/*
 * @Author: your name
 * @Date: 2022-01-04 21:32:34
 * @LastEditTime: 2022-01-04 21:40:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\comment-app\src\AutoFocusInout.js
 */
import React, {Component}from 'react'
import ReactDOM from 'react-dom'
class AutoFocusInput extends Component {
    componentDidMount () {
      this.input.focus()
    }
    render () {
      return (
        <input ref={(input) => this.input = input} />
      )
    }
  }
  export default AutoFocusInput