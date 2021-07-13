<template>
  <!-- <HelloWorld/> -->
  <!-- <router-view></router-view> -->
  <RouterView v-slot="{Component}">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component">
        </component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive">
      </component>
    </RouterView>
  <!-- <car-series-item></car-series-item> -->
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import {useStore} from 'vuex'
// import CarSeriesItem from '@coms/CarSeriesItem.vue'
export default defineComponent({
  name: 'App',
  components: {
    // CarSeriesItem
  },
  setup(){
  }
})
</script>

<style>

</style>
