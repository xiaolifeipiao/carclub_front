<!--
 * @Author: xiaolifeipiao
 * @Description: 选择查询条件封装
 * @version: 0.0.0
 * @Date: 2021-07-14 20:36:04
 * @LastEditTime: 2021-09-28 22:05:12
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\SelectQueryNav.vue
-->
<template>
    <!-- 筛选 -->
     <div class="car_nav">
        <van-tag :class="index !==0?'tag':''" v-for="(item,index) in list" :key="index" :plain='taggColor === index' size="large" :color="taggColor !== index? '#F6F7FB' : ''"  @click="selectClick(index,item)"  text-color="#1F2129"   >{{item}}</van-tag>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import { Tag} from 'vant'
export default defineComponent({
    name:'SelectQueryNav',
    props:{
        list:{
            type:Array,
            required:true
        }
    },
    emits:['selectClick'],
    
    components:{
        [Tag.name]:Tag
    },
    setup(props, context) {
        // 定义切换车型
        const taggColor = ref(0)
         // 选择车型
        const selectClick = (index,item)=>{
            context.emit('selectClick',index,item)
            // console.log(index,item)
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
.car_nav{
  margin: 5px 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .tag{
    margin-left: 10px;
  }
}
</style>