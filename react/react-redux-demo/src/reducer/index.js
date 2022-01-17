/*
 * @Author: your name
 * @Date: 2022-01-10 22:10:51
 * @LastEditTime: 2022-01-11 15:40:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\react-redux-demo\src\reducer\index.js
 */
const initState = {
    count: 0
};
//接受两个参数 state和action,然后进行逻辑处理
//判断发送过来的action是不是需要的
//如果是，就return一个新的state
exports.reducer = (state=initState, action) => {
    console.log('reducer:', action);
    switch (action.type) {
        case 'add_action':
            
            return {
                count: state.count + 1
            };
    
        default:
            return state;
    }
};