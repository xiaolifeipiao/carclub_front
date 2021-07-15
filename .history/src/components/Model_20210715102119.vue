<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-15 10:20:07
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-action-sheet v-model:show="showOn">
        <div class="content">
            <div class="header">
                <span>立即预约试驾</span>
                <van-icon name=""></van-icon>
            </div>
            <div class="content_subhead" >提交信息后工作人员会在3个工作日内与您联系</div>
            
        </div>
    </van-action-sheet>
</template>
<script lang="ts">
import { defineComponent ,onUnmounted,ref} from 'vue'
import { ActionSheet } from 'vant';
import mitt, { Emitter } from "mitt";

// 实例化mitt
export const mitter: Emitter = mitt();
export default defineComponent({
    naem:'Model',
    components:{
        [ActionSheet.name]:ActionSheet
    },
    setup() {
        const showOn = ref(false) 
        // 添加mitt事件监听器事件及回调函数
        mitter.on("on-show", (show)=>{
            console.log(show)
            showOn.value = show;
        });
        onUnmounted(() => {
            // 删除监听
            mitter.off("on-show", (show)=>{
                console.log(show)
             });
        });
         return{
             showOn
         }
    },
})
</script>
<style lang="less" scoped>
.content {
    font-family: PingFangSC-Regular;
    height: 300px;
    padding:0 17px;
    .header{
        height: 48px;
        span{
            display: inline-block;
            font-size: 16px;
            color: #1A1A1A;
            text-align: center;
            line-height: 22px;
            font-weight: 500;
        }
    }
    .content_subhead{
        font-size: 12px;
        color: rgba(138, 125, 125,.8);
        text-align: center;
        line-height: 18px;
        font-weight: 400;
    }
}
</style>
