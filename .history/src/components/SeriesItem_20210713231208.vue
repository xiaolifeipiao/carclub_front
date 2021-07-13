<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情列表
 * @version: 0.0.0
 * @Date: 2021-07-13 23:07:05
 * @LastEditTime: 2021-07-13 23:12:04
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\SeriesItem.vue
-->
<template>
    <div class="series_item">
        <div class="item_left">
            
        </div>
        <div class="item_right"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent,PropType } from 'vue'

export default defineComponent({
    name:'SeriesItem',
    props:{
        list:{
            type:Object as PropType<Object>,
            required:true
        }
    }
    setup() {
        
    },
})
</script>
