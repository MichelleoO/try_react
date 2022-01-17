/*
 * @Author: your name
 * @Date: 2022-01-08 20:31:57
 * @LastEditTime: 2022-01-10 14:44:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\demo01\src\TodoList.js
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'


class TodoList extends Component {
    constructor(props) {
        super(props)//向父类传递
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)//订阅
        // console.log(store.getState())
    }
    changeInputValue(e) {
        const action = {
            type: 'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    render() { 
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={ this.changeInputValue}
                    />
                    <Button type='primary'>增加</Button>
                </div>
                <div style={{ margin: '10px', width:'300px'}}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                </div>
            </div>
         );
    }
}
 
export default TodoList;