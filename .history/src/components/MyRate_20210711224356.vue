<!--
 * @Author: xiaolifeipiao
 * @Description: 评分封装
 * @version: 0.0.0
 * @Date: 2021-07-11 22:35:57
 * @LastEditTime: 2021-07-11 22:43:56
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyRate.vue
-->
<template>
   <div>
       <span class=rate_title>我的：</span>
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

<style scoped lang='less'>
.rate_title{
    
}
</style>
