/*
 * @Author: your name
 * @Date: 2022-01-10 16:28:16
 * @LastEditTime: 2022-01-10 20:44:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\redux-demo\src\pages\home\index.js
 */
import React from 'react';
//导入store
import store from '../../store';
//导入action构建函数
import {sendAction} from '../../action';

export default class Home extends React.Component {
    handleClick = () => {
        const action = sendAction();//调用action
        //发送一个action 利用store
        store.dispatch(action);
    }
    //当组件加载完毕的时候 监听
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
            console.log('subscribe',store.getState())
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <div>{ store.getState().value}</div>
            </div>
        )
        
    } 
}
