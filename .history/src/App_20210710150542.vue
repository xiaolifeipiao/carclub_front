<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld/>
  <nav-bar></nav-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@coms/HelloWorld.vue'
import NavBar from '@coms/NavBar.vue'
import {useStore} from 'vuex'

import { log } from 'util'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NavBar
  },
 setup(){
    const store = useStore()
    let userInfo= { username:'sdsd', password:'sds' } ;
    const title = ref("我的")

   
  }
})
</script>

<style>

</style>
