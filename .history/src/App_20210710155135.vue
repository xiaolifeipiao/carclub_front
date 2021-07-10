<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld/>
  <nav-bar :title="title"></nav-bar>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import HelloWorld from '@coms/HelloWorld.vue'
import NavBar from '@coms/NavBar.vue'
import TabBar from '@/coms/TabBar.vue'
import {useStore} from 'vuex'

import { log } from 'util'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    TabBar
 setup(){
    const store = useStore()
    let userInfo= { username:'sdsd', password:'sds' } ;
    const title:string = ref("我的")

   return{
     title
   }
  }
})
</script>

<style>

</style>
