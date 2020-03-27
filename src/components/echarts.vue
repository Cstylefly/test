<template>
    <div style="width:500px;height:300px;" ref="echarts">
        
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    data(){
        return{
            optionsData:{
                color:['#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
                legend: {
                     data:['es6','java','react','vue','node']
                },
                tooltip:{
                    trigger:'axis'
                },
                xAxis:{
                    axisLabel:{
                        show:true,
                        color:'green'
                    },
                    type:'category',
                    data:['2016','2017','2018','2019','2020']
                },
                yAxis:{
                    type:'value'
                },
                series:[
                    {
                        name:'es6',
                        type:'line',
                        data:[200,300,500,600,900]
                    },
                    {
                        name:'java',
                        type:'line',
                        data:[100,1300,1500,900,800]
                    },
                    {
                        name:'react',
                        type:'line',
                        data:[100,200,800,900,1000]
                    },
                    {
                        name:'vue',
                        type:'line',
                        data:[200,300,700,900,1900]
                    },
                    {
                        name:'node',
                        type:'line',
                        data:[100,200,500,700,1000]
                    }
                ]
            }
        }
    },
    methods:{
        set(){
            const myEcharts = echarts.init(this.$refs.echarts)
            myEcharts.setOption(this.optionsData)
        }
    },
    mounted(){
        this.set()
    }
}
</script>
<style scoped>

</style>