<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@coms/HelloWorld.vue'
import {useStore} from 'vuex'
import { UserActionTypes } from '@/store/modules/user/enum_type'
import store from '@/store/index'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    store.dispatch(UserActionTypes.ACTION_LOGIN)
  }
})
</script>

<style>

</style>
