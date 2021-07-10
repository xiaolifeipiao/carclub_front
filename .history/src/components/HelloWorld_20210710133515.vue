<template>
   <van-button class="my-button">按钮</van-button>
   <van-button color="#7232dd">单色按钮</van-button>
  <van-button color="#7232dd" plain>单色按钮</van-button>
  <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</van-button>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Button} from 'vant'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'HelloWorld',
  components:{
     [Button.name]:Button
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore()
    const count = ref(0)
    onMounted(async()=>{
        await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO)
    })
    
    return { count }
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
