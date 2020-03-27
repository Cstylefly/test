<template>
    <div>
        {{name}}
        <Parent :fromApp="name">
            <div slot="aaa">
               
            </div>
        </Parent>
        <Echarts/>
        <!-- <router-link to='/home/3'>home</router-link> -->
        <button @click="toHomeByQuery">toHomeByQuery</button>
        <button @click="toHomeByParams">toHomeByParams</button>
        <router-view></router-view>
    </div>
</template>

<script>
import Parent from '@/components/Parent'
import Echarts from '@/components/echarts'
export default {
    data(){
        return{
            name:'App'
        }
    },
    methods:{
        toHomeByQuery(){
            //编程式导航path要和query搭配（必须要把路由配置中的参数插槽去掉不然会有影响）
            this.$router.push({path:'/home',query:{id:2}})
        },
        toHomeByParams(){
            //编程式导航name要和params搭配,想要在url后面获取到传过去的参数，又需要在路由配置中加上参数插槽
            this.$router.push({name:'home',params:{id:3}})
        }   
    },
    components:{
        Parent,
        Echarts
    }
}
</script>
<style scoped>

</style>
