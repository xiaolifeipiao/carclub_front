<!--
 * @Author: xiaolifeipiao
 * @Description: login
 * @version: 0.0.0
 * @Date: 2021-07-10 16:26:39
 * @LastEditTime: 2021-07-10 17:06:39
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\login.vue
-->
<template>
    <nav-bar :title="title"></nav-bar>
    <van-cell-group inset>
  <van-field
    v-model="state.value1"
    label="文本"
    left-icon="smile-o"
    right-icon="warning-o"
    placeholder="显示图标"
  />
  <van-field
    v-model="state.value2"
    clearable
    label="文本"
    left-icon="music-o"
    placeholder="显示清除图标"
  />
</van-cell-group>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
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
