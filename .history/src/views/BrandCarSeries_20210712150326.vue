<!--
 * @Author: xiaolifeipiao
 * @Description: 品牌车系页
 * @version: 0.0.0
 * @Date: 2021-07-11 19:08:08
 * @LastEditTime: 2021-07-12 15:03:26
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\BrandCarSeries.vue
-->

<template>
  <nav-bar title="宝马"></nav-bar>
<van-config-provider :theme-vars="themeVars">
    
</van-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Image, Col, Row  } from 'vant';
import { useRouter } from 'vue-router';
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import NavBar from '@coms/NavBar.vue'
export default defineComponent({
  name: 'BrandCarSeries',
  components:{
    [Image.name]:Image,
    [Col.name]:Col,
    [Row.name]:Row,
    CarSeriesItem,
    NavBar
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
  
    const themeVars = {
      
    };
    return { 
        themeVars
     }
  }
})
</script>

<style scoped>
</style>
