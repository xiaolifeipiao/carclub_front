<!--
 * @Author: xiaolifeipiao
 * @Description: 评分封装
 * @version: 0.0.0
 * @Date: 2021-07-11 22:35:57
 * @LastEditTime: 2021-07-11 22:36:49
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyRate.vue
-->
<template>
   
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Rate} from 'vant'
import { useStore } from 'vuex'
import { UserActionTypes } from '@/store/modules/user/enum_type'
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
