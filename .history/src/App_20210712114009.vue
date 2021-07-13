<template>
  <!-- <HelloWorld/> -->
  <router-view></router-view>
  <!-- <car-series-item></car-series-item> -->
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import {useStore} from 'vuex'
// import CarSeriesItem from '@coms/CarSeriesItem.vue'
export default defineComponent({
  name: 'App',
  components: {
    CarSeriesItem
  },
  setup(){
  }
})
</script>

<style>

</style>
