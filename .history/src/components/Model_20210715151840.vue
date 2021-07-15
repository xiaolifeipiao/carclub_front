<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-15 15:18:40
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
                    v-model="state.city"
                    readonly
                    clickable
                    name="city"
                    label="城市"
                    @click="showCity = true"
                    placeholder="点击选择城市"
                     right-icon="arrow"
                    />
                    <van-field
                    class="field"
                    v-model="state.username"
                    name="username"
                    label="姓名"
                    placeholder="请输入您的姓名"
                    />
                    <van-field 
                    class="field"
                    v-model="state.tel" 
                    type="tel" 
                    label="手机号"
                    name="phone"
                    placeholder="请输入您的手机号"
                    @blur="onPhone"  
                   />
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
    <van-popup 
    v-model:show="showCity" 
    position="bottom"  
    teleport="body" 
    :style="{ height: '100%' }" >
     <van-cell title="单元格" icon="shop-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #left-icon>
            <van-icon name="arrow-left" />
        </template>
        </van-cell>
    </van-popup>
</template>
<script lang="ts">
import { defineComponent ,onUnmounted,ref,reactive} from 'vue'
import { ActionSheet,Form, Field, CellGroup,Button ,Cell,Toast,Popup} from 'vant';
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
        [Cell.name]:Cell,
        [Toast.name]:Toast,
        [Popup.name]:Popup,
    },
    setup() {
       const router = useRouter()
        // 打开模态框
        const showOn = ref(false)
        // 打开城市模态框 
        const showCity = ref(false) 
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
            city:'重庆'
        });
        const onSubmit = (values) => {
            if(values.city===""){
                Toast.fail('请选择城市 ');
            }
            else if(values.username===""){
                Toast.fail('请输入姓名 ');
            }else if(values.phone===""){
                Toast.fail('请输入手机号码 ');
            }else if(!isPhoneNumber(values.phone)){
                  Toast.fail('手机格式错误');
            }else{
                  console.log('submit', values);
            }
          
        };
        const themeVars = {
             fieldLabelWidth:'60px',
             fieldLabelMarginRight:'20px'
        };
    
        // 手机格式验证
        const onPhone = (val)=>{
            if(!isPhoneNumber(val.target.value)){
                Toast.fail('手机格式错误');
            }
           
        }
        // 弹出城市模态框
        const onClickLeft=()=>{
            showCity.value =false
        }
         return{
             showOn,
             state,
             onSubmit,
             themeVars,
             showCity,
             onPhone,
             onClickLeft
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
    margin: 5px 0;
    font-size: 16px;
    color: #222222;
    letter-spacing: 0;
    font-weight: 400;
  }
</style>
