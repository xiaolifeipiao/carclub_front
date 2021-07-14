<!--
 * @Author: xiaolifeipiao
 * @Description: 我的页面
 * @version: 0.0.0
 * @Date: 2021-07-14 14:48:41
 * @LastEditTime: 2021-07-14 17:10:31
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\me.vue
-->
<template>
    <!-- 导航 -->
    <nav-bar title="我的"></nav-bar>
    <!-- 用户信息栏 -->
    <div class="user_info">
        <div class="user_image">
            <img src="../assets/avatar.jpg" />
            <span>
                <div class="img_cover">
                    <van-icon size="25px" color="#fff" name="edit" />
                </div>
            </span>
        </div>
        <div class="user_content">
            <div class="user_name">懂车小达人</div>
            <div class="user_sign">专注于性能、操控、改装、乐趣的汽车视频 <van-icon size="20px" color="#666" name="edit" /></div>
        </div>
    </div>
    <!-- 背景间隔 -->
    <div class="bag"></div>
    <van-config-provider :theme-vars="themeVars">
        <van-cell-group>
            <van-cell is-link title="我的试驾" icon="https://z3.ax1x.com/2021/07/14/WZIJJg.png" size="55px" />
            <van-cell is-link title="我的评分" icon="https://z3.ax1x.com/2021/07/14/WZIYWQ.png" size="55px" />
        </van-cell-group>
    </van-config-provider>
    <div class="bag"></div>
    <!-- 切换账号 -->
    <van-button type="primary" block>块级元素</van-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {Cell, CellGroup} from 'vant'
import NavBar from '@coms/NavBar.vue'
export default defineComponent({
    name:'Me',
    components:{
        NavBar,
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup
    },
    setup() {
        const themeVars ={
            cellIconSize:'20px',
            cellFontSize:'16px'
        }
        return{
            themeVars
        }
    },
})
</script>
<style lang="less" scoped>
.user_info {
    height: 122px;
    background-image: linear-gradient( #E8ECF7 0%, #FFFFFF 100%);
    display: flex;
    align-items: center;
  .user_image {
    margin-left: 16px;
    position: relative;
    .img_cover{
        text-align: center;
        position: absolute;/*因为父元素使用了相对定位，所以这里的绝对定位就是相对于父元素的*/
        top: 50px;
        width: 77.5px;
        height: 30px;
        background: rgba(166, 166, 166, 0.8);
        border-radius: 0 0  60px 60px;
    }
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
    }
  }

  .user_content {
      margin-left: 16px;
    .user_name {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #1F2129;
        letter-spacing: 0;
        line-height: 34px;
        font-weight: 550;
    }

    .user_sign {
        margin-top: 5px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #979AA8;
        line-height: 18px;
        font-weight: 450;
    }
  }
}

.bag{
    height: 6px;
    background: #F7F8FC;
}
</style>
