<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情列表
 * @version: 0.0.0
 * @Date: 2021-07-13 23:07:05
 * @LastEditTime: 2021-07-13 23:30:06
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
            <button>试驾</button>
        </div>
    </div>
    <van-divider :style="{ margin: '0'}" />
</template>
<script lang="ts">
import { defineComponent,PropType } from 'vue'
import {Divider} from 'vant'
export default defineComponent({
    name:'SeriesItem',
    components:{
        [Divider.name]:Divider
    },
    props:{
        list:{
            type:Object,
            required:false
        }
    },
    setup() {
        
    },
})
</script>
<style lang="less" scoped>
.series_item {
    height: 62px;
    display: flex;
    margin: 0 16px;
    align-items: center;
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
    button {
        background: rgba(255,250,233,0.80);
        border: 0 solid #FFCD32;
        border-radius: 2px;
    }
  }
}
</style>