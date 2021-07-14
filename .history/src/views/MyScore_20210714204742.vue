<!--
 * @Author: xiaolifeipiao
 * @Description: 我的评分
 * @version: 0.0.0
 * @Date: 2021-07-14 17:29:01
 * @LastEditTime: 2021-07-14 20:47:41
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\MyScore.vue
-->
<template>
    <!-- 导航条 -->
    <nav-bar title="我的评分"></nav-bar>
    <!-- 筛选 -->
    <select-query-nav :list=""></select-query-nav>
     <!-- <div class="car_nav">
        <van-tag :plain='taggColor === 0' size="large" :color="taggColor !== 0? '#F6F7FB' : ''"  @click="selectClick(0)"  text-color="#1F2129"   >全部</van-tag>
        <van-tag :plain='taggColor === 1' class="tag" :color="taggColor !== 1? '#F6F7FB' : ''"  @click="selectClick(1)"  size="large" text-color="#1F2129">太差</van-tag>
        <van-tag :plain='taggColor === 2'  class="tag"  :color="taggColor !== 2? '#F6F7FB' : ''"  @click="selectClick(2)"   size="large" text-color="#1F2129" >一般</van-tag>
        <van-tag :plain='taggColor === 3'  class="tag"  :color="taggColor !== 3? '#F6F7FB' : ''"  @click="selectClick(3)"   size="large" text-color="#1F2129" >可以</van-tag>
    </div> -->
    <van-pull-refresh  @refresh="onRefresh">
        <div v-for="item in carSerieslist">
        <car-series-item :isCarRate='true' :rateList="item" :opType="selectOperationType.TO_SCORE"></car-series-item>
    </div>
  </van-pull-refresh>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import { Tag,PullRefresh} from 'vant'
import NavBar from '@coms/NavBar.vue'
import SelectQueryNav from '@coms/SelectQueryNav.vue'
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import {selectOperationType} from '@utils/enumType'
export default defineComponent({
    name:'MyScore',
    components:{
        NavBar,
        CarSeriesItem,
        SelectQueryNav,
        [Tag.name]:Tag,
        [PullRefresh.name]:PullRefresh
    },
    setup() {
        // // 定义切换车型
        // const taggColor = ref(0)
        //   // 选择车型
        // const selectClick = (index)=>{
        //     console.log(index)
        //     taggColor.value = index
        // }
        const rateSelectLise = ["全部","太差","一般","可以"]
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
         // 加载数据
        const onLoad =async()=>{
            await getALLL();
            finished.value=true
        }
        const onRefresh = () => {
            // 清空列表数据
            finished.value = false;
            // 重新加载数据
            onLoad();
        };
        return{
            taggColor,
            selectClick,
            onRefresh,
            carSerieslist,
            selectOperationType
        }
    },
})
</script>
<style lang="less" scoped>
.car_nav{
  margin: 5px 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .tag{
    margin-left: 10px;
  }
}
</style>