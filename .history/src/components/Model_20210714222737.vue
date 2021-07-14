<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-14 22:27:37
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-action-sheet v-model:show="true" title="标题">
        <div class="content">内容</div>
    </van-action-sheet>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ActionSheet } from 'vant';
export default defineComponent({
    naem:'Model',
    components:{
        [ActionSheet.name]:ActionSheet
    },
    props:{
        type:{
            type:Boolean,
            required:true
        }
    },
    setup() {
        
    },
})
</script>
<style lang="less" scoped>
  .content {
    padding: 16px 16px 160px;
  }
</style>
