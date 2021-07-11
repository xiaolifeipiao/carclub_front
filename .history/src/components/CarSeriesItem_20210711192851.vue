<!--
 * @Author: xiaolifeipiao
 * @Description: 车系列表项
 * @version: 0.0.0
 * @Date: 2021-07-11 19:11:04
 * @LastEditTime: 2021-07-11 19:28:51
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\CarSeriesItem.vue
-->
<!--
 * @Author: xiaolifeipiao
 * @Description: 标签栏
 * @version: 0.0.0
 * @Date: 2021-07-10 15:18:36
 * @LastEditTime: 2021-07-10 21:33:58
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyTabBar.vue
-->
<template>
<van-config-provider :theme-vars="themeVars">
    <div class="car">
        <van-row>
        <van-col span="3">
            <van-image
            round
            width="10rem"
             fit="contain"
            height="10rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </van-col>
        <van-col span="6">
            
        </van-col>
        <van-col span="3">
            
        </van-col>
    </van-row>
    </div>
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Image, Col, Row  } from 'vant';
import { log } from 'console';
export default defineComponent({
  name: 'MyTabBar',
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
       tabbarHeight:'48px',
       tabbarItemFontSize:'10px',
       tabbarItemTextColor:'#1F2129',
       tabbarItemMarginBottom:'0'
    };
    return { 
        themeVars,
     }
  }
})
</script>

<style lang="less" scoped>
.car{
    margin:0 16px;
}
</style>
