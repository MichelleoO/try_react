/*
 * @Author: your name
 * @Date: 2022-01-10 10:10:53
 * @LastEditTime: 2022-01-10 14:40:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\react\demo01\src\store\reducer.js
 */
const defaultState = {
    inputValue: 'Write Something',
    list: [
        'list001',
        'list002',
        'list003'
    ]
}
export default (state = defaultState, action) => {
    console.log(state, action)
    //Reducer里只能既然收state，不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝
        newState.inputValue = action.value
        return newState
    }
    return state
}