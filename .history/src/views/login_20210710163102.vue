<!--
 * @Author: xiaolifeipiao
 * @Description: login
 * @version: 0.0.0
 * @Date: 2021-07-10 16:26:39
 * @LastEditTime: 2021-07-10 16:31:02
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\login.vue
-->
<template>
    <nav-bar :title="title"></nav-bar>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import NavBar from '@coms/NavBar.vue'
export default defineComponent({
  name: 'Login',
  components:{
    NavBar
  },
  setup: (props) => {
      const title = ref('登录')
    const themeVars = {
        navBarHeight:'44px',
        navBarArrowSize:'20px',
        navBarIconColor:'#333333',
        navBarTextColor:'#333333',
        navBarTitleFontSize:'16px',
        navBarTitleTextColor:'#333333'
    };
    return { 
        title,
        themeVars
     }
  }
})
</script>

<style scoped>
</style>
