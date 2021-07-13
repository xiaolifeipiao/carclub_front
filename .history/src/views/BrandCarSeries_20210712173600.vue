<!--
 * @Author: xiaolifeipiao
 * @Description: 品牌车系页
 * @version: 0.0.0
 * @Date: 2021-07-11 19:08:08
 * @LastEditTime: 2021-07-12 17:36:00
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\BrandCarSeries.vue
-->

<template>
<van-config-provider :theme-vars="themeVars">
  <nav-bar title="奥迪"></nav-bar>
  <van-tabs @click="onClick" class="mytab">
    <van-tab title="在售"></van-tab>
    <van-tab title="未售"></van-tab>
    <van-tab title="停售"></van-tab>
  </van-tabs>
  <div class="car_nav">
    <van-tabs @click="onClick" >
    <van-tab title="在售"></van-tab>
    <van-tab title="未售"></van-tab>
    <van-tab title="停售"></van-tab>
  </van-tabs>
  </div>
    <div v-for="item in carSerieslist">
      <car-series-item :isCarRate='true' :rateList="item"></car-series-item>
    </div>
  </van-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Tab, Tabs  } from 'vant';
import { useRouter } from 'vue-router';
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import NavBar from '@coms/NavBar.vue'
import {carSeriesModel} from '@/models/carSeriesModel'
export default defineComponent({
  name: 'BrandCarSeries',
  components:{
     [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    CarSeriesItem,
    NavBar
  },
  setup: (props) => {
    const carSerieslist:Array<carSeriesModel>=[
      {
        id:1,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:2,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:3,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:4,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:5,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:6,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:7,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:8,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:9,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:10,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:11,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:12,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:13,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
      
    ]
    const themeVars = {
      tabsBottomBarColor:'#1F2129',
      tabFontSize:'18px',
      tabTextColor:'#1F2129'
    };
      const onClick = (name, title) => console.log(title);
    return { 
        themeVars,
        carSerieslist,
        onClick
     }
  }
})
</script>
<style lang="less" scoped>
.mytab{
  width: 200px;
  height: 44px;
  margin-left: 5px;
}
.car_nav{
  margin: 0 16px;
  height: 36px
}

</style>
