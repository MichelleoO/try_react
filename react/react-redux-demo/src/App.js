/*
 * @Author: your name
 * @Date: 2022-01-10 22:03:46
 * @LastEditTime: 2022-01-11 10:15:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\react-redux-demo\src\App.js
 */
import React from 'react';
//引入组件A
import ComA from './pages/ComA';
//引入组件B
import ComB from './pages/ComB';
//导入store
import store from './store';
//导入Provider组件，利用组件包裹结构，达到统一维护store的效果
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>{/* 给Provider组件设置store属性，值为通过createStore构建出来的store */}
      <div className="App">
        <ComA /> 
        <ComB/>
      </div>
    </Provider>
  );
}

export default App;
