<!--
 * @Author: xiaolifeipiao
 * @Description: 导航栏封装
 * @version: 0.0.0
 * @Date: 2021-07-10 14:34:21
 * @LastEditTime: 2021-07-12 15:09:04
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\NavBar.vue
-->

<template>
<van-config-provider :theme-vars="themeVars">
    <van-nav-bar :title="title"  @click-left="onClickLeft" left-arrow>
        <template #right>
            <van-icon name="search" size="18" />
        </template>
</van-nav-bar>
</van-config-provider>

</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { NavBar } from 'vant';
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
      const router = useRouter()
      // const title = ref('测试')
      // title.value = props.title;
      const onClickLeft = () =>router.go(-1);
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
        // title,
        onClickLeft,
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
