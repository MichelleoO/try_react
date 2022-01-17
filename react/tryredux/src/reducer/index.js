/*
 * @Author: your name
 * @Date: 2022-01-11 20:53:25
 * @LastEditTime: 2022-01-12 10:51:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\tryredux\src\reducer\index.js
 */
const initState = {
    count:0
}

exports.reducer = (state=initState, action) => {
    console.log('reducer:', action);
    switch (action.type) {
        case 'add_action':
            
            return {
                count: state.count + 1
            }
    
        default:
            return state;
    }
};