<!--
 * @Author: xiaolifeipiao
 * @Description: 选择查询条件封装
 * @version: 0.0.0
 * @Date: 2021-07-14 20:36:04
 * @LastEditTime: 2021-07-14 20:39:54
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\SelectQueryNav.vue
-->
<template>
    <!-- 筛选 -->
     <div class="car_nav">
        <van-tag :plain='taggColor === 0' size="large" :color="taggColor !== 0? '#F6F7FB' : ''"  @click="selectClick(0)"  text-color="#1F2129"   >全部</van-tag>
        <van-tag :plain='taggColor === 1' class="tag" :color="taggColor !== 1? '#F6F7FB' : ''"  @click="selectClick(1)"  size="large" text-color="#1F2129">已提交</van-tag>
        <van-tag :plain='taggColor === 2'  class="tag"  :color="taggColor !== 2? '#F6F7FB' : ''"  @click="selectClick(2)"   size="large" text-color="#1F2129" >待试驾</van-tag>
        <van-tag :plain='taggColor === 3'  class="tag"  :color="taggColor !== 3? '#F6F7FB' : ''"  @click="selectClick(3)"   size="large" text-color="#1F2129" >已试驾</van-tag>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Tag} from 'vant'
export default defineComponent({
    name:'SelectQueryNav',
    components:{
        [Tag.name]:Tag
    },
    setup() {
        // 定义切换车型
        const taggColor = ref(0)
         // 选择车型
        const selectClick = (index)=>{
            console.log(index)
            taggColor.value = index
        }
        return{
            taggColor,
            selectClick
        }
        
    },
})
</script>
<style lang="less" scoped>

</style>