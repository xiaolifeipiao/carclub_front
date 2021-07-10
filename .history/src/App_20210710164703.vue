<template>
  <!-- <HelloWorld/> -->
  <login></login>
  <nav-bar :title="title"></nav-bar>
  <tab-bar></tab-bar>
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
