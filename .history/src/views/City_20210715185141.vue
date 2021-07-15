<!--
 * @Author: xiaolifeipiao
 * @Description: 城市选择
 * @version: 0.0.0
 * @Date: 2021-07-15 13:25:40
 * @LastEditTime: 2021-07-15 18:51:17
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\City.vue
-->
<template>
    <my-nav-bar title="选择城市"></my-nav-bar>
    <div id="container" style="height: 800px;width: 800px;"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MyNavBar from '@coms/MyNavBar.vue'
import AMapLoader from '@amap/amap-jsapi-loader';
export default defineComponent({
    name:'City',
    components:{
        MyNavBar
    },
    setup() {
         AMapLoader.load({
        "key": "9b1e8b8f86ebc651b2116251e0ed0988",                                          // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": [],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        "AMapUI": {                                         // 是否加载 AMapUI，缺省不加载
            "version": '1.1',                               // AMapUI 缺省 1.1
            "plugins":[],                                   // 需要加载的 AMapUI ui插件
        },
        "Loca":{                                            // 是否加载 Loca， 缺省不加载
            "version": '1.3.2'                              // Loca 版本，缺省 1.3.2
        },
    }).then((AMap)=>{
        var map = new AMap.Map('container', {
               center: [116.397428, 39.90923],
                zoom: 13
        });
    }).catch(e => {
        console.log(e);
    })
        
    },
})
</script>
