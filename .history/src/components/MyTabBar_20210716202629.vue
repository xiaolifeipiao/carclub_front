<!--
 * @Author: xiaolifeipiao
 * @Description: 标签栏
 * @version: 0.0.0
 * @Date: 2021-07-10 15:18:36
 * @LastEditTime: 2021-07-16 20:26:29
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\MyTabBar.vue
-->
<template>
<van-config-provider :theme-vars="themeVars">
    <van-tabbar v-model="active" class="tab_bar_mb">
        <van-tabbar-item   to="/home" >
            <span>选车</span>
            <template #icon="props">
            <img :src="props.active ? iconCar.active : iconCar.inactive"  class="icon"/>
            </template>
        </van-tabbar-item>
        <van-tabbar-item  @click="onLogin">
            <span>{{isLogin===true?"我的":"未登录"}}</span>
            <template #icon="props">
            <img :src="props.active ? iconMe.active : iconMe.inactive"  class="icon" />
            </template>
        </van-tabbar-item>
    </van-tabbar>
</van-config-provider>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Tabbar, TabbarItem } from 'vant';
import { log } from 'console';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'MyTabBar',
  components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    const router = useRouter()
     const isLogin = ref(true)
      const active = ref(0)
    //   const activeCar = ref(0);
    //    const activeMe = ref(0);
      const iconCar = {
        active: 'src/assets/icon/active/选车-选中@2x.png',
        inactive: 'src/assets/icon/inactive/选车@2x.png',
     };
     const iconMe = {
        active: 'src/assets/icon/active/我的-选中@2x.png',
        inactive: 'src/assets/icon/inactive/我的@2x.png',
     };
     const onChange = (index) => Toast(`标签 ${index}`);
      // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeVars = {
       tabbarHeight:'48px',
       tabbarItemFontSize:'10px',
       tabbarItemTextColor:'#1F2129',
       tabbarItemMarginBottom:'0'
    };
    // 登录判断
    const onLogin = ()=>{
      if(!isLogin){
          router.push({name:'Login'})
      }else{
        router.push({name:'Me'})
      }
    }
    return { 
        active,
        iconCar,
        iconMe,
        // activeCar,
        // activeMe,
        themeVars,
        onChange,
        isLogin,
        onLogin
     }
  }
})
</script>

<style scoped>
/** 覆盖 Button 最外层元素的样式 */
  .icon{
      width: 32px;
      height: 32px;
  }
  .tab_bar_mb{
      margin-bottom: 5px;
  }
</style>
