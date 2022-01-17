/*
 * @Author: your name
 * @Date: 2022-01-10 19:21:50
 * @LastEditTime: 2022-01-10 20:34:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\redux-demo\src\store\index.js
 */
import {createStore} from 'redux';
//导入我们自己创建好的reducer
import { reducer } from '../reducer'
//构建store
const store = createStore(reducer)

export default store;//返回