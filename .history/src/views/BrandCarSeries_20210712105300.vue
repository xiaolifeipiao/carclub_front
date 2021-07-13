<!--
 * @Author: xiaolifeipiao
 * @Description: 品牌车系页
 * @version: 0.0.0
 * @Date: 2021-07-11 19:08:08
 * @LastEditTime: 2021-07-12 10:53:00
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\BrandCarSeries.vue
-->

<template>
<van-config-provider :theme-vars="themeVars">
    
</van-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Image, Col, Row  } from 'vant';
import { useRouter } from 'vue-router';
import from '@coms/'
export default defineComponent({
  name: 'NavBar',
  components:{
    [Image.name]:Image,
    [Col.name]:Col,
    [Row.name]:Row
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
