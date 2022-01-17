/*
 * @Author: your name
 * @Date: 2022-01-12 11:28:55
 * @LastEditTime: 2022-01-12 19:59:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\send-love\src\App.js
 */
import './App.css';
import Girl from './pages/girl';
import Boy from './pages/boy';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="boy">
          <Boy/>
        </div>
        <div className="girl">
          <Girl/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
