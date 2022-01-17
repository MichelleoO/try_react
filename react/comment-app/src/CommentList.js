/*
 * @Author: your name
 * @Date: 2021-12-30 15:41:51
 * @LastEditTime: 2022-01-06 10:19:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2021_9\html\learn\react\comment-app\src\CommentList.js
 */
// CommentList.js
import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }
    
    handleDeleteComment (index) {//当用户点击按钮的时候，Comment 组件会调用 props.onDeleteComment，也就是 CommentList 的 handleDeleteComment 方法。而 handleDeleteComment 会调用 CommentList 所接受的配置参数中的 props.onDeleteComment，并且把下标传出去。
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
          }
    }
    render() {
        return (
          <div>
            {this.props.comments.map((comment, i) =>
              <Comment
                comment={comment}
                key={i}
                index={i}
                onDeleteComment={this.handleDeleteComment.bind(this)} />
            )}
          </div>
        )
    }
}
export default CommentList