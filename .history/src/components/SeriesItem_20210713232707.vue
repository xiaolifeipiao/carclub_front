<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情列表
 * @version: 0.0.0
 * @Date: 2021-07-13 23:07:05
 * @LastEditTime: 2021-07-13 23:27:07
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
         <van-divider :style="{ margin: '5px 0 0 0'}" />
    </div>
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

      }

      .direct_price {

      }
    }
  }

  .item_right {
    button {

    }
  }
}
</style>