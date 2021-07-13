<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情列表
 * @version: 0.0.0
 * @Date: 2021-07-13 23:07:05
 * @LastEditTime: 2021-07-13 23:23:53
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
         <van-divider :style="{ margin: '0'}" />
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
    width: 62px;
  .item_left {
    .item_name {

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