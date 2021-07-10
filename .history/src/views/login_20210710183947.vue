<!--
 * @Author: xiaolifeipiao
 * @Description: login
 * @version: 0.0.0
 * @Date: 2021-07-10 16:26:39
 * @LastEditTime: 2021-07-10 18:39:47
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\login.vue
-->
<template>
    <nav-bar :title="title"></nav-bar>
    <div>sdsdas</div>
    
<van-form @submit="onSubmit">
    <van-cell-group inset>
    <van-field
        v-model="userInfo.username"
        label="用户名"
        name="username"
        clearable
         :rules="[{ required: true, message: '请填写用户名' }]"
        placeholder="请输入用户名"
    />
    <van-field
        v-model="userInfo.password"
        label="密码"
        name="password"
        :type="password"
        placeholder="请输入密码"
         :rules="[{ required: true, message: '请填写密码' }]"
    >
        <template #button class="icon_eys" >
            <span @click="isShow">
              <van-icon name="closed-eye" size="26" v-if="state" />
              <van-icon name="eye-o" size="26" v-else />
            </span>
          </template>
    </van-field>
</van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
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
    const [state, toggle] = useToggle(true);
    const password = ref('password')
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    // 切换
    const isShow = ()=>{
        password ==='password'? toggle(true):toggle(false);
        if(!state){
            password = 'password'
        }else{
            password = 'text'
        }
    }
    return { 
        title,
        userInfo,
        onSubmit,
        password,
        isShow,
        state
     }
  }
})
</script>

<style scoped>
.icon_eys{
    width: 32px;
    padding: 0;
    text-align: center;
}
</style>
