/*
 * @Author: your name
 * @Date: 2022-01-12 09:35:59
 * @LastEditTime: 2022-01-12 10:39:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\tryredux\src\pages\ComA\index.js
 */
import React from 'react';
import {connect} from 'react-redux';

class ComA extends React.Component {
    handleClick=()=> {
        this.props.sendAction()
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    +
                </button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type:'add_action'
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(ComA)