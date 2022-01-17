/*
 * @Author: your name
 * @Date: 2022-01-11 09:43:05
 * @LastEditTime: 2022-01-11 16:13:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\react-redux-demo\src\pages\ComB\index.js
 */
import React from 'react';
import {connect} from 'react-redux';

class ComB extends React.Component {
    render() {
        console.log('ComB:', this.props);
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}
//接受两个参数
const mapStateToProps = state => {
    console.log('ComB:', state);
    return state;//进行return才能在组件的内部获取到最新的数据
};
//ComB属于接收方，需要实现connect方法的第一个参数
export default connect(mapStateToProps)(ComB);