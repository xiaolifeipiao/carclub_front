<!--
 * @Author: xiaolifeipiao
 * @Description: 车型大会首页
 * @version: 0.0.0
 * @Date: 2021-07-10 21:28:15
 * @LastEditTime: 2021-07-10 21:59:59
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\Home.vue
-->
<template>
   
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Grid, GridItem} from 'vant'
import MyTabBar from '@coms/MyTabBar.vue'
export default defineComponent({
  name: 'Home',
  components:{
    [Grid.name]:Grid
    [GridItem.name]:GridItem,
    MyTabBar
  },
  setup: () => {
    
    return {  }
  }
})
</script>

<style scoped>

</style>
