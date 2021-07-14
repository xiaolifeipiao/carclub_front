<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-14 23:20:52
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-action-sheet v-model:show="showw" title="标题">
        <div class="content">内容</div>
    </van-action-sheet>
</template>
<script lang="ts">
import { defineComponent ,ref} from 'vue'
import { ActionSheet } from 'vant';
export default defineComponent({
    naem:'Model',
    components:{
        [ActionSheet.name]:ActionSheet
    },
    setup() {
        const showw = ref(true)
          // 添加mitt事件监听器 事件及回调函数
        mitter.on("form-item-created", callback);
        onUnmounted(() => {
        // 删除监听
        mitter.off("form-item-created", callback);
        });
         return{
             showw
         }
    },
})
</script>
<style lang="less" scoped>
  .content {
    padding: 16px 16px 160px;
  }
</style>
