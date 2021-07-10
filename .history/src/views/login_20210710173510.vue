<!--
 * @Author: xiaolifeipiao
 * @Description: login
 * @version: 0.0.0
 * @Date: 2021-07-10 16:26:39
 * @LastEditTime: 2021-07-10 17:35:10
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
        clearable
        required
        :rules="[{ required: true, error: '请填写用户名' }]"
        placeholder="请输入用户名"
    />
    <van-field
        v-model="userInfo.password"
        label="密码"
        required
        type="password"
        placeholder="请输入密码"
         :rules="[{ required: true, error: '请填写密码' }]"
    />
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
import { Field, CellGroup,Button,Form } from 'vant';
export default defineComponent({
  name: 'Login',
  components:{
    NavBar,
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,
    [Button.name]:Button,  
    [Form.name]:Form,  
    
  },
  setup: (props) => {
      const title = ref('登录')
      const userInfo = reactive({
      username: '',
      password: '',
    });
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    return { 
        title,
        userInfo,
        onSubmit
     }
  }
})
</script>

<style scoped>
</style>
