/*
 * @Author: your name
 * @Date: 2022-01-10 22:13:14
 * @LastEditTime: 2022-01-11 15:09:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\react-redux-demo\src\store\index.js
 */
import { createStore } from 'redux'
//导入创建好的reducer
import { reducer } from '../reducer';
//构建store

export default createStore(reducer);