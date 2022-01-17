/*
 * @Author: your name
 * @Date: 2022-01-12 19:26:10
 * @LastEditTime: 2022-01-12 19:54:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\send-love\src\store\index.js
 */
//导入createStore
import { createStore } from 'redux';
//导入自己的reducer
import { loveReducer } from '../reducer';
//通过creat 来创建
export default createStore(loveReducer);

