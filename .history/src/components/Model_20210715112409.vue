<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-15 11:23:18
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-action-sheet v-model:show="showOn" title="立即预约试驾">
        <div class="content">
        <div class="content_subhead" >提交信息后工作人员会在3个工作日内与您联系</div>
        <van-form class="from" @submit="onSubmit">
            <van-cell-group>
                <keep-alive>
                        <van-cell  to="index" is-link>
                            <template #title>
                                <span class="custom-title">城市</span>
                                <span class="custom-value">重庆</span>
                             </template>
                        </van-cell>
                </keep-alive>
                <van-field
                v-model="state.username"
                name="姓名"
                label="姓名"
                placeholder="请输入您的姓名"
                :rules="[{ required: true, message: '请填写姓名' }]"
                />
                <van-field 
                v-model="state.tel" 
                type="tel" 
                label="手机号"
                name="手机号"
                placeholder="请输入您的手机号"  
                :rules="[{ required: true, message: '请填写手机号' }]" />
            </van-cell-group>
            <div style="margin: 16px 0;">
                <van-button  block type="primary" native-type="submit">
                提交
                </van-button>
            </div>
            </van-form>
        </div>
    </van-action-sheet>
</template>
<script lang="ts">
import { defineComponent ,onUnmounted,ref,reactive} from 'vue'
import { ActionSheet,Form, Field, CellGroup,Button ,Cell} from 'vant';
import mitt, { Emitter } from "mitt";

// 实例化mitt
export const mitter: Emitter = mitt();
export default defineComponent({
    naem:'Model',
    components:{
        [ActionSheet.name]:ActionSheet,
        [Form.name]:Form,
        [Field.name]:Field,
        [CellGroup.name]:CellGroup,
        [Button.name]:Button,
        [Cell.name]:Cell
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
        const state = reactive({
            username: '',
            tel: '',
        });
        const onSubmit = (values) => {
            console.log('submit', values);
        };
         return{
             showOn,
             state,
             onSubmit
         }
    },
})
</script>
<style lang="less" scoped>
.content {
    font-family: PingFangSC-Regular;
    height: 300px;
    padding:0 17px;
    .content_subhead{
        margin-top: -5px;
        z-index: 999;
        font-size: 12px;
        color: rgba(138, 125, 125,.8);
        text-align: center;
        line-height: 18px;
        font-weight: 400;
    }
    .from{
        margin-top: 12px;
    }
}

 .custom-title {
    margin-right: 4px;
    font-size: 16px;
    width: 22px;
    vertical-align: middle;
    font-weight: 400;
  }

  .custom-value {
    font-size: 16px;
    margin-left: 36px;
    vertical-align: middle;
    font-weight: 400;
  }
</style>
