<!--
 * @Author: xiaolifeipiao
 * @Description: 评分封装
 * @version: 0.0.0
 * @Date: 2021-07-11 22:35:57
 * @LastEditTime: 2021-07-14 21:54:52
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyRate.vue
-->
<template>
   <div>
       <span class=rate_title>
           <slot name="rate_title"></slot>
       </span>
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
import { ref, defineComponent } from 'vue'
import {Rate} from 'vant'
export default defineComponent({
  name: 'MyRate',
  components:{
     [Rate.name]:Rate
  },
  props: {
    rateValue: {
      type: Number,
      required: true
    }
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
  .car_sart{
        font-size: 12px;
        margin-left: 3px;
    }
</style>
