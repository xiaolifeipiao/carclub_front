<!--
 * @Author: xiaolifeipiao
 * @Description: 长列表->虚拟列表的实现
 * @version: 0.0.0
 * @Date: 2021-09-25 19:40:21
 * @LastEditTime: 2021-09-25 19:50:26
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\ListView.vue
-->
<template>
    <div class="list-view" @scroll="handelScroll">
        <div class="list-view-phantom" :style="{height:contentHeight}"></div>
        <div ref="content" class="list-view-content">
            <div 
            class="list-view-item" 
            :style="{height:itemHeight+'px'}" 
            v-for="item in visibleData">
                {{item.value}}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
    },
})
</script>
<style lang="less" scoped>
.list-view{
    height: 400px;
    overflow: auto;
    position: relative;
    border: 1px solid #aaa;
    .list-view-phantom{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: -1;
    }
    .list-view-content{
        left: 0;
        right: 0;
        top: 0;
        position: absolute;
        .list-view-item{
            padding: 5px;
            color: #666;
            line-height: 30px;
            box-sizing: border-box;
        }
    }

}
</style>
