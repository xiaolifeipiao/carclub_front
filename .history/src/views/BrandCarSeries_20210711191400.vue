<!--
 * @Author: xiaolifeipiao
 * @Description: 品牌车系页
 * @version: 0.0.0
 * @Date: 2021-07-11 19:08:08
 * @LastEditTime: 2021-07-11 19:14:00
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\BrandCarSeries.vue
-->

<template>
<van-config-provider :theme-vars="themeVars">
    
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {  } from 'vant';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'NavBar',
  components:{
     [NavBar.name]:NavBar
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
  
    const themeVars = {
        navBarHeight:'44px',
        navBarArrowSize:'20px',
        navBarIconColor:'#333333',
        navBarTextColor:'#333333',
        navBarTitleFontSize:'16px',
        navBarTitleTextColor:'#333333'
    };
    return { 
        themeVars
     }
  }
})
</script>

<style scoped>
/** 覆盖 Button 最外层元素的样式 */
  .my-button {
    width: 200px;
  }

  /** 覆盖 Button 内部子元素的样式 */
  .my-button .van-button__text {
    color: red;
  }
</style>
