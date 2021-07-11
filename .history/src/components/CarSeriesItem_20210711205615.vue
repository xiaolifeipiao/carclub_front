<!--
 * @Author: xiaolifeipiao
 * @Description: 车系列表项
 * @version: 0.0.0
 * @Date: 2021-07-11 19:11:04
 * @LastEditTime: 2021-07-11 20:56:10
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
    <van-row justify="space-between" align="center" class="car">
        <van-col span="8">
            <van-image
            class="car_image"
            fit="cover"
            src="src/assets/webp/1.webp"
            />
        </van-col>
        <van-col span="12">
            <span>宝马2系旅行车新能源(进口)</span>
            <span style="display:block"><van-rate style="vertical-align: middle;"
            v-model="value"
           readonly 
            :size="12"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
           /><span>{{value}}</span></span>
           
           <span style="display:block">指导价：28.46万起</span>
        </van-col>
        <van-col span="3">
            <van-tag round type="primary">标签</van-tag>
        </van-col>
    </van-row>
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Image, Col, Row,Rate,Tag } from 'vant';
import { log } from 'console';
export default defineComponent({
  name: 'MyTabBar',
  components:{
    [Image.name]:Image,
    [Col.name]:Col,
    [Row.name]:Row,
    [Rate.name]:Rate,
    [Tag.name]:Tag
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    const value = ref(5)
    const themeVars = {
       tabbarHeight:'48px',
       tabbarItemFontSize:'10px',
       tabbarItemTextColor:'#1F2129',
       tabbarItemMarginBottom:'0'
    };
    return { 
        themeVars,
        value
     }
  }
})
</script>

<style lang="less" scoped>
.car{
    height: 96px;
    margin:0 16px;
    background:rgb(224, 126, 126);
    .car_image{
        width:100px;
        height: 66px;
    }
}
</style>
