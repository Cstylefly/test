<template>
    <div>
        <h2>Parent</h2>
        <span>{{fromApp}}</span>
        <button @click="toChild">toChild</button>
        <Child :msg="msg" v-if="showChild"/>
        <slot name="aaa">
            <div>dasd</div>
        </slot>
    </div>
</template>
<script>
import Child from '@/components/Child'
export default {
    data(){
        return{
            msg:'this is from parent',
            showChild:false
        }
    },
    methods:{
       toChild(){
           console.log('this is parent')
           
       }
    },
    props:{
        fromApp:{
            type:String,
            default:''
        }
    },
    components:{
        Child
    },
    mounted(){
        this.$EventBus.$on('toParent',(data) => {
               console.log(data,123)
           })
        setTimeout(() => {
            this.showChild = true
        },1000)   
    }
}
</script>
<style scoped>

</style>