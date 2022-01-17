/*
 * @Author: your name
 * @Date: 2021-12-30 15:41:45
 * @LastEditTime: 2022-01-05 21:31:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2021_9\html\learn\react\comment-app\src\CommentInput.js
 */
import React , {Component} from 'react'

class CommentInput extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            content : ''
        }
    }
    componentDidMount() {
        this.textarea.focus()
    }
    componentWillMount() {
        this._loadUsername()
    }
    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({username})
        }
    }
    handleUsernameChange(event){
        this.setState({
            username : event.target.value//通过 event.target.value 获取 <input /> 中用户输入的内容，然后通过 setState 把它设置到 state.username 当中
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime:+new Date()
            })
        }
        this.setState({content:''})
    }
    _saveUsername(username) {
        localStorage.setItem('username',username)
    }
    handleUseranmeBlur(event) {
        this._saveUsername(event.target.value)
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                     <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input' >
                        <input
                            onBlur ={this.handleUseranmeBlur.bind(this)}
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input' >
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button' >
                    <button 
                        onClick={this.handleSubmit.bind(this)}
                    >发布</button>
                </div>
            </div>
        )
    }
}
export default CommentInput