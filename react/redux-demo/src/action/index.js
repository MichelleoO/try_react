/*
 * @Author: your name
 * @Date: 2022-01-10 17:03:28
 * @LastEditTime: 2022-01-10 20:46:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\redux-demo\src\action\index.js
 */
const sendAction = () => {
    //需要返回一个action对象
    return {
        type: 'send_type',
        value:'这是一个action'
    }
}
module.exports = {//导出
    sendAction
}