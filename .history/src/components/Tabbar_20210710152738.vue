<!--
 * @Author: xiaolifeipiao
 * @Description: 标签栏
 * @version: 0.0.0
 * @Date: 2021-07-10 15:18:36
 * @LastEditTime: 2021-07-10 15:27:38
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Tabbar.vue
-->

<template>
<van-config-provider :theme-vars="themeVars">
    <van-tabbar v-model="active">
        <van-tabbar-item badge="3">
            <span>选车</span>
            <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item badge="3">
            <span>选车</span>
            <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
    </van-tabbar>
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Tabbar, TabbarItem } from 'vant';
import { log } from 'console';
export default defineComponent({
  name: 'TabBar',
  components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
      const active = ref(0);
      const icon = {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
      // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeVars = {
        navBarHeight:'44px',
        navBarArrowSize:'20px',
        navBarIconColor:'#333333',
        navBarTextColor:'#333333',
        navBarTitleFontSize:'16px',
        navBarTitleTextColor:'#333333'
    };
    return { 
        icon,
        active,
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
