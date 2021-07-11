<!--
 * @Author: xiaolifeipiao
 * @Description: 评分封装
 * @version: 0.0.0
 * @Date: 2021-07-11 22:35:57
 * @LastEditTime: 2021-07-11 22:43:12
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyRate.vue
-->
<template>
   <div>
       <span>我的：</span>
        <van-rate
            v-model="value"
            readonly 
            allow-half
            :size="12"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
           />
           <span class="car_sart">{{value}}</span>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Rate} from 'vant'
export default defineComponent({
  name: 'MyRate',
  components:{
     [Rate.name]:Rate
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
      const value = ref(1)
    return { value }
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
