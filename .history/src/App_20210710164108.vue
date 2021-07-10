<template>
  <HelloWorld/>
  <login></login>
  <nav-bar :title="title"></nav-bar>
  <tab-bar></tab-bar>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import HelloWorld from '@coms/HelloWorld.vue'
import NavBar from '@coms/NavBar.vue'
import TabBar from '@coms/TabBar.vue'
import {useStore} from 'vuex'
import Login from './views/login.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    TabBar,
    Login
  },
  setup(){
    const store = useStore()
    const title = ref("我的")
    return{
      title
    }
  }
})
</script>

<style>

</style>
