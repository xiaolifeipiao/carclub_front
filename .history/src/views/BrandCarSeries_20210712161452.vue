<!--
 * @Author: xiaolifeipiao
 * @Description: 品牌车系页
 * @version: 0.0.0
 * @Date: 2021-07-11 19:08:08
 * @LastEditTime: 2021-07-12 16:14:52
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\BrandCarSeries.vue
-->

<template>
  <nav-bar title="奥迪"></nav-bar>
<van-config-provider :theme-vars="themeVars">
    <car-series-item :isCarRate='true' :rateList="carSerieslist"></car-series-item>
</van-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Image, Col, Row  } from 'vant';
import { useRouter } from 'vue-router';
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import NavBar from '@coms/NavBar.vue'
import {carSeriesModel} from '@/models/carSeriesModel'
export default defineComponent({
  name: 'BrandCarSeries',
  components:{
    [Image.name]:Image,
    [Col.name]:Col,
    [Row.name]:Row,
    CarSeriesItem,
    NavBar
  },
  setup: (props) => {
    const carSerieslist:Array<carSeriesModel>=[
      {id:2,outter_name:'奥迪A4L',}
    ]
    const themeVars = {
      
    };
    return { 
        themeVars,
        carSerieslist
     }
  }
})
</script>

<style scoped>
</style>
