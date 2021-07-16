<!--
 * @Author: xiaolifeipiao
 * @Description: 我的试驾
 * @version: 0.0.0
 * @Date: 2021-07-14 17:29:01
 * @LastEditTime: 2021-07-16 19:31:13
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\MyDrive.vue
-->
<template>
    <!-- 导航条 -->
    <my-nav-bar title="我的试驾"></my-nav-bar>
    <!-- 筛选 -->
    <select-query-nav :list="driveSelectList" @selectClick="selectClick"></select-query-nav>
    <van-pull-refresh  @refresh="onRefresh" v-model="state.refreshing">
      <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
      >
        <div v-for="item in state.list">
          <car-series-item :isCarRate='true' :rateList="item" :opType="item.type"></car-series-item>
     </div>
      </van-list>
  </van-pull-refresh>
</template>
<script lang="ts">
import { defineComponent,ref,onMounted,reactive } from 'vue'
import { Tag,PullRefresh,List} from 'vant'
import MyNavBar from '@coms/MyNavBar.vue'
import SelectQueryNav from '@coms/SelectQueryNav.vue'
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import {selectOperationType} from '@utils/enumType'
import {driveSelectList} from '@utils/tool'
export default defineComponent({
    name:'MyDrive',
    components:{
        [Tag.name]:Tag,
        [PullRefresh.name]:PullRefresh,
        [List.name]:List,
        SelectQueryNav,
        MyNavBar,
        CarSeriesItem,
    },
    setup() {
        const state = reactive({
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
      });
        // console.log(driveSelectList)
        const selectClick =(index,item)=>{
          console.log(index,item)
          // onLoad(item)
        }
        const carSerieslist:Array<carSeriesModel>=[
    {
      id:1,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
      type:'已提交',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:2,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
      type:'已提交',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:3,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
      type:'已提交',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:4,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
      type:'待试驾',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:5,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
      type:'待试驾',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:6,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
      type:'已提交',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:7,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      type:'待试驾',
      dcar_score: 3.88,
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:8,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      type:'已试驾',
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
        type:'已试驾',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:10,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
        type:'已试驾',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:11,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
        type:'已试驾',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:12,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
      dcar_score: 3.88,
        type:'已试驾',
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
      {
      id:13,
      brand_id:2,
      outter_name:'奥迪A4L',
      brand_name:'奥迪',
      dealer_price:26.30,
        type:'已试驾',
      dcar_score: 3.88,
      cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
    },
    
        ]
        // 初始化数据
        onMounted(()=>{
          state.list=carSerieslist
        })
        // 加载数据
      const onLoad = () => {
        setTimeout(() => {
          if (state.refreshing) {
            state.list = [];
            state.refreshing = false;
          }

          for (let i = 0; i < 10; i++) {
            state.list.push(state.list.length + 1);
          }
          state.loading = false;

          if (state.list.length >= 20) {
            state.finished = true;
          }
        }, 1000);
      };

      const onRefresh = () => {
        // 清空列表数据
        state.list = []
        state.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        state.loading = true;
        onLoad();
      };
      return{
            onRefresh,
            state,
            selectOperationType,
            driveSelectList,
            selectClick,
            onLoad
        }
    },
})
</script>
<style lang="less" scoped>
</style>