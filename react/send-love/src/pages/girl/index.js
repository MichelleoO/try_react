/*
 * @Author: your name
 * @Date: 2022-01-12 15:11:29
 * @LastEditTime: 2022-01-13 10:41:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\send-love\src\pages\girl\index.js
 */
import React from 'react';
import defaultImg from '../../assets/image/.png';
import ReciveImg from '../../assets/image/.gif';
import {connect} from 'react-redux';

class Girl extends React.Component {
    render() {
        console.log('Girl:',this.props)
        return (
            <div>
                <img src={this.props.status?ReciveImg:defaultImg} alt=""/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(Girl);