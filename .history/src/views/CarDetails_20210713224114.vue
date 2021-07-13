<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情页开发
 * @version: 0.0.0
 * @Date: 2021-07-13 20:51:23
 * @LastEditTime: 2021-07-13 22:41:14
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
                <div class="rate"><span>3.58分</span><van-icon></van-icon></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBar from '@coms/NavBar.vue'
import  CarRotates from '@/components/CarRotates .vue'
export default defineComponent({
    name:'CarDetails',
    components:{
        NavBar,
        CarRotates
    },
    setup() {
        // 车系
        const title = ref('车系');


        return{
            title
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
       .series_rate{
           img{
               width: 68px;
               height: 20px;
           }
           .rate{
            //    margin-top: -5px;
               height: 25px;
               background-color: #FFCD32;
           }
       }
    }
}
</style>