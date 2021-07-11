<!--
 * @Author: xiaolifeipiao
 * @Description: 车型大会首页
 * @version: 0.0.0
 * @Date: 2021-07-10 21:28:15
 * @LastEditTime: 2021-07-10 21:56:19
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\Home.vue
-->
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
import { UserActionTypes } from '@/store/modules/user/enum_type'
export default defineComponent({
  name: 'Home',
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

</style>
