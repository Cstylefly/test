import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    state:{
        count:0
    },
    getters:{
        count(state){
            return state.count += 1
        }
    },
    mutations:{
        //这里是真正操作state的，只能是同步的
        add(state,data){
            state.count += data
        },
        reduce(state,data){
            state.count -= data
        }
    },
    actions:{
        //这里是将同步或者异步的方法commit给mutations去操作state的改变（并不是真正操作state的）
        add({commit}){
            commit('add',10)
        },
        asyncAdd({commit}){
           setTimeout(() => {
               commit('add',20)
           },2000)
        },
        reduce({commit}){
            commit('reduce',10)
        }
    }
})
