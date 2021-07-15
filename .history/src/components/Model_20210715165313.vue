<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-15 16:53:12
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
     <van-cell icon="arrow-left" @click="cancelCityShow">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <div class="city_title">选择城市</div>
        </template>
        </van-cell>
            <!-- 下划线 -->
        <van-divider :style="{ margin: '0'}" /> 
        <div class="city_nav_title">
            <span>当前定位城市</span>
        </div>
        <div class="city_auto_location">
            <button class="btn_city_content">重庆</button>
            <div class="replay_location">
                <van-icon :class=" refreshLocation ===true?'city_location_icon':''" size="14px" name="replay" />
                <button>重新定位 </button>
            </div>
        </div>
        <!-- 索引 -->
        <van-index-bar :index-list="indexList" highlight-color="#89BCD7" @select="indexOnSelect">
            <van-index-anchor class="index_title"   index="选" v-show="false"></van-index-anchor>
            <div v-for="(item,key) in 100"  :index="key">
                <van-index-anchor index="1">A</van-index-anchor>
                <van-cell title="文本" />
            </div>
        </van-index-bar>
    </van-popup>
</template>
<script lang="ts">
import { defineComponent ,onUnmounted,ref,reactive} from 'vue'
import { ActionSheet,Form, Field, CellGroup,Button ,Cell,Toast,Popup,Divider,IndexBar,IndexAnchor} from 'vant';
import mitt, { Emitter } from "mitt";
import {isPhoneNumber} from '@utils/tool'
import { useRouter } from 'vue-router';
import {indexList} from '@utils/tool'
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
        [Divider.name]:Divider,
        [IndexBar.name]:IndexBar,
        [IndexAnchor.name]:IndexAnchor
    },
    setup() {
       const router = useRouter()
        // 刷新定位 
        const refreshLocation = ref(true);
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
        // 关闭城市模态框
        const cancelCityShow=()=>{
            showCity.value =false
        }
          // indexchange
        const  indexOnSelect = (index)=>{
            if(index ==='选')
                window.scrollTo({
                    top: 0
                })
        }
         return{
             showOn,
             state,
             onSubmit,
             themeVars,
             onPhone,
             showCity,
             cancelCityShow,
             refreshLocation,
             indexList,
             indexOnSelect
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

//   城市
.city_title{
    font-size: 16px;
    color: #333333;
    text-align: center;
    font-weight: 400;
}
.city_nav_title{
    background-image: linear-gradient(90deg, #F7F8FC 0%, rgba(247,248,252,0.00) 100%);
    span{
        font-size: 14px;
        display: inline-block;
        display: flex;
        align-items: center;
        height: 28px;
        color: #1F2129;
        margin-left: 16px;
        line-height: 20px;
        font-weight: 550;
    }
}
.city_auto_location{
    height: 60px;
    display: flex;
    align-items: center;
    .btn_city_content{
        margin-left: 16px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 68px;
        border: 0;
    }
    .replay_location{
        margin-left: 16px;
        .city_location_icon{
            animation: rotation 1s infinite linear;
        }
        @keyframes rotation {
            from {transform: rotate(0deg);}
            to{transform: rotate(360deg);}
        }
        button{
            font-size: 12px;
            color: #1F2129;
            border: 0;
            line-height: 18px;
            font-weight: 400;
            background-color: #fff;
            padding: 0 4px;
        }
    }
}
</style>
