<!--
 * @Author: xiaolifeipiao
 * @Description: login
 * @version: 0.0.0
 * @Date: 2021-07-10 16:26:39
 * @LastEditTime: 2021-07-10 21:30:36
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\login.vue
-->
<template>
<van-config-provider :theme-vars="themeVars">
    <nav-bar :title="title"></nav-bar>
    <div class="title">登录车型大全</div>
    
<van-form @submit="onSubmit" class="from">
    <van-cell-group inset>
    <van-field
        class="field_blod"
        v-model="userInfo.username"
        label="用户名"
        name="username"
        clearable
         :rules="[{ required: true, message: '请填写用户名' }]"
        placeholder="请输入用户名"
    />
    <van-field
        class="field_blod"
        v-model="userInfo.password"
        label="密码"
        name="password"
        @focus="onFocus"
        @blur="onBlur"
        :type="passwordType"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
    >
        <template #button class="icon_eys" v-if="pwd_show">
            <span @click="isShow">
              <van-icon :name="passwordType==='password'?'closed-eye':'eye-o'" size="26"/>
            </span>
          </template>
    </van-field>
</van-cell-group>
  <div style="margin: 16px;">
    <van-button block  type="default" native-type="submit" class="btn_sub">
    确认
    </van-button>
  </div>
  <p class="tip">未注册用户会自动注册并登录</p>
</van-form>
</van-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted,reactive } from 'vue'
import NavBar from '@coms/NavBar.vue'
import { Field, CellGroup,Button,Form,Icon ,Toast } from 'vant';
import { useToggle } from '@vant/use'
import{useStore} from 'vuex'
import { UserActionTypes } from '@/store/modules/user/enum_type'
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Login',
  components:{
    NavBar,
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,
    [Button.name]:Button,  
    [Form.name]:Form,  
    [Icon.name]:Icon,  
    [Toast.name]:Toast,  
    
  },
  setup: (props) => {
      const stote = useStore()
      const title = ref('登录')
      const userInfo = reactive({
      username: '',
      password: '',
    });
    //显示密码图标求和
    const pwd_show = ref(false)
    // 状态值切换
    const passwordType = ref('password')
    // 提交按钮
    const onSubmit =async(userInfo) => {
      console.log(userInfo)
      await store.dispatch(UserActionTypes.ACTION_LOGIN,userInfo)
      Toast.success('登录成功');
      useRouter().push('/me')
    };
    // 密码隐藏切换
    const isShow = ()=>{
       passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
    }
    const themeVars = {
    };
    const onFocus = ()=>{
        pwd_show.value = true;
        console.log(pwd_show.value)
        console.log('Focusds')
    }
    const onBlur =()=>{
        // pwd_show.value =false;
        // console.log('blur')
    }
    return { 
        title,
        userInfo,
        onSubmit,
        passwordType,
        isShow,
        themeVars,
        onFocus,
        onBlur,
        pwd_show
     }
  }
})
</script>

<style scoped>
.btn_sub{
    width: 319px;
    margin: 0 auto;
    font-size: 16px;
    color: #1F2129;
    letter-spacing: 0;
    line-height: 22px;
    font-weight: 400;
    background: #FFCC32;
    border-radius: 2px;
}
.tip{
    font-size: 12px;
    color: #979aa7;
    letter-spacing: 0;
    text-align: center;
    line-height: 18px;
    font-weight: 400;
    text-shadow:0 0 15px #979aa7;
    filter: blur(0.5);
}
.title{
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #1F2129;
    height: 34px;
    width: 144px;
    margin-top: 30px;
    margin-left:33px;
    letter-spacing: 0;
    line-height: 34px;
    font-weight: 550;
}
.from{
    margin-top: 40px;
}
</style>
