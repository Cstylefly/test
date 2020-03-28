<template>
    <div>
        About
        <span>count的值：{{count}}</span>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
        <button @click="asyncAdd">延迟+</button>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapState(['count']),
        ...mapGetters(['count'])
    },
    methods:{
        ...mapActions(['add','reduce','asyncAdd'])
    },
    mounted(){
        console.log(344234)
    }
}
</script>