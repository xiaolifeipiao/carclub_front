<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情列表
 * @version: 0.0.0
 * @Date: 2021-07-13 23:07:05
 * @LastEditTime: 2021-07-16 18:10:15
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\SeriesItem.vue
-->
<template>
    <div class="series_item">
        <div class="item_left">
            <div class="item_name">2020款 30 TFSI 进取型</div>
            <div class="item_price">
                <span class="min_price">20.11万起</span>
                <span class="direct_price">指导价：47.48万</span>
            </div>
        </div>
        <div class="item_right">
            <van-button plain type="primary" @click.prevent="onOperation("试驾",list.id)">试驾</van-button>
        </div>
    </div>
    <van-divider :style="{ margin: '0'}" />
</template>
<script lang="ts">
import { defineComponent,PropType } from 'vue'
import {Divider,Button} from 'vant'
export default defineComponent({
    name:'SeriesItem',
    components:{
        [Divider.name]:Divider,
        [Button.name]:Button
    },
    emits:["onOperation"],
    props:{
        list:{
            type:Object,
            required:false
        }
    },
    setup(props,context) {
        const onOperation = (op:string,id:number):void=>{
            context.emit("onOperation",op,id)
        }
        return{
          onOperation
        }
    },
})
</script>
<style lang="less" scoped>
.series_item {
    height: 62px;
    display: flex;
    margin: 0 16px;
    align-items: center;
    position: relative;
  .item_left {
    .item_name {
        font-size: 15px;
        color: #1F2129;
        line-height: 20px;
        font-weight: 550;
    }

    .item_price {
      .min_price {
        font-size: 14px;
        color: #E62021;
        font-weight: 600;
      }

      .direct_price {
        margin-left: 5px;
        font-size: 12px;
        color: #979AA8;
        line-height: 18px;
        font-weight: 400;
      }
    }
  }

  .item_right {
      position: absolute;
      right: 0;
    button {
        width: 90px;
        height: 28px;
        background: rgba(255,250,233,0.80);
        border: 1px solid #FFCD32 ;
        border-radius: 2px;
        font-size: 14px;
        color: #1F2129;
        font-weight: 500;
    }
  }
}
</style>