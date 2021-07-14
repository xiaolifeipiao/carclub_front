<!--
 * @Author: xiaolifeipiao
 * @Description: 我的页面
 * @version: 0.0.0
 * @Date: 2021-07-14 14:48:41
 * @LastEditTime: 2021-07-14 15:13:50
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\me.vue
-->
<template>
    <!-- 导航 -->
    <nav-bar title="我的"></nav-bar>
    <!-- 用户信息栏 -->
    <div class="user_info">
        <div class="user_image">
            <img src="../assets/通用（logo）@2x.png" />
        </div>
        <div class="user_content">
            <div class="user_"></div>
            <div class="user_sign"></div>
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
