<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情页开发
 * @version: 0.0.0
 * @Date: 2021-07-13 20:51:23
 * @LastEditTime: 2021-07-16 18:11:36
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarDetails.vue
-->
<template>
    <!-- 导航 -->
    <my-nav-bar :title="title"></my-nav-bar>
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
    <!-- 筛选 -->
    <select-query-nav :list="seriesSelectList" @selectClick="selectClick"></select-query-nav>
    <!-- 列表项 -->
    <!-- 下划线 -->
    <van-divider :style="{ margin: '5px 0 0 0'}" />
    <div v-for="item in 3">
        <series-item @onOperation="onOperation"></series-item>
    </div>
    <!-- 弹框 -->
    <model :isRate="true"></model>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyNavBar from '@coms/MyNavBar.vue'
import  CarRotates from '@coms/CarRotates .vue'
import SeriesItem from '@coms/SeriesItem.vue'
import SelectQueryNav from '@coms/SelectQueryNav.vue'
import Model,{mitter} from '@coms/Model.vue'
import {seriesSelectList} from '@utils/tool'
import {Tag,Divider } from 'vant';
import { useRoute } from 'vue-router';
export default defineComponent({
    name:'CarDetails',
    components:{
        MyNavBar,
        CarRotates,
        [Tag.name]:Tag,
        [Divider.name]:Divider,
        SeriesItem,
        SelectQueryNav,
        Model
    },
    setup() {
        //获取车系id和品牌id
        const route = useRoute()
        const brandId = route.params?.brandId;
        const carSeriesId = route.params?.carSeriesId
        console.log(brandId,carSeriesId)
        // 车系
        const title = ref('车系');
        const selectClick =(index,item)=>{
            console.log(index,item)
        }
        // 是否打开模态框
        const show = ref(false)
        const Operation =(op,id) =>{
            show.value = true
            mitter.emit("on-show", show.value);
            console.log(op,id)
        }
        return{
            title,
            selectClick,
            seriesSelectList,
            Operation
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
</style>