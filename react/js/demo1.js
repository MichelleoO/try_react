/*
 * @Author: your name
 * @Date: 2021-12-29 15:40:45
 * @LastEditTime: 2021-12-29 19:14:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2021_9\html\learn\react\js\demo1.js
 */
/* //第一版
const btn = document.querySelector(".like-button");
const text = btn.querySelector(".like-text");
let isLiked = false;
btn.addEventListener("click", () => {
  isLiked = !isLiked;
 if (isLiked) {
    text.innerHTML = "取消";
  } else {
    text.innerHTML = "点赞";
  }
}); */

/* //第二版 实现复用
class LikeButton{
    render(){
        return`
            <button class="like-button">
            <span class="like-text">点赞</span>
            </button> 
        `
    }
}
const wrapper = document.querySelector(".wrapper");
wrapper.innerHTML = new LikeButton().render();
wrapper.innerHTML += new LikeButton().render();
//创建一个类实现 ​render​ 方法返回一个 HTML 字符串, 然后创建实例, 调用 ​render​方法, 把返回的字符串加入到 wrapper 上, 这样就实现了代码的复用, 但是如果我们想在 ​button​上添加事件怎么办呢, 因为返回的 HTML 字符串, 所以添加不了 */

/* //第三版：实现加入事件
const creatDOMFromString = (domStr) => {
    const div = document.createElement("div");//为指定的标记创建元素的实例。
    div.innerHTML = domStr;
    return div;
}
class LikeButton{
    render(){
        this.el = creatDOMFromString(
            `<button class="like-button">
                <span class="like-text">点赞</span>
                <span></span>
            </button>`
        );
        this.el.addEventListener("click",() => console.log("click"));
        return this.el;
    }
}
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(new LikeButton().render());
wrapper.appendChild(new LikeButton().render());
//创建一个 ​createDOMFromString​方法, 然后把 HTML 字符串传入, 返回的就是一个 DOM 元素, 然后在 ​render​方法中使用这个方法返回的 DOM 元素赋值给 this.el, 再给 ​this.el​ 加入 ​click​ 事件就实现了事件添加, 但是怎么改​button​的文字呢 */

/* // 第四版: 实现实时改变按钮文字
const creatDOMFromString = (domStr) => {
    const div = document.createElement("div");
    div.innerHTML = domStr;
    return div;
}

class LikeButton{
    constructor(){
        this.state = {
            isLiked = false
        };
    }
    changeText(){
        const text = this.el.querySelector(".like-text");
        this.state.isLiked =! this.state.isLiked;
        text.innerHTML = this.innerHTML.isLiked ? "取消" : "点赞";
    }
    render(){
        this.el = creatDOMFromString(
            `
            <button class="like-button">
                <span class="like-text">点赞</span>
                <span></span>
            </button>
            `
        );
        this.el.addEventListener("click",this.changeText.bind(this));
        return this.el;
    }
}
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(new LikeButton().render());
wrapper.appendChild(new LikeButton().render());
//在 ​constructor​上加入一个 state 状态, 然后定义一个 ​changeText​的方法, 就实现了改变 ​button​中的文字, 现在这个点赞功能的复用性以及很完善了, 接下来我就想怎么只用数据就可以实现 DOM 的更新, 看一下开发者工具的文字变化, 作为下一版铺垫 */

/* // 第五版: 不操作 DOM
const createDOMFromString = (domStr) => {
    const div = document.createElement("div");
     div.innerHTML = domStr;
    return div;
};
class LikeButton {
    constructor() {
        this.state = { isLiked: false };
        }
    setState(state) {//新增了 ​setState​函数, 接收一个 state 对象, 然后去替换原有的对象, 再重新 ​render​页面, 这时候的 ​render​会获取最新的 state
        this.state = state;
        this.el = this.render();
    }
    changeText() {//改写了 ​changeText​里的逻辑, 直接调用 setState 设置 ​isLiked​
        this.setState({
        isLiked: !this.state.isLiked,
    });
    }
    render() {
        this.el = createDOMFromString(//HTML 字符串中加入了一个 JS 表达式, 用 ES6 的模板字符串实现的, 内容会根据 isLiked 的变化而变化
        ` <button class="like-button">
            <span class="like-text">${this.state.isLiked ? "取消" : "点赞"}</span>
            <span> </span>
        </button> `
    );
    this.el.addEventListener("click", this.changeText.bind(this));
    return this.el;
    }
}
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(new LikeButton().render());
wrapper.appendChild(new LikeButton().render());
//这样更改确实会改变 ​button​中的内容, 但是并没有真正的渲染到页面上, 所以要让组件外面知道里面的 DOM 发生了变化, 然后在重新渲染页面 */

/* // 第六版: 通知内部更新 DOM
const createDOMFromString = (domStr) => {
    const div = document.createElement("div");
     div.innerHTML = domStr;
    return div;
};
class LikeButton{
    constructor(){
        this.state = {isLiked:false};
    }
    setState(state){//在 ​setState​上新加了几行代码, 把旧的 ​this.el​ 存到变量里, 
        const oldEl = this.el;
        this.state = state;
        this.el = this.render();
        if(this.onStateChange)this.onStateChange(oldEl,this.el);//从外面传入函数
    } //加入了 ​onStateChange​函数, 这是外部传入内部的函数, 需要外部知道内部 DOM 发生变化进行的一系列操作(新节点插入到旧节点前面, 然后在删除旧节点)
    changeText(){
        this.setState({
            isLiked:!this.state.isLiked,
        });
    }
    render(){
        this.el = createDOMFromString(
            `
            <button class="like-button">
                <span class="like-text">${this.state.isLiked?"取消":"点赞"}</span>
                <span></span>
            </button>
            `
        );
        this.el.addEventListener("click",this.changeText.bind(this));
        return this.el;
    }
}
const wrapper = document.querySelector(".wrapper")
const likeButton1 = new LikeButton();
const likeButton2 = new LikeButton();
wrapper.appendChild(likeButton1.render());
wrapper.appendChild(likeButton2.render());
likeButton1.onStateChange = (oldEl, newEl) => {
  wrapper.insertBefore(newEl, oldEl); // 加入新元素
  wrapper.removeChild(oldEl); // 删除旧元素, 这里的操作十分耗费性能, 需要用到虚拟DOM
};
likeButton2.onStateChange = (oldEl, newEl) => {
  wrapper.insertBefore(newEl, oldEl); // 加入新元素
  wrapper.removeChild(oldEl); // 删除旧元素, 这里的操作十分耗费性能, 需要用到虚拟DOM
};
//这样就实现了利用数据的改变来控制 DOM UI 的变化, 但是这样有一个致命的缺点, ​setState​的每次调用都会重新创建, 删除, 更新节点, 这样导致浏览器进行大量的重绘或回流, 所以这时候就需要 React 最出名的 Virtual DOM 来进行 DOM Diff 比较哪些节点需要删除, 哪些节点需要修改, 哪些节点原封不动, 由于这里主要介绍的是组件化思想, DOM Diff 就不做过多介绍 */