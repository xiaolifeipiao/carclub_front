<!--
 * @Author: xiaolifeipiao
 * @Description: 我的试驾
 * @version: 0.0.0
 * @Date: 2021-07-14 17:29:01
 * @LastEditTime: 2021-07-16 19:10:24
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\MyDrive.vue
-->
<template>
    <!-- 导航条 -->
    <my-nav-bar title="我的试驾"></my-nav-bar>
    <!-- 筛选 -->
    <select-query-nav :list="driveSelectList" @selectClick="selectClick"></select-query-nav>
    <van-pull-refresh  @refresh="onRefresh">
        <div v-for="item in list">
        <car-series-item :isCarRate='true' :rateList="item" :opType="item.type"></car-series-item>
    </div>
  </van-pull-refresh>
</template>
<script lang="ts">
import { defineComponent,ref,onMounted } from 'vue'
import { Tag,PullRefresh} from 'vant'
import MyNavBar from '@coms/MyNavBar.vue'
import SelectQueryNav from '@coms/SelectQueryNav.vue'
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import {selectOperationType} from '@utils/enumType'
import {driveSelectList} from '@utils/tool'
export default defineComponent({
    name:'MyDrive',
    components:{
        MyNavBar,
        CarSeriesItem,
        [Tag.name]:Tag,
        [PullRefresh.name]:PullRefresh,
        SelectQueryNav,
    },
    setup() {
        const finished = ref(false) 
        // console.log(driveSelectList)
        const selectClick =(index,item)=>{
          console.log(index,item)
          onLoad(item)
        }
        const list = ref([])
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
          list.value =carSerieslist
        })
        // 加载数据
      const onLoad =(index)=>{
          list.value=[]
          carSerieslist.map(item=>{
            if(item.type===index){
               list.value.push(item)
            }else if(index==="全部"){
               list.value.push(item)
            }else{
               list.value.push(item)
              finished.value =true
            }
          })
          console.log(list.value)
         
      }
      const onRefresh = () => {
          // 清空列表数据
          // carSerieslist
          finished.value = false;
          // 重新加载数据
          onLoad();
      };
      return{
            onRefresh,
            list,
            selectOperationType,
            driveSelectList,
            selectClick
        }
    },
})
</script>
<style lang="less" scoped>
</style>