/*
 * @Author: your name
 * @Date: 2021-12-30 14:24:46
 * @LastEditTime: 2022-01-06 11:30:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\comment-app\src\index.js
 */
import React, {Component}from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import InputWithUserName from './InputWithUserName'
import AutoFocusInput from './AutoFocusInput'
import './index.css'

class Index extends Component {
  render() {
    return (
      <div className='two-cols-layout'>
        <CommentApp />
        用户名：<InputWithUserName/>
      </div>
    )
  }
}
ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)