/*
 * @Author: your name
 * @Date: 2022-01-10 22:20:34
 * @LastEditTime: 2022-01-11 14:57:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\react-redux-demo\src\page\home\index.js
 */
import React from 'react';
//导入connect
import {connect} from 'react-redux';


class ComA extends React.Component {
    handleClick = () => {
        //发送action
        this.props.sendAction()
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}> + </button>
            </div>
        )
    }
}
// 这个函数要有一个返回值，返回值是一个对象
const mapDispatchToProps = dispatch => {
    return {
        sendAction: () => {
            //利用dispatch发送一个action
            dispatch({
                //传递action对象 要定义一个type属性
                type:'add_action'
            })
        }
    }
};
//ComA是发送方，所以要实现第二个参数
export default connect (null,mapDispatchToProps)(ComA)