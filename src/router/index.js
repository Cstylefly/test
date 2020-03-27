import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/home',
            name:'home',
            component:() => import('@/views/Home')  //这种写法比较好，可以在访问此路由时才加载这个组件（类似懒加载）
        },
        {
            path:'/about',
            name:'about',
            component: () => import('@/views/About')
        }
    ]
})
