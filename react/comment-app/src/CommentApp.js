/*
 * @Author: your name
 * @Date: 2021-12-30 15:41:38
 * @LastEditTime: 2022-01-06 10:21:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2021_9\html\learn\react\comment-app\src\CommentApp.js
 */
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  componentWillMount () {
    this._loadComments()
  }
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }
  handleDeleteComment(index) {
    // console.log(index)
    const comments = this.state.comments
    comments.splice(index, 1)//通过 comments.splice 删除特定下标的评论
    this.setState({ comments })//通过 setState 重新渲染整个评论列表
    this._saveComments(comments)//调用了 _saveComments 方法把数据同步到 LocalStorage 中
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    )
  }
}
export default CommentApp