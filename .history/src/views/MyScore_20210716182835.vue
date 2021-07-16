<!--
 * @Author: xiaolifeipiao
 * @Description: 我的评分
 * @version: 0.0.0
 * @Date: 2021-07-14 17:29:01
 * @LastEditTime: 2021-07-16 18:28:35
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\MyScore.vue
-->
<template>
    <!-- 导航条 -->
    <my-nav-bar title="我的评分"></my-nav-bar>
    <!-- 筛选 -->
    <select-query-nav :list="rateSelectList" @selectClick="selectClick"></select-query-nav>
    <van-pull-refresh  @refresh="onRefresh">
        <div v-for="item in carSerieslist">
        <car-series-item :isCarRate='true' :rateList="item" :opType="selectOperationType.TO_SCORE"></car-series-item>
    </div>
  </van-pull-refresh>
  <model :isRate="true"></model>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import { Tag,PullRefresh} from 'vant'
import MyNavBar from '@coms/MyNavBar.vue'
import SelectQueryNav from '@coms/SelectQueryNav.vue'
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import Model,{mitter} from '@coms/Model.vue'
import {selectOperationType} from '@utils/enumType'
import {rateSelectList} from '@utils/tool'
export default defineComponent({
    name:'MyScore',
    components:{
        MyNavBar,
        Model,
        CarSeriesItem,
        SelectQueryNav,
        [Tag.name]:Tag,
        [PullRefresh.name]:PullRefresh
    },
    setup() {
        const selectClick =(index,item)=>{
          console.log(index,item)
        }
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
        // 是否打开模态框
        const show = ref(false)
        // 我的评分
        const Operation =(op,id) =>{
            isRate.value = true
            show.value = true
            mitter.emit("on-show", show.value);
            console.log(op,id)
        }
        return{
            onRefresh,
            selectClick,
            carSerieslist,
            selectOperationType,
            rateSelectList,
            
        }
    },
})
</script>
<style lang="less" scoped>
</style>