<!--
 * @Author: xiaolifeipiao
 * @Description: 品牌车系页
 * @version: 0.0.0
 * @Date: 2021-07-11 19:08:08
 * @LastEditTime: 2021-07-14 22:48:25
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
    <!-- 筛选 -->
     <select-query-nav :list="brandSelectList" @selectClick="selectClick"></select-query-nav>
    <van-divider />
  </van-config-provider>
  <van-pull-refresh  @refresh="onRefresh">
    <div v-for="item in carSerieslist">
      <car-series-item :isCarRate='true' :rateList="item" :opType=" selectOperationType.TEST_DRIVE" @onOperation="Operation"></car-series-item>
    </div>
  </van-pull-refresh>
  <van-action-sheet v-model:show="show" title="标题">
        <div class="content">内容</div>
    </van-action-sheet>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted,reactive } from 'vue'
import {Tab, Tabs ,Tag  ,PullRefresh,Divider,ActionSheet } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import NavBar from '@coms/NavBar.vue'
import SelectQueryNav from '@coms/SelectQueryNav.vue'
import Model from '@coms/Model.vue'
import {carSeriesModel} from '@/models/carSeriesModel'
import {selectOperationType} from '@utils/enumType'
import {brandSelectList} from '@utils/tool'
export default defineComponent({
  name: 'BrandCarSeries',
  components:{
    [Tab.name]:Tab,
    [Divider.name]:Divider,
    [PullRefresh.name]:PullRefresh,
    [Tabs.name]:Tabs,
    [Tag.name]:Tag,
    CarSeriesItem,
    NavBar,
    SelectQueryNav,
    Model
  },
  setup: (props) => {
    const route = useRoute()
    const brandId = route.params?.brandId
    console.log(brandId)
    // 是否打开模态框
    const show = ref(false)
    const Operation =(op,id) =>{
      show.value = true
      console.log(op,id)
    }
    // 下拉刷新
    const finished = ref(false)
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
      tabTextColor:'#1F2129',
      tabsBottomBarWidth:'20px',
      dividerMargin:'0'
    };
    // 选择车的在售状态
    const onClick = (index, title) => console.log(index,title);
    // 筛选选择
    const selectClick =(index,item)=>{
          console.log(index,item)
        }
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
    // console.log( selectOperationType.TEST_DRIVE)
    return { 
        themeVars,
        carSerieslist,
        onClick,
        selectClick,
        onRefresh,
        selectOperationType,
        brandSelectList,
        Operation,
        show
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

</style>
