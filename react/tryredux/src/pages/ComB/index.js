/*
 * @Author: your name
 * @Date: 2022-01-12 09:36:33
 * @LastEditTime: 2022-01-12 10:49:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\tryredux\src\pages\ComB\index.js
 */
import React from 'react';
import {connect} from 'react-redux';

class ComB extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('ComB:',state)
    return state;
}
export default connect(mapStateToProps)(ComB)