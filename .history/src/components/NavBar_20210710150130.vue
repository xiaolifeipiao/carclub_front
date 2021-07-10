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
import { ref, defineComponent, onMounted } from 'vue'
import { NavBar } from 'vant';
import { log } from 'console';
export default defineComponent({
  name: 'NavBar',
  components:{
     [NavBar.name]:NavBar
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
      const title = ref('测试')
      const onClickLeft = () => console.log("返回");
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
        title，
        onClickLeft,
        onClickRight,
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
