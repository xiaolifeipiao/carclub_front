<!--
 * @Author: xiaolifeipiao
 * @Description: 我的页面
 * @version: 0.0.0
 * @Date: 2021-07-14 14:48:41
 * @LastEditTime: 2021-07-14 15:55:40
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
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@coms/NavBar.vue'
export default defineComponent({
    name:'Me',
    components:{
        NavBar
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
        top: 30px;
        width: 60px;
        height: 30px;
        background: rgba(166, 166, 166, 0.8);
        border-radius: 0 0 60px  60px;
    }
    img {
        width: 60px;
        height: 60px;
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
</style>
