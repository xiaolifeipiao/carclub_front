<!--
 * @Author: xiaolifeipiao
 * @Description: login
 * @version: 0.0.0
 * @Date: 2021-07-10 16:26:39
 * @LastEditTime: 2021-07-10 17:10:59
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\login.vue
-->
<template>
    <nav-bar :title="title"></nav-bar>
    <van-cell-group inset>
  <van-field
    v-model="userInfo.username"
    label="用户名"
       clearable
    right-icon="music-o"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="userInfo.password"
 
    label="密码"
    left-icon="music-o"
    placeholder="显示清除图标"
  />
</van-cell-group>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted,reactive } from 'vue'
import NavBar from '@coms/NavBar.vue'
import { Field, CellGroup } from 'vant';
export default defineComponent({
  name: 'Login',
  components:{
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,  
    NavBar
  },
  setup: (props) => {
      const title = ref('登录')
      const userInfo = reactive({
      username: '',
      password: '',
    });

    return { 
        title,
        userInfo
     }
  }
})
</script>

<style scoped>
</style>
