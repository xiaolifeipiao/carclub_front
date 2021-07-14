<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情页开发
 * @version: 0.0.0
 * @Date: 2021-07-13 20:51:23
 * @LastEditTime: 2021-07-13 23:48:51
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarDetails.vue
-->
<template>
    <!-- 导航 -->
    <nav-bar :title="title"></nav-bar>
    <!-- 车旋转360° -->
    <car-rotates></car-rotates>
    <!-- 车系栏 -->
    <div class="car_series">
        <div class="series_left">
            <div class="series_name">
                <span>奔驰C级</span>
                <span>奔驰/中型车</span>
            </div>
            <div class="series_price">
                 <span>18.89-40.21万</span>
                <span>指导价: 30.78-47.48万</span>
            </div>
        </div>
        <div class="series_right">
            <div class="series_rate">
                <img src="../assets/rete/rate.png">
                <div class="rate"><span>3.58分</span><van-icon name="play" size="10px"></van-icon></div>
            </div>
        </div>
    </div>
    <!-- 选择车系产期 -->
    <div class="car_nav">
      <van-tag :plain='taggColor === 0' size="large" :color="taggColor !== 0? '#F6F7FB' : ''"  @click="selectClick(0)"  text-color="#1F2129"   >在售</van-tag>
      <van-tag :plain='taggColor === 1' class="tag" :color="taggColor !== 1? '#F6F7FB' : ''"  @click="selectClick(1)"  size="large" text-color="#1F2129">2020款</van-tag>
      <van-tag :plain='taggColor === 2'  class="tag"  :color="taggColor !== 2? '#F6F7FB' : ''"  @click="selectClick(2)"   size="large" text-color="#1F2129" >2019款</van-tag>
      <van-tag :plain='taggColor === 3'  class="tag"  :color="taggColor !== 3? '#F6F7FB' : ''"  @click="selectClick(3)"   size="large" text-color="#1F2129" >2018款</van-tag>
    </div>
    <!-- 列表项 -->
    <!-- 下划线 -->
    <van-divider :style="{ margin: '5px 0 0 0'}" />
    <div v-for="item in 3">
        <series-item></series-item>
    </div>
    
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBar from '@coms/NavBar.vue'
import  CarRotates from '@coms/CarRotates .vue'
import SeriesItem from '@coms/SeriesItem.vue'
import {Tag,Divider } from 'vant';
import { useRoute } from 'vue-router';
export default defineComponent({
    name:'CarDetails',
    components:{
        NavBar,
        CarRotates,
        [Tag.name]:Tag,
        [Divider.name]:Divider,
        SeriesItem
    },
    setup() {
        //获取车系id和品牌id
        const route = useRoute()
        route.params.car
        // 车系
        const title = ref('车系');
        // 定义切换车型
        const taggColor = ref(0)
           // 选择车型
        const selectClick = (index)=>{
            console.log(index)
            taggColor.value = index
        }
        return{
            title,
            taggColor,
            selectClick
        }
    },
})
</script>
<style lang="less" scoped>
.car_series{
    display: -webkit-flex;
    display: flex;
    height: 66px;
    align-items: center;
    margin: 0 16px;
    position: relative;
    .series_left{
        .series_name{
            span:first-child{
                font-size: 20px;
                color: #1F2129;
                line-height: 28px;
                font-weight: 550;
            }
            span:last-child{
                font-size: 11px;
                color: #979AA8;
                line-height: 18px;
                font-weight: 400;
                margin-left: 5px;
               
            }
        }
        .series_price{
            span:first-child{
                font-size: 17px;
                color: #E62021;
                line-height: 24px;
                font-weight: 600;
            }
            span:last-child{
                font-size: 11px;
                color: #1F2129;
                line-height: 18px;
                font-weight: 400;
                margin-left: 5px;
            }
        }
    }
    .series_right{
        position:absolute;
        right: 0;
       .series_rate{
           img{
               width: 68px;
               height: 20px;
           }
           .rate{
               text-align: center;
               margin-top: -5px;
               height: 25px;
               background-color: #FFCD32;
                font-size: 17px;
                color: #1F2129;
                line-height: 24px;
                font-weight: 600;
           }
       }
    }
}
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