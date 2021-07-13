<!--
 * @Author: xiaolifeipiao
 * @Description: 360car测试
 * @version: 0.0.0
 * @Date: 2021-07-13 10:40:01
 * @LastEditTime: 2021-07-13 15:42:48
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarTest.vue
-->
<template>
  <div class="image-container">
      <div class="cpt-wg-360">
           <div 
            ref="myRef"
            class="cloudimage-360"
            :data-folder="carUrl"
            :data-image-list= 'list'
            data-amount="36"
            data-magnifier="3"
            ></div>
        </div>
  </div>
</template>

<script>
import {defineComponent,onMounted,onUnmounted, ref} from 'vue'
import  'js-cloudimage-360-view'
export default defineComponent({
    name:'CarTest',
    setup(){
        const myRef = ref(null);
        onMounted(()=>{
            //  const list ='["c09f50ebb5f642eaad25cc1674a26f16~tplv-resize:640:0.png","efb1c947740549719673848f288519be~tplv-resize:640:0.png","25d48ba2f7eb4dca8e70e3c907728423~tplv-resize:640:0.png","9ffc9c896a664d11b5f85babb97eda0d~tplv-resize:640:0.png", "6cf3b8405a0847ecad9d22d4020a512a~tplv-resize:640:0.png","1d5fc2c32db74030bfadbde47cd329a0~tplv-resize:640:0.png","9752db81a3804db59ef6e6bf4eacd2a2~tplv-resize:640:0.png", "e357a71c13d849ec9313f4355b5ef8ea~tplv-resize:640:0.png","8e6c9a5729764ca49ed045942b4e02c5~tplv-resize:640:0.png", "cd0c1057e6d94596824b5a405b480f06~tplv-resize:640:0.png","3872cd2ec84440febb97575dc543b12f~tplv-resize:640:0.png","64d3ad10db214ee389e7a99c02f75853~tplv-resize:640:0.png","44020fd131aa4b0b9a5f6791c336d207~tplv-resize:640:0.png","f42b4812f5fc4445979f6bf501f70e83~tplv-resize:640:0.png","23f9aed17fcd427c9cf636204a486f42~tplv-resize:640:0.png","f76fc23bba0c40a5a5c3e9ffced63d00~tplv-resize:640:0.png","1d2d7ffadaa84ba7bac1446e3c2ac2dd~tplv-resize:640:0.png","5022d1ae0a86449eb34880910d6f4ce9~tplv-resize:640:0.png","96383b3f5ff54444a70be40cee53f429~tplv-resize:640:0.png","8ef06c0c01cd456abdc674cb8783f488~tplv-resize:640:0.png","c4d039d9966c417fb3920a8b145f5a64~tplv-resize:640:0.png","11fd0e85553642a8bd1754454544b390~tplv-resize:640:0.png","5c1900c29bb04dc6b3d86c7d1aa1e676~tplv-resize:640:0.png","ea9d8c999f164c6e9dd73eb37e651055~tplv-resize:640:0.png","e2e5aa1d6a7a4a5d9dfc4a03c41c6136~tplv-resize:640:0.png","89b58bcd341c4bb3a98e75b4dc2308e4~tplv-resize:640:0.png","52fcfcba61a24fe1a9eb7f97b45926a4~tplv-resize:640:0.png","fe9f27a648964092b82854ab3d47ea48~tplv-resize:640:0.png","105b5d2d9408470386e25b7d0dad2222~tplv-resize:640:0.png","dcd28903f2f84ca2975a9c50a601928a~tplv-resize:640:0.png","1294f2762ce146feb732f480e5987d80~tplv-resize:640:0.png","43e980ca95634c5cb148f3d3166ca294~tplv-resize:640:0.png","f4dcbf582106409ba440c9b5d1fca750~tplv-resize:640:0.png","bf1d31f3cbee47269af01708465a7ed2~tplv-resize:640:0.png","326b47d95695490793c033bc6de6e53c~tplv-resize:640:0.png","8e2a5c5612d748cfacb72f143397061d~tplv-resize:640:0.png"]'
            // myRef.value.setAttribute('data-image-list',list)
            // console.log(myRef.value);
            window.CI360.init()
           
        })
        onUnmounted(()=>{
            window.CI360.destroy()
        })
        const  carUrl ="https://p9-dcd.byteimg.com/img/tos-cn-i-0000/"
        const list =["c09f50ebb5f642eaad25cc1674a26f16~tplv-resize:640:0.png","efb1c947740549719673848f288519be~tplv-resize:640:0.png","25d48ba2f7eb4dca8e70e3c907728423~tplv-resize:640:0.png","9ffc9c896a664d11b5f85babb97eda0d~tplv-resize:640:0.png", "6cf3b8405a0847ecad9d22d4020a512a~tplv-resize:640:0.png","1d5fc2c32db74030bfadbde47cd329a0~tplv-resize:640:0.png","9752db81a3804db59ef6e6bf4eacd2a2~tplv-resize:640:0.png", "e357a71c13d849ec9313f4355b5ef8ea~tplv-resize:640:0.png","8e6c9a5729764ca49ed045942b4e02c5~tplv-resize:640:0.png", "cd0c1057e6d94596824b5a405b480f06~tplv-resize:640:0.png","3872cd2ec84440febb97575dc543b12f~tplv-resize:640:0.png","64d3ad10db214ee389e7a99c02f75853~tplv-resize:640:0.png","44020fd131aa4b0b9a5f6791c336d207~tplv-resize:640:0.png","f42b4812f5fc4445979f6bf501f70e83~tplv-resize:640:0.png","23f9aed17fcd427c9cf636204a486f42~tplv-resize:640:0.png","f76fc23bba0c40a5a5c3e9ffced63d00~tplv-resize:640:0.png","1d2d7ffadaa84ba7bac1446e3c2ac2dd~tplv-resize:640:0.png","5022d1ae0a86449eb34880910d6f4ce9~tplv-resize:640:0.png","96383b3f5ff54444a70be40cee53f429~tplv-resize:640:0.png","8ef06c0c01cd456abdc674cb8783f488~tplv-resize:640:0.png","c4d039d9966c417fb3920a8b145f5a64~tplv-resize:640:0.png","11fd0e85553642a8bd1754454544b390~tplv-resize:640:0.png","5c1900c29bb04dc6b3d86c7d1aa1e676~tplv-resize:640:0.png","ea9d8c999f164c6e9dd73eb37e651055~tplv-resize:640:0.png","e2e5aa1d6a7a4a5d9dfc4a03c41c6136~tplv-resize:640:0.png","89b58bcd341c4bb3a98e75b4dc2308e4~tplv-resize:640:0.png","52fcfcba61a24fe1a9eb7f97b45926a4~tplv-resize:640:0.png","fe9f27a648964092b82854ab3d47ea48~tplv-resize:640:0.png","105b5d2d9408470386e25b7d0dad2222~tplv-resize:640:0.png","dcd28903f2f84ca2975a9c50a601928a~tplv-resize:640:0.png","1294f2762ce146feb732f480e5987d80~tplv-resize:640:0.png","43e980ca95634c5cb148f3d3166ca294~tplv-resize:640:0.png","f4dcbf582106409ba440c9b5d1fca750~tplv-resize:640:0.png","bf1d31f3cbee47269af01708465a7ed2~tplv-resize:640:0.png","326b47d95695490793c033bc6de6e53c~tplv-resize:640:0.png","8e2a5c5612d748cfacb72f143397061d~tplv-resize:640:0.png"]
        // console.log(list)
        return{
            list,
            carUrl
        }
    }
}) 
</script>

<style>

.image-container {
    position: relative;
    width: 100%;
    height: 160px;
    background-image: -webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,0)),to(#ccc));
    background-image: -webkit-linear-gradient(bottom,hsla(0,0%,100%,0),#ccc);
    background-image: linear-gradient(0deg,hsla(0,0%,100%,0),#ccc);
}
.cpt-wg-360 {
   position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    position: relative;
    padding: 0 9.6%;
    min-height: 160px;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: -15px;
}
</style>