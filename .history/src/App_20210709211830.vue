<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@coms/HelloWorld.vue'
import {useStore} from 'vuex'
import { UserActionTypes } from '@/store/modules/user/enum_type'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    useStore().dispatch(UserActionTypes.ACTION_LOGIN)
  }
})
</script>

<style>

</style>
