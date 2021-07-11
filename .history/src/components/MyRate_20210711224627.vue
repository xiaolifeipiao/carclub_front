<!--
 * @Author: xiaolifeipiao
 * @Description: 评分封装
 * @version: 0.0.0
 * @Date: 2021-07-11 22:35:57
 * @LastEditTime: 2021-07-11 22:46:26
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyRate.vue
-->
<template>
   <div>
       <span class=rate_title>我的：</span>
        <van-rate
            v-model="rateValue"
            readonly 
            allow-half
            :size="12"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
           />
           <span class="car_sart">{{rateValue}}</span>
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
    value: {
      type: number,
      required: true
    }
  },
  setup: (props) => {
      const rateValue = props.value;
    return { rateValue }
  }
})
</script>

<style scoped lang='less'>
.rate_title{
    font-size: 12px;
    color: #999999;
    line-height: 18px;
    font-weight: 400;
}
</style>
