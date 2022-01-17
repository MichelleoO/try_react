/*
 * @Author: your name
 * @Date: 2022-01-10 10:07:08
 * @LastEditTime: 2022-01-10 11:17:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\demo01\src\store\index.js
 */
import { createStore } from 'redux'
import reducer from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//如果window有‘__REDUX_DEVTOOLS_EXTENSION__’就调用
)
export default store

