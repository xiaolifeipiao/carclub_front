<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-15 13:38:45
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-config-provider :theme-vars="themeVars">
        <van-action-sheet v-model:show="showOn" title="立即预约试驾">
            <div class="content">
            <div class="content_subhead" >提交信息后工作人员会在3个工作日内与您联系</div>
            <van-form class="from" @submit="onSubmit">
                <van-cell-group>
                    <van-field
                     class="field"
                    v-model="state.value"
                    readonly
                    clickable
                    name="city"
                    label="城市"
                    @click = "onCity"
                    placeholder="点击选择城市"
                     :rules="[{ required: true, message: '请选择城市 ' }]"
                     right-icon="arrow"
                    />
                    <van-field
                    class="field"
                    v-model="state.username"
                    name="姓名"
                    label="姓名"
                    placeholder="请输入您的姓名"
                    :rules="[{ required: true, message: '请填写姓名' }]"
                    />
                    <van-field 
                    class="field"
                    v-model="state.tel" 
                    type="tel" 
                    label="手机号"
                    name="手机号"
                    placeholder="请输入您的手机号"  
                    :rules="[{ validator, message: '手机格式错误 ' },{ required: true, message: '请填写手机号' }]" />
                </van-cell-group>
                <div >
                    <van-button  block  native-type="submit" class="btn">
                    提交
                    </van-button>
                </div>
                </van-form>
            </div>
        </van-action-sheet>
    </van-config-provider>
</template>
<script lang="ts">
import { defineComponent ,onUnmounted,ref,reactive} from 'vue'
import { ActionSheet,Form, Field, CellGroup,Button ,Cell} from 'vant';
import mitt, { Emitter } from "mitt";
import {isPhoneNumber} from '@utils/tool'
import { useRouter } from 'vue-router';

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
       const router = useRouter()
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
            value:'重庆'
        });
        const onSubmit = (values) => {
            console.log('submit', values);
        };
        // 校验函数返回 true 表示校验通过，false 表示不通过
        const validator = (val) =>isPhoneNumber(val);
        const themeVars = {
             fieldLabelWidth:'60px',
             fieldLabelMarginRight:'20px'
        };
        const onCity=()=>{
          router.push({name:'City'})
        }
         return{
             showOn,
             state,
             onSubmit,
             themeVars,
             validator,
             onCity
         }
    },
})
</script>
<style lang="less" scoped>
.content {
    font-family: PingFangSC-Regular;
    height: 250px;
    padding:0 17px;
    .content_subhead{
        margin-top: -3px;
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
.btn{
    margin: 16px 0;
    color:#1F2129 ;
    background: #FFCD32;
    border-radius: 2px;
    font-weight: 550;
}
  .field{
    font-size: 16px;
    color: #222222;
    letter-spacing: 0;
    font-weight: 400;
  }
</style>
