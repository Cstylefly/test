<template>
    <div>
        Home
        {{$route.query ? $route.query.id:''}}
        {{$route.params ? $route.params.id :''}}
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$router,12344)
    }
}
</script>
