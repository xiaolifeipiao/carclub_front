<!--
 * @Author: xiaolifeipiao
 * @Description: login
 * @version: 0.0.0
 * @Date: 2021-07-10 16:26:39
 * @LastEditTime: 2021-07-10 19:18:15
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\login.vue
-->
<template>
<van-config-provider :theme-vars="themeVars">
    <nav-bar :title="title"></nav-bar>
    <div>sdsdas</div>
    
<van-form @submit="onSubmit">
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
        :type="passwordType"
        placeholder="请输入密码"
         :rules="[{ required: true, message: '请填写密码' }]"
    >
        <template #button class="icon_eys" >
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
  <p class="tip"></p>
</van-form>
</van-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted,reactive } from 'vue'
import NavBar from '@coms/NavBar.vue'
import { Field, CellGroup,Button,Form,Icon  } from 'vant';
import { useToggle } from '@vant/use'
export default defineComponent({
  name: 'Login',
  components:{
    NavBar,
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,
    [Button.name]:Button,  
    [Form.name]:Form,  
    [Icon.name]:Icon,  
    
  },
  setup: (props) => {
      const title = ref('登录')
      const userInfo = reactive({
      username: '',
      password: '',
    });
    // 状态值切换
    const passwordType = ref('password')
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    // 切换
    const isShow = ()=>{
       passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
    }
    const themeVars = {
    };
    return { 
        title,
        userInfo,
        onSubmit,
        passwordType,
        isShow,
        themeVars
     }
  }
})
</script>

<style scoped>
.btn_sub{
    font-size: 16px;
    color: #1F2129;
    letter-spacing: 0;
    line-height: 22px;
    font-weight: 400;
    background: #FFCC32;
    border-radius: 2px;
}
.field_blod{
     font-weight: 400;
}
</style>
