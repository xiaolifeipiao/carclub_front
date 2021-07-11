<!--
 * @Author: xiaolifeipiao
 * @Description: 车系列表项
 * @version: 0.0.0
 * @Date: 2021-07-11 19:11:04
 * @LastEditTime: 2021-07-11 23:31:26
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
    <van-row  align="center" class="car">
        <van-col span="7">
            <van-image
            class="car_image"
            fit="cover"
            src="src/assets/webp/1.webp"
            />
        </van-col>
        <van-col span="12">
            <div class="car_name">宝马2系旅</div>
            <div v-if="!isCarRate">
                <my-rate :rateValue="myRateValue">
                    <template v-slot:rate_title>
                        我的：
                    </template>
                </my-rate>
                <my-rate :rateValue="allRateValue">
                    <template v-slot:rate_title>
                        综合：
                    </template>
                </my-rate>
            </div>
            <div v-else>
                <my-rate :rateValue="testRateScore"></my-rate>
                 <div class="car_price">指导价：{{price}}万起</div>
            </div>
          
        </van-col>
        <van-col span="5">
            <van-tag class="car_tag" color="#FFCC32" size="large"  text-color="#1A1A1A">{{typeCarRate}}</van-tag>
        </van-col>
    </van-row>
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue'
import { Image, Col, Row,Rate,Tag } from 'vant';
import MyRate from './MyRate.vue'

export interface RateProps{
    id:number,
    carSeriesNmae?:number,
    myRateValue?:number,
    allRateValue?:number,
    testRateScore?:number,
    carSerierPrice?:number,
    imageUrl?:string
}
export default defineComponent({
  name: 'MyTabBar',
  components:{
    [Image.name]:Image,
    [Col.name]:Col,
    [Row.name]:Row,
    [Rate.name]:Rate,
    [Tag.name]:Tag,
    MyRate
  },
  props: {
    isCarRate:{
        type:Boolean,
        required:true
    },
    rateList: {
      type: Object as PropType<RateProps>,
      required: true
    }
  },
  setup: (props) => {
    //   我的评分
    const myRateValue = ref(3.35)
    // 综合评分
    const allRateValue = ref(3.55)
    // 试驾评分
    const testRateScore = ref(3.69)
    // 是否是试驾还是重新评分
    const isCarRate = ref(true)
    const price = ref(28.25)
    const typeCarRate = isCarRate.value ===true?'试驾':'重新评分'
    const themeVars = {
        tagLargePadding:'4px 5px'
    };
    return { 
        themeVars,
        myRateValue,
        allRateValue,
        price,
        typeCarRate,
        testRateScore
     }
  }
})
</script>

<style lang="less" scoped>
.car{
    height: 96px;
    margin:0 16px;
    // background:rgb(224, 126, 126);
    .car_image{
        width:100px;
        height: 66px;
    }
    .car_name{
        font-size: 16px;
        color: #1A1A1A;
        font-weight: 500;
    }
    .car_sart{
        font-size: 12px;
        margin-left: 3px;
    }
    .car_price{
        font-size: 12px;
        color: #999999;
        line-height: 18px;
        font-weight: 400;
    }
    .car_tag{
        width: 60px;
        height: 20px;
        font-size: 14px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
