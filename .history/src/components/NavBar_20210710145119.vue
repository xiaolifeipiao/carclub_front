<template>
<van-config-provider :theme-vars="themeVars">
    <van-nav-bar title="标题"  @click-left="onClickLeft" left-arrow>
        <template #right>
            <van-icon name="search" size="18" />
        </template>
</van-nav-bar>
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { NavBar } from 'vant';
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
      const onClickLeft = () => Toast('返回');
      const onClickRight = () => Toast('按钮');
      // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeVars = {
        navbar
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackgroundColor: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
      buttonPrimaryBackgroundColor: '#07c160',
    };
    return { 
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
