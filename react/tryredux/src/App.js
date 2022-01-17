/*
 * @Author: your name
 * @Date: 2022-01-11 20:39:15
 * @LastEditTime: 2022-01-12 10:53:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\tryredux\src\App.js
 */
import './App.css';
import React from 'react';
import store from './store';
import ComA from './pages/ComA';
import ComB from './pages/ComB';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={ store}>
      <div className="App">
        <ComA/>
        <ComB/>
      </div>
    </Provider>
  );
}

export default App;
