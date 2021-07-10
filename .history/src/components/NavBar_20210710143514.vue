<template>
  
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components:{
     [Button.name]:Button
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore()
    const count = ref(0)
    onMounted(async()=>{
        await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO)
    })
    
    return { count }
  }
})
</script>

<style scoped>
/** 覆盖 Button 最外层元素的样式 */
  .my-button {
    width: 200px;
  }

  /** 覆盖 Button 内部子元素的样式 */
  .my-button .van-button__text {
    color: red;
  }
</style>
