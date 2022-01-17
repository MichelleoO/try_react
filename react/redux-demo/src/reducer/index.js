/*
 * @Author: your name
 * @Date: 2022-01-10 17:26:24
 * @LastEditTime: 2022-01-10 20:47:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\redux-demo\src\redux\index.jsl\
 */
// 用于reducer函数，处理发送过来的action

const initState = {
    value:'默认值'
}
const reducer = (state=initState, action) => {//如果外界没有值传递过来的时候，使用默认值
    console.log('reducer', state, action);
    switch (action.type) {//通过return返回store
        case 'send_type':
            
            return Object.assign({}, state, action);//把两个对象进行组合，生成一个新的state
    
        default:
            return state;
    }
};
module.exports = {//对函数进行导出
    reducer
};