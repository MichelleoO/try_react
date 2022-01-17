/*
 * @Author: your name
 * @Date: 2022-01-12 17:24:04
 * @LastEditTime: 2022-01-15 21:49:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\send-love\src\reducer\index.js
 */
const initState = {
    status:false
}
exports.loveReducer = (state = initState, action) => {
    console.log('reducer:', action);
    switch (action.type) {
        case 'send_love':
            
            return {
                status: true
            };
        case 'stop_love':
        
            return {
                status: false
            };
        default:
            return state;
    }
      
}  