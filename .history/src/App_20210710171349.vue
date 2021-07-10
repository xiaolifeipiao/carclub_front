<template>
  <!-- <HelloWorld/> -->
  <login/>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import {useStore} from 'vuex'
import Login from './views/login.vue'
export default defineComponent({
  name: 'App',
  components: {
    Login
  },
  setup(){
  }
})
</script>

<style>

</style>
