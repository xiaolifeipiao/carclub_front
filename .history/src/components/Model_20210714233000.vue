<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-14 23:30:00
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-action-sheet v-model:show="showOn" title="标题">
        <div class="content">内容</div>
    </van-action-sheet>
</template>
<script lang="ts">
import { defineComponent ,onUnmounted,ref} from 'vue'
import { ActionSheet } from 'vant';
import mitt, { Emitter } from "mitt";

// 实例化mitt
export const mitter: Emitter = mitt();
export default defineComponent({
    naem:'Model',
    components:{
        [ActionSheet.name]:ActionSheet
    },
    setup() {
        const showOn = ref(false) 
          // 添加mitt事件监听器 事件及回调函数
        mitter.on("form-item-created", (show)=>{
            console.log(show)
            showOn.value = show;
        });
        onUnmounted(() => {
            // 删除监听
            mitter.off("form-item-created", (show)=>{
                console.log(show)
             });
        });
         return{
             showOn
         }
    },
})
</script>
<style lang="less" scoped>
  .content {
    padding: 16px 16px 160px;
  }
</style>
