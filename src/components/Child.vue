<template>
    <div>
        <h2>Children</h2>
        
        <span>{{msg}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    methods:{
        
    },
    mounted(){
        
       this.$EventBus.$emit('toParent','this is from child')
    }
}
</script>
<style scoped>

</style>
