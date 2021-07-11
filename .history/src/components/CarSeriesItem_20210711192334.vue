<!--
 * @Author: xiaolifeipiao
 * @Description: 车系列表项
 * @version: 0.0.0
 * @Date: 2021-07-11 19:11:04
 * @LastEditTime: 2021-07-11 19:23:33
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
    <van-row gutter="20">
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
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
      const active = ref(0)
    //   const activeCar = ref(0);
    //    const activeMe = ref(0);
      const iconCar = {
        active: 'src/assets/icon/active/选车-选中@2x.png',
        inactive: 'src/assets/icon/inactive/选车@2x.png',
     };
     const iconMe = {
        active: 'src/assets/icon/active/我的-选中@2x.png',
        inactive: 'src/assets/icon/inactive/我的@2x.png',
     };
     const onChange = (index) => Toast(`标签 ${index}`);
      // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeVars = {
       tabbarHeight:'48px',
       tabbarItemFontSize:'10px',
       tabbarItemTextColor:'#1F2129',
       tabbarItemMarginBottom:'0'
    };
    return { 
        active,
        iconCar,
        iconMe,
        // activeCar,
        // activeMe,
        themeVars,
        onChange
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
