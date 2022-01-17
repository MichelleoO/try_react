/*
 * @Author: your name
 * @Date: 2022-01-12 15:11:21
 * @LastEditTime: 2022-01-12 21:51:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\send-love\src\pages\boy\index.js
 */
import React from 'react';
// import { } from 'module';

//1导入静态图和gif图
import defaultImg from '../../assets/image/.png';
import sendImg from '../../assets/image/.gif';
//导入 connect
import {connect} from 'react-redux';

class Boy extends React.Component {
    //定义UI级别的state
    state = {
        isSend: false
    };
    handleClick = () => {
        let { isSend } = this.state;
        // 因为默认状态是false，点击时，取到的状态时还没有更新的状态
        isSend ? this.props.stopAction() : this.props.sendAction();
        this.setState({
            isSend:!isSend
        });
    };
    render() {
        return (
            <div>
                <img src={this.state.isSend?sendImg:defaultImg} alt="" />
                <div>
                    <button onClick={this.handleClick}>{this.state.isSend?'停止发射':'发射爱心'}</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction:() => {
            dispatch({ type: 'send_love' });
        },
        stopAction: () => {
            dispatch({ type: 'stop_love' });
        }
    }
}
export default connect(null,mapDispatchToProps)(Boy);