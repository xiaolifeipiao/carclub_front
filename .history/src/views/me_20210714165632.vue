<!--
 * @Author: xiaolifeipiao
 * @Description: 我的页面
 * @version: 0.0.0
 * @Date: 2021-07-14 14:48:41
 * @LastEditTime: 2021-07-14 16:47:21
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
    <van-cell-group>
        <svg t="1626252977146" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1528" width="200" height="200"><path d="M370.513 874.855c-48.815-20.02-92.685-50.082-129.215-87.716-69.276-71.384-112.122-170.011-112.122-278.945 0-108.918 42.846-207.544 112.122-278.929 69.836-71.953 170.267-107.93 270.706-107.93 100.423 0 200.861 35.977 270.688 107.93 69.276 71.384 112.131 170.01 112.131 278.929 0 108.934-42.855 207.561-112.131 278.945-36.52 37.633-80.399 67.694-129.205 87.716-45.187 18.524-93.334 27.811-141.483 27.811-48.166 0-96.298-9.288-141.491-27.811l0 0zM512.005 199.998c-80.213 0-160.425 28.732-216.19 86.211-33.202 34.203-58.802 76.253-73.97 123.216-4.189 15.772 1.398 23.218 16.742 22.364 50.317-1.991 158.745-3.58 181.017-4.735-19.13 22.356-30.724 51.706-30.724 83.843 0 35.031 13.779 66.757 36.06 89.716 7.949 8.2 16.994 15.277 26.875 20.983 18.62 10.778 39.397 16.165 60.19 16.174 20.785-0.008 41.563-5.396 60.181-16.174 9.881-5.707 18.919-12.783 26.875-20.983 22.281-22.959 36.06-54.684 36.06-89.716 0-32.136-11.603-61.488-30.716-83.843 22.263 1.155 130.691 2.744 181.001 4.735 15.345 0.853 20.94-6.593 16.742-22.364-15.159-46.962-40.762-89.012-73.971-123.216-55.764-57.48-135.968-86.211-216.174-86.211l0 0zM581.084 439.837c-35.645-36.729-102.534-36.729-138.178 0-17.676 18.215-28.613 43.389-28.613 71.185 0 27.811 10.937 52.978 28.613 71.199 6.813 7.011 14.615 13.002 23.19 17.704 28.483 15.645 63.324 15.645 91.808 0 8.566-4.702 16.377-10.694 23.182-17.704 17.684-18.222 28.62-43.389 28.62-71.199 0.001-27.794-10.936-52.969-28.62-71.185l0 0zM529.738 548.203c13.365-6.761 22.564-20.933 22.564-37.307 0-17.353-10.337-32.221-25.008-38.428-9.71-4.108-20.875-4.108-30.586 0-14.672 6.208-25.008 21.076-25.008 38.428 0 16.373 9.191 30.546 22.555 37.307 11.074 5.588 24.423 5.588 35.483 0l0 0zM575.449 817.192c58.964-12.818 111.669-43.147 152.728-85.459 42.896-44.2 73.092-101.47 84.509-165.509 4.109-17.369-3.143-22.69-15.848-22.272-25.626-0.56-51.261-0.452-75.691 4.293-87.041 16.909-118.171 60.19-133.574 159.829-5.595 36.193-9.151 78.547-12.123 109.118l0 0zM448.541 817.192c-2.963-30.572-6.528-72.925-12.114-109.118-15.404-99.638-46.54-142.919-133.583-159.829-24.423-4.745-50.065-4.853-75.691-4.293-12.699-0.418-19.957 4.902-15.841 22.272 11.408 64.039 41.614 121.309 84.501 165.509 41.068 42.312 93.764 72.64 152.728 85.459z" p-id="1529"></path></svg>
        <van-cell is-link title="我的试驾" icon="location-o" size="55px" />
        <van-cell is-link title="我的评分" icon="location-o" size="55px" />
    </van-cell-group>
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
