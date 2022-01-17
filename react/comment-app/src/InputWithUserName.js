/*
 * @Author: your name
 * @Date: 2022-01-06 11:27:54
 * @LastEditTime: 2022-01-06 11:31:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\comment-app\src\InputWithUserName.js
 */
import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Component {
  render () {
    return <input value={this.props.data} readOnly={true} />
  }
}
InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
export default InputWithUserName