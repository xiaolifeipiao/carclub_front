<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-14 22:02:56
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-action-sheet v-model:show="show" title="标题">
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
    setup() {
        
    },
})
</script>
