<!--
 * @Author: xiaolifeipiao
 * @Description: 车系列表项
 * @version: 0.0.0
 * @Date: 2021-07-11 19:11:04
 * @LastEditTime: 2021-07-11 19:25:18
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\CarSeriesItem.vue
-->
<!--
 * @Author: xiaolifeipiao
 * @Description: 标签栏
 * @version: 0.0.0
 * @Date: 2021-07-10 15:18:36
 * @LastEditTime: 2021-07-10 21:33:58
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyTabBar.vue
-->
<template>
<van-config-provider :theme-vars="themeVars">
    <van-row gutter="10">
        <van-col span="3">span: 8</van-col>
        <van-col span="9">span: 8</van-col>
    </van-row>
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Image, Col, Row  } from 'vant';
import { log } from 'console';
export default defineComponent({
  name: 'MyTabBar',
  components:{
    [Image.name]:Image,
    [Col.name]:Col,
    [Row.name]:Row
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    
    const themeVars = {
       tabbarHeight:'48px',
       tabbarItemFontSize:'10px',
       tabbarItemTextColor:'#1F2129',
       tabbarItemMarginBottom:'0'
    };
    return { 
        themeVars,
     }
  }
})
</script>

<style scoped>
/** 覆盖 Button 最外层元素的样式 */
  .icon{
      width: 32px;
      height: 32px;
  }
  .tab_bar_mb{
      margin-bottom: 5px;
  }
</style>
