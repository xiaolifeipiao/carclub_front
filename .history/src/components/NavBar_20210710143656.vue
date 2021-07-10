<template>
  <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
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
    
    return { 
        onClickLeft,
        onClickRight,
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
