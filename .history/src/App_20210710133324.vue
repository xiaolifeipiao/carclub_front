<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@coms/HelloWorld.vue'
import {useStore} from 'vuex'
import { UserActionTypes } from '@/store/modules/user/enum_type'
import { log } from 'util'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  async setup(){
    const store = useStore()
    let userInfo= { username:'sdsd', password:'sds' } ;
    // console.log(import.meta.env)
    // console.log(import.meta.env.VITE_APP_BASE_API 
// );
    

   
  }
})
</script>

<style>

</style>
