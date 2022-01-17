/*
 * @Author: your name
 * @Date: 2022-01-04 16:40:18
 * @LastEditTime: 2022-01-04 17:20:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\comment-app\src\Header.js
 */
import React, {Component}from 'react'
import ReactDOM from 'react-dom'
class Header extends Component {
    constructor () {
      super()
      console.log('construct')
    }
    componentWillMount () {
      console.log('component will unmount')
    }
    componentDidMount () {
      console.log('component did mount')
    }
    render () {
      console.log('render')
      return (
        <div>
          <h1 className='title'>React </h1>
        </div>
      )
    }
}
export default Header