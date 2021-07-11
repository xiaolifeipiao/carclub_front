<!--
 * @Author: xiaolifeipiao
 * @Description: 车型大会首页
 * @version: 0.0.0
 * @Date: 2021-07-10 21:28:15
 * @LastEditTime: 2021-07-11 18:30:34
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\Home.vue
-->
<template>
    <!-- 导航条 -->
    <nav-bar :title="title"></nav-bar>
    <div class="brand">
        <van-grid :column-num="5" :border="false" :gutter="2">
        <van-grid-item v-for="item in brandList" :key="item.brand_id"  :to="{path: 'test', query: {id: item.brand_id }}">
            <van-image class="brand_img" :src="item.image_url"/>
            <span class="brand_name">{{item.brand_name}}</span>
        </van-grid-item>
    </van-grid>
    </div>
    <!-- 猜你喜欢 -->
    <p class="related">猜你喜欢</p>
    <van-config-provider :theme-vars="themeVars">
        <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in related" :key="item.brand_id"  :to="{path: 'test', query: {id: item.brand_id }}">
            <van-image class="related_img" :src="item.image_url"/>
            <span class="related_name">{{item.brand_name}}</span>
        </van-grid-item>
    </van-grid>
    </van-config-provider>
     <!-- 广告条 -->
     <div class="adv">
         <van-tag class="adv_tag" color="#205BE6" size="medium" text-color="#fff">新车</van-tag>
         <span class="adv_content">哈弗H6、缤越Pro、轩逸、红旗HS7、奥迪A4asdfasdda</span>
         <van-icon class="adv_icon" size="12" name="play" />
     </div>
    <!-- 索引 -->
    <van-index-bar :index-list="indexList" highlight-color="#89BCD7">
            <van-index-anchor class="index_title"   index="选" v-show="true">选</van-index-anchor>
        <div v-for="(item,key) in brandAll"  :index="key">
            <van-index-anchor class="index_title" v-if="item.type ===1000"  :index="item.info.pinyin">{{item.info.pinyin}}</van-index-anchor>
            <van-cell  :to="{path: 'test', query: {id: item.info.brand_id}}" v-if="item.type ===1001">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <van-image class="index_cell_url" :src="item.info.image_url"></van-image>
                    <span class="index_cell_name">{{item.info.brand_name}}</span>
                </template>
            </van-cell>
        </div>
    </van-index-bar>
      <!-- 标签 -->
    <my-tab-bar></my-tab-bar>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Grid, GridItem,Image,Tag,Icon, IndexBar, IndexAnchor,Cell} from 'vant'
import NavBar from '@coms/NavBar.vue'
import MyTabBar from '@coms/MyTabBar.vue'
import {brandModel,getAllBrandModel} from '@/models/brandModel'
import {indexList} from '@utils/tool'
export default defineComponent({
  name: 'Home',
  components:{
    [Grid.name]:Grid,
    [Icon.name]:Icon,
    [Tag.name]:Tag,
    [Cell.name]:Cell,
    [Image.name]:Image,
    [GridItem.name]:GridItem,
    [IndexBar.name]:IndexBar,
    [IndexAnchor.name]:IndexAnchor,
    MyTabBar,
    NavBar
  },
  setup: () => {
    const title= ref('车型大会')
     const themeVars = {
         gridItemContentPadding:'5px'
    };
    // 品牌数据
    const brandList:brandModel[] =[
        {
            brand_id:1,brand_name:'奔驰',image_url:'src/assets/icon/brand/奔驰.png'
        },
         {
            brand_id:'2',brand_name:'宝马',image_url:'src/assets/icon/brand/宝马.png'
        },
         {
            brand_id:'3',brand_name:'沃尔沃',image_url:'src/assets/icon/brand/沃尔沃.png'
        },
         {
            brand_id:'4',brand_name:'别克',image_url:'src/assets/icon/brand/别克.png'
        },
         {
            brand_id:'5',brand_name:'马自达',image_url:'src/assets/icon/brand/马自达.png'
        }
    ]
    //猜你喜欢
    const related:Array<brandModel>=[
         {
            brand_id:1,brand_name:'奔驰GIC',image_url:'src/assets/webp/1.webp'
        },
         {
            brand_id:2,brand_name:'宝马X1',image_url:'src/assets/webp/2.webp'
        },
         {
            brand_id:3,brand_name:'奔驰CG',image_url:'src/assets/webp/3.webp'
        },
         {
            brand_id:4,brand_name:'指南者',image_url:'src/assets/webp/4.webp'
        },
         {
            brand_id:5,brand_name:'速腾',image_url:'src/assets/webp/5.webp'
        },
         {
            brand_id:6,brand_name:'宝马3系',image_url:'src/assets/webp/6.webp'
        },
    ]
    // 所有车型数据
    const brandAll:Array<getAllBrandModel> =[
        {
            "type": 1000,
            "info": {
                "pinyin": "A"
            },
            "unique_id": 1625993771089420000,
            "unique_id_str": "1625993771089420053"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 2,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000048d6334c26b4~tplv-resize:100:0.png",
                "brand_name": "奥迪",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089482200,
            "unique_id_str": "1625993771089482228"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 80,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd5000018f89ff63f66~tplv-resize:100:0.png",
                "brand_name": "阿斯顿·马丁",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089503000,
            "unique_id_str": "1625993771089502966"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 51,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd500003399ce089bef~tplv-resize:100:0.png",
                "brand_name": "阿尔法·罗密欧",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089519400,
            "unique_id_str": "1625993771089519280"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 176,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/2f1e00007c6289f0792c~tplv-resize:100:0.png",
                "brand_name": "ARCFOX极狐",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089532000,
            "unique_id_str": "1625993771089531957"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 336,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/cad84db12a5d8f6cfb1cdbf880243bf7~tplv-resize:100:0.png",
                "brand_name": "AUXUN傲旋",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089537800,
            "unique_id_str": "1625993771089537893"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 232,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/65de000034bac9473ebb~tplv-resize:100:0.png",
                "brand_name": "爱驰",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089553700,
            "unique_id_str": "1625993771089553645"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 114,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000198aee2e4688~tplv-resize:100:0.png",
                "brand_name": "ALPINA",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089571800,
            "unique_id_str": "1625993771089571773"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 211,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/47480000800eb20581b0~tplv-resize:100:0.png",
                "brand_name": "ABT",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089583900,
            "unique_id_str": "1625993771089583770"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 113,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/2f1e00004430bdcb8ae4~tplv-resize:100:0.png",
                "brand_name": "AC Schnitzer",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089606700,
            "unique_id_str": "1625993771089606537"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 178,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ce0fbc9776ca83bf13d68a6dcc6bea14~tplv-resize:100:0.png",
                "brand_name": "艾康尼克",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089612000,
            "unique_id_str": "1625993771089611949"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 281,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000dd502d00831a~tplv-resize:100:0.png",
                "brand_name": "Apollo",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089626000,
            "unique_id_str": "1625993771089626118"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 177,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de00002847f933b329~tplv-resize:100:0.png",
                "brand_name": "Arash",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089638400,
            "unique_id_str": "1625993771089638339"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 224,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de0000286dab2bf0dd~tplv-resize:100:0.png",
                "brand_name": "Aria",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089655600,
            "unique_id_str": "1625993771089655667"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 256,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef100008e8c6272396c~tplv-resize:100:0.png",
                "brand_name": "AEV ROBOTICS",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089667600,
            "unique_id_str": "1625993771089667689"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 312,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef8000039845c8b804e~tplv-resize:100:0.png",
                "brand_name": "Aurus",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089681000,
            "unique_id_str": "1625993771089680939"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 314,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1767400003e551db594e5~tplv-resize:100:0.png",
                "brand_name": "Agile Automotive",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089691600,
            "unique_id_str": "1625993771089691525"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 313,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/66b9b74e9bf243082402bb1239d3638e~tplv-resize:100:0.png",
                "brand_name": "ATS",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089728800,
            "unique_id_str": "1625993771089728765"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 364,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/2a0cbdbffe78079b33a97ca4196425f0~tplv-resize:100:0.png",
                "brand_name": "Aspark",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089737000,
            "unique_id_str": "1625993771089736977"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 402,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b20f5f1fa51057d07422cbdd22f15eeb~tplv-resize:100:0.png",
                "brand_name": "Ariel",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089748700,
            "unique_id_str": "1625993771089748754"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 431,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/676159269bf523f90f86e078e1e2a807~tplv-resize:100:0.png",
                "brand_name": "ARMADILLO",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089759200,
            "unique_id_str": "1625993771089759322"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 380,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/bba02dc57c9c3664fc839145941198bc~tplv-resize:100:0.png",
                "brand_name": "APEX",
                "pinyin": "A",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089772300,
            "unique_id_str": "1625993771089772211"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "B"
            },
            "unique_id": 1625993771089773000,
            "unique_id_str": "1625993771089773129"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 3,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd50000190229abeec8~tplv-resize:100:0.png",
                "brand_name": "奔驰",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089790700,
            "unique_id_str": "1625993771089790660"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 4,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/4867710a834bd648ba55797ba5e37f14~tplv-resize:100:0.png",
                "brand_name": "宝马",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089798700,
            "unique_id_str": "1625993771089798696"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 9,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018fc7c108922~tplv-resize:100:0.png",
                "brand_name": "本田",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089814000,
            "unique_id_str": "1625993771089814015"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 12,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/3a6f9e39b4e75c3c2cb9677460d40cef~tplv-resize:100:0.png",
                "brand_name": "别克",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089823000,
            "unique_id_str": "1625993771089823075"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 16,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/cd22a0e416c42c6d049194fa29dbf429~tplv-resize:100:0.png",
                "brand_name": "比亚迪",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089830100,
            "unique_id_str": "1625993771089830268"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 20,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000190122c26c84~tplv-resize:100:0.png",
                "brand_name": "保时捷",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089849600,
            "unique_id_str": "1625993771089849596"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 366,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/94d85e1a953b5d3a00fb35e45ed5a242~tplv-resize:100:0.png",
                "brand_name": "宝骏",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089859600,
            "unique_id_str": "1625993771089859474"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 61,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0929d7fb1f98a067e02567cbf81db1e9~tplv-resize:100:0.png",
                "brand_name": "标致",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089869800,
            "unique_id_str": "1625993771089869777"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 47,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd5000018ff4dd8bd1d~tplv-resize:100:0.png",
                "brand_name": "宾利",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089887200,
            "unique_id_str": "1625993771089887131"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 27,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef3000008d32ff8e0fe~tplv-resize:100:0.png",
                "brand_name": "奔腾",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089903600,
            "unique_id_str": "1625993771089903583"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 52,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef500008770269b46cf~tplv-resize:100:0.png",
                "brand_name": "北京",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089923600,
            "unique_id_str": "1625993771089923585"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 68,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e365fc1df929c2760ad80b94b40cc86d~tplv-resize:100:0.png",
                "brand_name": "北京汽车",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089936600,
            "unique_id_str": "1625993771089936689"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 93,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/705b84f5ef9407db3d280ab7915a8f1c~tplv-resize:100:0.png",
                "brand_name": "北汽新能源",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089943800,
            "unique_id_str": "1625993771089943861"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 78,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001924e92455cc~tplv-resize:100:0.png",
                "brand_name": "北汽制造",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089960700,
            "unique_id_str": "1625993771089960656"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 60,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018f60f10d679~tplv-resize:100:0.png",
                "brand_name": "北汽昌河",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089978000,
            "unique_id_str": "1625993771089978064"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 444,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/88544f22bd6a610cff66bfc50c465e6b~tplv-resize:100:0.png",
                "brand_name": "北汽瑞翔",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771089987000,
            "unique_id_str": "1625993771089986988"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 94,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001959434c5686~tplv-resize:100:0.png",
                "brand_name": "北汽幻速",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090008600,
            "unique_id_str": "1625993771090008572"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 69,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd50000192918f046a3~tplv-resize:100:0.png",
                "brand_name": "北汽威旺",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090032400,
            "unique_id_str": "1625993771090032336"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 116,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000195501b6cd69~tplv-resize:100:0.png",
                "brand_name": "宝沃",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090052900,
            "unique_id_str": "1625993771090052924"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 118,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0e3a71ddca9e1b559b9fcf2af0b0d37a~tplv-resize:100:0.png",
                "brand_name": "博速",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090060300,
            "unique_id_str": "1625993771090060320"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 117,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000194609f381b5~tplv-resize:100:0.png",
                "brand_name": "比速汽车",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090077700,
            "unique_id_str": "1625993771090077617"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 334,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/9724a3e6a624e1b1be8976f1e04ab9a1~tplv-resize:100:0.png",
                "brand_name": "比德文汽车",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090086700,
            "unique_id_str": "1625993771090086624"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 411,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/41db6d6976aafb8e805f9efa50327fbe~tplv-resize:100:0.png",
                "brand_name": "比克汽车",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090098400,
            "unique_id_str": "1625993771090098458"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 240,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/65de00007f76c67d636b~tplv-resize:100:0.png",
                "brand_name": "北京清行",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090122200,
            "unique_id_str": "1625993771090122367"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 263,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef30000a90429bc3c83~tplv-resize:100:0.png",
                "brand_name": "博郡汽车",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090138400,
            "unique_id_str": "1625993771090138438"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 82,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b130000688195431d5a~tplv-resize:100:0.png",
                "brand_name": "布加迪",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090152200,
            "unique_id_str": "1625993771090152104"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 204,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4747000043740e79def9~tplv-resize:100:0.png",
                "brand_name": "拜腾",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090163700,
            "unique_id_str": "1625993771090163838"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 219,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4748000081ab3c9f6482~tplv-resize:100:0.png",
                "brand_name": "宾尼法利纳",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090175500,
            "unique_id_str": "1625993771090175361"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 254,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b0eebdfad53d17e8106523324ac4bc32~tplv-resize:100:0.png",
                "brand_name": "宝腾汽车",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090180400,
            "unique_id_str": "1625993771090180294"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 226,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/474800008e54d621fcc0~tplv-resize:100:0.png",
                "brand_name": "保斐利",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090192000,
            "unique_id_str": "1625993771090191875"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 407,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/20e2c3995d35ac111d4bf642ac5d9b42~tplv-resize:100:0.png",
                "brand_name": "北汽泰普",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090198000,
            "unique_id_str": "1625993771090197962"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 346,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/5a510ad1733716ada50ac7fe92bebb31~tplv-resize:100:0.png",
                "brand_name": "Bollinger",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090206000,
            "unique_id_str": "1625993771090205945"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 270,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef20000d09fc5f2e00d~tplv-resize:100:0.png",
                "brand_name": "博世",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090217200,
            "unique_id_str": "1625993771090217261"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 315,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef4000109df08e578a1~tplv-resize:100:0.png",
                "brand_name": "BAC",
                "pinyin": "B",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090229500,
            "unique_id_str": "1625993771090229404"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "C"
            },
            "unique_id": 1625993771090230000,
            "unique_id_str": "1625993771090230065"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 35,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/95744f21ad1bb26f9eb522433471cecc~tplv-resize:100:0.png",
                "brand_name": "长安",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090237200,
            "unique_id_str": "1625993771090237174"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 119,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/bb75ea7a4feabd810170d49e0ee2ca6c~tplv-resize:100:0.png",
                "brand_name": "长安欧尚",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090247200,
            "unique_id_str": "1625993771090247145"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 8,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018efd5725196~tplv-resize:100:0.png",
                "brand_name": "长城",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090258400,
            "unique_id_str": "1625993771090258347"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 368,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/4956cf9a6293e016e33f95cb525cddf0~tplv-resize:100:0.png",
                "brand_name": "创维汽车",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090263300,
            "unique_id_str": "1625993771090263254"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 171,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001996b5777d63~tplv-resize:100:0.png",
                "brand_name": "长安凯程",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090279200,
            "unique_id_str": "1625993771090279061"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 210,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de00000dde9a468155~tplv-resize:100:0.png",
                "brand_name": "长安跨越",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090294800,
            "unique_id_str": "1625993771090294911"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 120,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001954c88b6a0d~tplv-resize:100:0.png",
                "brand_name": "成功汽车",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090308400,
            "unique_id_str": "1625993771090308460"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 304,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef3000111803b970b0c~tplv-resize:100:0.png",
                "brand_name": "车驰汽车",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090322700,
            "unique_id_str": "1625993771090322646"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 341,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/dce8069cbd866851b0e0a36643cf0ae2~tplv-resize:100:0.png",
                "brand_name": "Cupra",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090327800,
            "unique_id_str": "1625993771090327770"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 233,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de0000361bd47fcb88~tplv-resize:100:0.png",
                "brand_name": "刺猬汽车",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090341600,
            "unique_id_str": "1625993771090341676"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 227,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4747000090382900ac48~tplv-resize:100:0.png",
                "brand_name": "昶洧",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090353000,
            "unique_id_str": "1625993771090352807"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 180,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/65de00002abcda9d328c~tplv-resize:100:0.png",
                "brand_name": "长江·EV",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090375400,
            "unique_id_str": "1625993771090375429"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 217,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/47480000810bf3c20b18~tplv-resize:100:0.png",
                "brand_name": "Corbellati",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090390300,
            "unique_id_str": "1625993771090390213"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 316,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef4000109bf34207f54~tplv-resize:100:0.png",
                "brand_name": "Conquest",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090408700,
            "unique_id_str": "1625993771090408645"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 228,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47470000909e072e549d~tplv-resize:100:0.png",
                "brand_name": "Caterham",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090420000,
            "unique_id_str": "1625993771090419995"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 345,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/5d953ec38128331ad2960c4e4f7552be~tplv-resize:100:0.png",
                "brand_name": "Canoo",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090424600,
            "unique_id_str": "1625993771090424634"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 376,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6d6c98b1b6f522ea14d1861b69a02454~tplv-resize:100:0.png",
                "brand_name": "Czinger",
                "pinyin": "C",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090430200,
            "unique_id_str": "1625993771090430270"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "D"
            },
            "unique_id": 1625993771090431000,
            "unique_id_str": "1625993771090430999"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 1,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png",
                "brand_name": "大众",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090435300,
            "unique_id_str": "1625993771090435429"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 70,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/51504ccf9decf37772e06597572c57f7~tplv-resize:100:0.png",
                "brand_name": "东风风行",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090463000,
            "unique_id_str": "1625993771090463011"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 37,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/15895182ce8995641ad47168e0c60b2f~tplv-resize:100:0.png",
                "brand_name": "东风风神",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090475000,
            "unique_id_str": "1625993771090475051"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 54,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001907750fd5a0~tplv-resize:100:0.png",
                "brand_name": "道奇",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090492000,
            "unique_id_str": "1625993771090491833"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 55,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd500001930d2913b25~tplv-resize:100:0.png",
                "brand_name": "DS",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090503700,
            "unique_id_str": "1625993771090503558"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 77,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018f298e666a4~tplv-resize:100:0.png",
                "brand_name": "东南",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090514000,
            "unique_id_str": "1625993771090513989"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 95,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd5000019481f667784~tplv-resize:100:0.png",
                "brand_name": "东风风光",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090526500,
            "unique_id_str": "1625993771090526454"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 79,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001947859c1aff~tplv-resize:100:0.png",
                "brand_name": "东风小康",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090540800,
            "unique_id_str": "1625993771090540712"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 246,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef3000001433ca927d9~tplv-resize:100:0.png",
                "brand_name": "大乘汽车",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090562800,
            "unique_id_str": "1625993771090562842"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 91,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001908af8052c5~tplv-resize:100:0.png",
                "brand_name": "东风",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090574600,
            "unique_id_str": "1625993771090574555"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 92,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001949f28114f2~tplv-resize:100:0.png",
                "brand_name": "东风风度",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090585600,
            "unique_id_str": "1625993771090585612"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 417,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/10c82aff15dac1064ab966b7107a2c07~tplv-resize:100:0.png",
                "brand_name": "东风新能源",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090593800,
            "unique_id_str": "1625993771090593842"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 230,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b130000986279690a44~tplv-resize:100:0.png",
                "brand_name": "东风·瑞泰特",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090604500,
            "unique_id_str": "1625993771090604569"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 373,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6924a6a11d8ff8699e9a926881d3935b~tplv-resize:100:0.png",
                "brand_name": "东风富康",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090609700,
            "unique_id_str": "1625993771090609767"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 372,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/2e7c5871c68d642ab27969820abc9bb2~tplv-resize:100:0.png",
                "brand_name": "大运",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090617900,
            "unique_id_str": "1625993771090617869"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 121,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b130000986c343e2d96~tplv-resize:100:0.png",
                "brand_name": "大发",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090636300,
            "unique_id_str": "1625993771090636190"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 183,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de00002846de600b13~tplv-resize:100:0.png",
                "brand_name": "Dacia",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090649300,
            "unique_id_str": "1625993771090649244"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 291,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b13000167fd15c495fd~tplv-resize:100:0.png",
                "brand_name": "Datsun",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090660000,
            "unique_id_str": "1625993771090660079"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 337,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/a083eb2b89a98a1836e31f07a67b1b8b~tplv-resize:100:0.png",
                "brand_name": "De Tomaso",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090665200,
            "unique_id_str": "1625993771090665179"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 294,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef30000decbd00a0c88~tplv-resize:100:0.png",
                "brand_name": "Donkervoort",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090675700,
            "unique_id_str": "1625993771090675757"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 257,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/9b1300011e451ab558e5~tplv-resize:100:0.png",
                "brand_name": "Dianchè",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090693600,
            "unique_id_str": "1625993771090693579"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 353,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/9dc950a2606c155fb81ba07af5bca8f6~tplv-resize:100:0.png",
                "brand_name": "Drako",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090714400,
            "unique_id_str": "1625993771090714404"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 397,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f9793a5a2e9b736209293fb2ad8e2021~tplv-resize:100:0.png",
                "brand_name": "DAVID BROWN",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090723000,
            "unique_id_str": "1625993771090722984"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 286,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef00000deb0e65be9e7~tplv-resize:100:0.png",
                "brand_name": "大迪汽车",
                "pinyin": "D",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090738200,
            "unique_id_str": "1625993771090738231"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "E"
            },
            "unique_id": 1625993771090739200,
            "unique_id_str": "1625993771090739074"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 293,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef30000deca5ac0d6be~tplv-resize:100:0.png",
                "brand_name": "Elemental",
                "pinyin": "E",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090750000,
            "unique_id_str": "1625993771090750062"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 392,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f481e350734f29fe1b3d0746cb7a04a5~tplv-resize:100:0.png",
                "brand_name": "Elektron",
                "pinyin": "E",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090755000,
            "unique_id_str": "1625993771090755002"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "F"
            },
            "unique_id": 1625993771090755600,
            "unique_id_str": "1625993771090755532"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 5,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:100:0.png",
                "brand_name": "丰田",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090767400,
            "unique_id_str": "1625993771090767265"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 7,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000190c8e84e016~tplv-resize:100:0.png",
                "brand_name": "福特",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090783500,
            "unique_id_str": "1625993771090783592"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 44,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000196e63c3f0a9~tplv-resize:100:0.png",
                "brand_name": "法拉利",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090800000,
            "unique_id_str": "1625993771090800211"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 57,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f4385768dc61f72ff8670bef60ab9c9f~tplv-resize:100:0.png",
                "brand_name": "福田",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090811000,
            "unique_id_str": "1625993771090810985"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 381,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/277778220537b5addfd14d537452acf1~tplv-resize:100:0.png",
                "brand_name": "枫叶汽车",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090819800,
            "unique_id_str": "1625993771090819739"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 122,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018e96c011b3e~tplv-resize:100:0.png",
                "brand_name": "福迪",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090835700,
            "unique_id_str": "1625993771090835794"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 404,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/939e626e4e05b50ff3899f91697af2fe~tplv-resize:100:0.png",
                "brand_name": "飞碟汽车",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090857500,
            "unique_id_str": "1625993771090857462"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 205,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4747000044a7d64c04c8~tplv-resize:100:0.png",
                "brand_name": "Fisker",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090872300,
            "unique_id_str": "1625993771090872414"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 229,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de00002abeff203e01~tplv-resize:100:0.png",
                "brand_name": "Faraday Future",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090889700,
            "unique_id_str": "1625993771090889627"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 317,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef600003f94acdafaa5~tplv-resize:100:0.png",
                "brand_name": "FM Auto",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090901200,
            "unique_id_str": "1625993771090901150"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 284,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/beef0000dee3d6905bf4~tplv-resize:100:0.png",
                "brand_name": "弗那萨利",
                "pinyin": "F",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090911700,
            "unique_id_str": "1625993771090911841"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "G"
            },
            "unique_id": 1625993771090912500,
            "unique_id_str": "1625993771090912418"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 40,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd500001962dd0f021d~tplv-resize:100:0.png",
                "brand_name": "广汽传祺",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090924000,
            "unique_id_str": "1625993771090923969"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 242,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/c9b9bcd5a1ce71084a2b39b249780a5a~tplv-resize:100:0.png",
                "brand_name": "广汽埃安",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090934300,
            "unique_id_str": "1625993771090934388"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 237,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b0d95358f37d5596c9d52debed2d421c~tplv-resize:100:0.png",
                "brand_name": "广汽集团",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090941400,
            "unique_id_str": "1625993771090941504"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 96,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019662272af82~tplv-resize:100:0.png",
                "brand_name": "GMC",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090956300,
            "unique_id_str": "1625993771090956245"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 58,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019316d97e09f~tplv-resize:100:0.png",
                "brand_name": "观致",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090970600,
            "unique_id_str": "1625993771090970634"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 249,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/12bf3329a611cf9222b88b4e9fed5b6a~tplv-resize:100:0.png",
                "brand_name": "高合",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090979000,
            "unique_id_str": "1625993771090979034"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 266,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef400004c8f97629697~tplv-resize:100:0.png",
                "brand_name": "国机智骏",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771090992600,
            "unique_id_str": "1625993771090992664"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 335,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/a06a0ff9f8506674943e0f6827564008~tplv-resize:100:0.png",
                "brand_name": "广通客车",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091002400,
            "unique_id_str": "1625993771091002304"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 124,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000198254f70462~tplv-resize:100:0.png",
                "brand_name": "光冈",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091014100,
            "unique_id_str": "1625993771091014235"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 268,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef4000050b26698b6e3~tplv-resize:100:0.png",
                "brand_name": "GYON",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091026400,
            "unique_id_str": "1625993771091026497"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 267,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef30000c83c70b406b0~tplv-resize:100:0.png",
                "brand_name": "GFG Style",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091038200,
            "unique_id_str": "1625993771091038175"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 318,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef4000109e00267cd3c~tplv-resize:100:0.png",
                "brand_name": "Ginetta",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091050000,
            "unique_id_str": "1625993771091049984"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 321,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef500009bb2739ba9f8~tplv-resize:100:0.png",
                "brand_name": "GTA",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091060500,
            "unique_id_str": "1625993771091060564"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 271,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef10000cf9e1268521a~tplv-resize:100:0.png",
                "brand_name": "格罗夫",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091077400,
            "unique_id_str": "1625993771091077495"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 342,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ee9a19f14ef172a5d896cbd5f3c49ca6~tplv-resize:100:0.png",
                "brand_name": "谷歌",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091082200,
            "unique_id_str": "1625993771091082271"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 320,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f6c8cde4ca1b32a091b45cf27b26a56a~tplv-resize:100:0.png",
                "brand_name": "GLM",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091086600,
            "unique_id_str": "1625993771091086564"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 400,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/eb5fb48403025142da3b5b8a9b10da70~tplv-resize:100:0.png",
                "brand_name": "GMA",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091091500,
            "unique_id_str": "1625993771091091431"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 423,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ae7daf70f13e8e149e781861bb01cf1d~tplv-resize:100:0.png",
                "brand_name": "G-POWER",
                "pinyin": "G",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091097300,
            "unique_id_str": "1625993771091097263"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "H"
            },
            "unique_id": 1625993771091097900,
            "unique_id_str": "1625993771091097938"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 17,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/9b130000f0d049b6783a~tplv-resize:100:0.png",
                "brand_name": "哈弗",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091109000,
            "unique_id_str": "1625993771091109213"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 59,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500002636d93efd87~tplv-resize:100:0.png",
                "brand_name": "红旗",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091128800,
            "unique_id_str": "1625993771091128907"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 303,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ff4bef8f348b5d94f5a12a3f60306e68~tplv-resize:100:0.png",
                "brand_name": "合创汽车",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091137300,
            "unique_id_str": "1625993771091137235"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 53,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000027eae9a44e39~tplv-resize:100:0.png",
                "brand_name": "海马",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091147300,
            "unique_id_str": "1625993771091147306"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 126,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd50000193fc452bc22~tplv-resize:100:0.png",
                "brand_name": "汉腾汽车",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091156500,
            "unique_id_str": "1625993771091156503"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 72,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd5000018eed57e9809~tplv-resize:100:0.png",
                "brand_name": "华泰",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091166000,
            "unique_id_str": "1625993771091166033"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 99,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd500002a2c47133914~tplv-resize:100:0.png",
                "brand_name": "华泰新能源",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091175700,
            "unique_id_str": "1625993771091175651"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 132,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd50000190f6f82a03f~tplv-resize:100:0.png",
                "brand_name": "黄海",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091188000,
            "unique_id_str": "1625993771091187869"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 125,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000195d34f6026b~tplv-resize:100:0.png",
                "brand_name": "海格",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091198700,
            "unique_id_str": "1625993771091198634"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 343,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/959e32fe03bff73623ff773654bcae30~tplv-resize:100:0.png",
                "brand_name": "汉龙汽车",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091203800,
            "unique_id_str": "1625993771091203776"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 127,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001983c46e21a2~tplv-resize:100:0.png",
                "brand_name": "恒天",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091218400,
            "unique_id_str": "1625993771091218380"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 429,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/70aef991bb7394f59f0ec60fbcc95be4~tplv-resize:100:0.png",
                "brand_name": "宏瑞汽车",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091225900,
            "unique_id_str": "1625993771091225922"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 220,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4747000082d9ce3ce96d~tplv-resize:100:0.png",
                "brand_name": "Hennessey",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091240700,
            "unique_id_str": "1625993771091240714"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 278,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/beef0000dc94a0086611~tplv-resize:100:0.png",
                "brand_name": "霍顿",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091261000,
            "unique_id_str": "1625993771091260983"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 322,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/66c32608ef3981ee1126ae82634ae1d8~tplv-resize:100:0.png",
                "brand_name": "Hispano Suiza",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091268900,
            "unique_id_str": "1625993771091268925"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 399,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e6ce944f11e0db6c9aa2c3843ef50c5c~tplv-resize:100:0.png",
                "brand_name": "恒驰",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091276500,
            "unique_id_str": "1625993771091276644"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 437,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6bcabce12042f5cde2d704ef2a2e6242~tplv-resize:100:0.png",
                "brand_name": "HOFELE",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091288600,
            "unique_id_str": "1625993771091288621"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 403,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/798fb16d8eb41bf4b2d630be8a94439e~tplv-resize:100:0.png",
                "brand_name": "Hyperion",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091295500,
            "unique_id_str": "1625993771091295420"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 413,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/772f1e3db3d2650776de7745ade9c626~tplv-resize:100:0.png",
                "brand_name": "华晨新日",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091303400,
            "unique_id_str": "1625993771091303485"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 418,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/3a7af8e21a8ac6e63eacf36f9f2f5d1e~tplv-resize:100:0.png",
                "brand_name": "宏远汽车",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091317500,
            "unique_id_str": "1625993771091317511"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 441,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/3dab9a6f927718bb93ab3a0b0ddd91b3~tplv-resize:100:0.png",
                "brand_name": "恒润汽车",
                "pinyin": "H",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091325400,
            "unique_id_str": "1625993771091325327"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "I"
            },
            "unique_id": 1625993771091326000,
            "unique_id_str": "1625993771091326006"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 165,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/39f5000028bdbfac48ab~tplv-resize:100:0.png",
                "brand_name": "Icona",
                "pinyin": "I",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091344000,
            "unique_id_str": "1625993771091343889"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 223,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/474700008cb2e1d6f62a~tplv-resize:100:0.png",
                "brand_name": "Italdesign",
                "pinyin": "I",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091360000,
            "unique_id_str": "1625993771091360124"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 323,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef8000041d019efafa4~tplv-resize:100:0.png",
                "brand_name": "Inferno",
                "pinyin": "I",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091376400,
            "unique_id_str": "1625993771091376463"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 388,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/c103c4a8a16337c144a7cb65fbfac457~tplv-resize:100:0.png",
                "brand_name": "IED",
                "pinyin": "I",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091384600,
            "unique_id_str": "1625993771091384675"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 387,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/4878afefcf2ca3fe9ef3abe5f9e703b5~tplv-resize:100:0.png",
                "brand_name": "INKAS",
                "pinyin": "I",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091398700,
            "unique_id_str": "1625993771091398568"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 393,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ee004e802b09d03ebc51a88df7f49a93~tplv-resize:100:0.png",
                "brand_name": "INEOS",
                "pinyin": "I",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091406600,
            "unique_id_str": "1625993771091406593"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 398,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0829291e2ac4c98d43e080b645a15ba0~tplv-resize:100:0.png",
                "brand_name": "IZERA",
                "pinyin": "I",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091418600,
            "unique_id_str": "1625993771091418551"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "J"
            },
            "unique_id": 1625993771091419400,
            "unique_id_str": "1625993771091419434"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 73,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef40000170177cb5597~tplv-resize:100:0.png",
                "brand_name": "吉利汽车",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091473000,
            "unique_id_str": "1625993771091472891"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 264,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/5f40b81dec4ad03b0c07a85c62a9fad9~tplv-resize:100:0.png",
                "brand_name": "几何汽车",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091485200,
            "unique_id_str": "1625993771091485176"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 426,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f44eceb65e1590ab7aaab48a698feeed~tplv-resize:100:0.png",
                "brand_name": "极氪",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091493400,
            "unique_id_str": "1625993771091493448"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 14,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001910668c419f~tplv-resize:100:0.png",
                "brand_name": "Jeep",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091514000,
            "unique_id_str": "1625993771091514184"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 31,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd5000019117e61577d~tplv-resize:100:0.png",
                "brand_name": "捷豹",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091529500,
            "unique_id_str": "1625993771091529363"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 273,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b43719d16219919054db4f36cf8093d1~tplv-resize:100:0.png",
                "brand_name": "捷尼赛思",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091535000,
            "unique_id_str": "1625993771091535152"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 32,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000193c63a19315~tplv-resize:100:0.png",
                "brand_name": "江淮",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091545900,
            "unique_id_str": "1625993771091545829"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 209,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4747000054e2156d3d90~tplv-resize:100:0.png",
                "brand_name": "捷途",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091557600,
            "unique_id_str": "1625993771091557674"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 260,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef30000988668b46156~tplv-resize:100:0.png",
                "brand_name": "捷达",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091572200,
            "unique_id_str": "1625993771091572293"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 74,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef30000dbd33bf789b2~tplv-resize:100:0.png",
                "brand_name": "金杯",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091591400,
            "unique_id_str": "1625993771091591340"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 100,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001985d5b1c46c~tplv-resize:100:0.png",
                "brand_name": "江铃",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091605500,
            "unique_id_str": "1625993771091605521"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 136,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500003398a8d3ead7~tplv-resize:100:0.png",
                "brand_name": "江铃集团新能源",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091616500,
            "unique_id_str": "1625993771091616588"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 190,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/39f5000028be71a0ff10~tplv-resize:100:0.png",
                "brand_name": "君马汽车",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091628000,
            "unique_id_str": "1625993771091628022"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 140,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd5000019570a5534e6~tplv-resize:100:0.png",
                "brand_name": "金龙",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091642000,
            "unique_id_str": "1625993771091641994"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 133,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/2f1e0001033a5f6cac75~tplv-resize:100:0.png",
                "brand_name": "金旅",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091652600,
            "unique_id_str": "1625993771091652667"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 134,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001927ed57c5df~tplv-resize:100:0.png",
                "brand_name": "九龙",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091666200,
            "unique_id_str": "1625993771091666145"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 258,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b13000117cd2b22e0b0~tplv-resize:100:0.png",
                "brand_name": "钧天汽车",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091683600,
            "unique_id_str": "1625993771091683669"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 383,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/11fc4f087d51e310b137a84c0eb0909c~tplv-resize:100:0.png",
                "brand_name": "金冠汽车",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091691500,
            "unique_id_str": "1625993771091691519"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 354,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/2b3cf6c701aaf57386efc40b749ff62d~tplv-resize:100:0.png",
                "brand_name": "Jannarelly",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091696400,
            "unique_id_str": "1625993771091696293"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 421,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/fc5b049dbe3b05ab6b62517790350690~tplv-resize:100:0.png",
                "brand_name": "矩阵",
                "pinyin": "J",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091716000,
            "unique_id_str": "1625993771091716212"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "K"
            },
            "unique_id": 1625993771091717000,
            "unique_id_str": "1625993771091717140"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 30,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001914fe2fa856~tplv-resize:100:0.png",
                "brand_name": "凯迪拉克",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091728400,
            "unique_id_str": "1625993771091728450"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 84,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000035ea9ecdd88f~tplv-resize:100:0.png",
                "brand_name": "克莱斯勒",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091751200,
            "unique_id_str": "1625993771091751118"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 142,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000194fc05219d9~tplv-resize:100:0.png",
                "brand_name": "凯翼",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091767300,
            "unique_id_str": "1625993771091767354"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 139,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018f54135e144~tplv-resize:100:0.png",
                "brand_name": "开瑞",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091782400,
            "unique_id_str": "1625993771091782433"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 138,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd50000195093b5ff3f~tplv-resize:100:0.png",
                "brand_name": "卡威",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091793000,
            "unique_id_str": "1625993771091792911"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 148,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000d4def4d6bdb9~tplv-resize:100:0.png",
                "brand_name": "开沃汽车",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091804700,
            "unique_id_str": "1625993771091804690"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 135,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019452d414df9~tplv-resize:100:0.png",
                "brand_name": "卡尔森",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091815000,
            "unique_id_str": "1625993771091815037"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 259,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/beef0000a6632eb07a96~tplv-resize:100:0.png",
                "brand_name": "开云汽车",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091827700,
            "unique_id_str": "1625993771091827690"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 405,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/75a64b84c6b68200e3260e216cf82fcb~tplv-resize:100:0.png",
                "brand_name": "克蒂汽车",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091834600,
            "unique_id_str": "1625993771091834639"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 83,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/474700006e232dd40c11~tplv-resize:100:0.png",
                "brand_name": "科尼赛克",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091843600,
            "unique_id_str": "1625993771091843672"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 253,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef000004d45481a7aea~tplv-resize:100:0.png",
                "brand_name": "Karma",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091853600,
            "unique_id_str": "1625993771091853666"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 287,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/9b13000167ed251f06fb~tplv-resize:100:0.png",
                "brand_name": "凯佰赫",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091863300,
            "unique_id_str": "1625993771091863313"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 438,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0dde9c6af83b3a40f9e3ab5afedbf27f~tplv-resize:100:0.png",
                "brand_name": "Kimera",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091870700,
            "unique_id_str": "1625993771091870692"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 350,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/d3759d35237b53f31148b6ec6c79087a~tplv-resize:100:0.png",
                "brand_name": "Karlmann",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091883800,
            "unique_id_str": "1625993771091883654"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 355,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/598d62ef19748163ce877059bf5c1eb1~tplv-resize:100:0.png",
                "brand_name": "开利",
                "pinyin": "K",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091891200,
            "unique_id_str": "1625993771091891110"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "L"
            },
            "unique_id": 1625993771091891700,
            "unique_id_str": "1625993771091891659"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 22,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000191995f226c1~tplv-resize:100:0.png",
                "brand_name": "雷克萨斯",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091902000,
            "unique_id_str": "1625993771091902064"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 19,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000191e2536da6f~tplv-resize:100:0.png",
                "brand_name": "路虎",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091927000,
            "unique_id_str": "1625993771091927074"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 174,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47400000482df441cc19~tplv-resize:100:0.png",
                "brand_name": "领克",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091958300,
            "unique_id_str": "1625993771091958231"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 202,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b13000099ca83641c2e~tplv-resize:100:0.png",
                "brand_name": "理想汽车",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091973000,
            "unique_id_str": "1625993771091973213"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 62,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/888300005ae776ac0daf~tplv-resize:100:0.png",
                "brand_name": "林肯",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091987200,
            "unique_id_str": "1625993771091987202"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 46,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000191ae099ea97~tplv-resize:100:0.png",
                "brand_name": "雷诺",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771091998200,
            "unique_id_str": "1625993771091998258"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 41,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019181420c6f9~tplv-resize:100:0.png",
                "brand_name": "劳斯莱斯",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092008700,
            "unique_id_str": "1625993771092008637"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 42,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000191738275961~tplv-resize:100:0.png",
                "brand_name": "兰博基尼",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092018200,
            "unique_id_str": "1625993771092018096"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 50,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd50000191d08d0c8e0~tplv-resize:100:0.png",
                "brand_name": "铃木",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092027100,
            "unique_id_str": "1625993771092027054"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 207,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/47400000755caf06b6a5~tplv-resize:100:0.png",
                "brand_name": "零跑汽车",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092035800,
            "unique_id_str": "1625993771092035763"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 76,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000cc77dc24f009~tplv-resize:100:0.png",
                "brand_name": "猎豹汽车",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092050400,
            "unique_id_str": "1625993771092050491"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 85,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/446dd05763ee5820fbf54846e701f918~tplv-resize:100:0.png",
                "brand_name": "路特斯",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092057900,
            "unique_id_str": "1625993771092057861"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 102,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000196418b29ae3~tplv-resize:100:0.png",
                "brand_name": "陆风",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092068400,
            "unique_id_str": "1625993771092068430"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 111,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019603d3ea3cc~tplv-resize:100:0.png",
                "brand_name": "理念",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092078800,
            "unique_id_str": "1625993771092078732"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 282,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b1300016582d5895c16~tplv-resize:100:0.png",
                "brand_name": "雷丁",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092089900,
            "unique_id_str": "1625993771092089835"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 145,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/39f5000015d4d82f3388~tplv-resize:100:0.png",
                "brand_name": "Lorinser",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092102400,
            "unique_id_str": "1625993771092102496"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 247,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef3000008d765611d84~tplv-resize:100:0.png",
                "brand_name": "领途汽车",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092115000,
            "unique_id_str": "1625993771092114970"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 395,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/986dac13d0d128da9aabb3df683e9b34~tplv-resize:100:0.png",
                "brand_name": "岚图",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092119800,
            "unique_id_str": "1625993771092119877"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 146,
                "image_url": "https://p3.pstatp.com/large/w240/1dd50000bb31b6a1adb8",
                "brand_name": "陆地方舟",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092125000,
            "unique_id_str": "1625993771092124832"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 415,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/1d9dcfede849d2a01a3ffa7ba16733d8~tplv-resize:100:0.png",
                "brand_name": "龙程汽车",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092130000,
            "unique_id_str": "1625993771092129950"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 384,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/fc63ea6536fe8fa2723e7dca0aa268e6~tplv-resize:100:0.png",
                "brand_name": "凌宝汽车",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092137200,
            "unique_id_str": "1625993771092137214"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 101,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018ec129847b9~tplv-resize:100:0.png",
                "brand_name": "力帆汽车",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092148200,
            "unique_id_str": "1625993771092148306"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 412,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/31698632bc400ffdce7ad9b8a3f8f47c~tplv-resize:100:0.png",
                "brand_name": "LUMMA",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092160300,
            "unique_id_str": "1625993771092160310"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 324,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/a75ba342a011593bf5b0269dce8e54dc~tplv-resize:100:0.png",
                "brand_name": "LEVC",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092167200,
            "unique_id_str": "1625993771092167150"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 192,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/39f500002b5621ca970b~tplv-resize:100:0.png",
                "brand_name": "拉达",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092183000,
            "unique_id_str": "1625993771092183146"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 298,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef30000e1576de19491~tplv-resize:100:0.png",
                "brand_name": "LeSEE",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092199200,
            "unique_id_str": "1625993771092199221"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 212,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/3669dd9f1396d6cfa7b47c1b9653b226~tplv-resize:100:0.png",
                "brand_name": "绿驰",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092209000,
            "unique_id_str": "1625993771092208938"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 301,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef20000e667220e96d7~tplv-resize:100:0.png",
                "brand_name": "雷诺三星",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092226000,
            "unique_id_str": "1625993771092225942"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 214,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/beef0000a49da39c4ce2~tplv-resize:100:0.png",
                "brand_name": "拉共达",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092246800,
            "unique_id_str": "1625993771092246898"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 309,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/42e3322e83063327a572a9ede50e23f8~tplv-resize:100:0.png",
                "brand_name": "领志",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092256500,
            "unique_id_str": "1625993771092256458"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 325,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/c5c31892ebf1d6aab7e6d3e17a925871~tplv-resize:100:0.png",
                "brand_name": "Lucid",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092265000,
            "unique_id_str": "1625993771092264914"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 371,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0544547f433896925c4a7924cbf0a9e9~tplv-resize:100:0.png",
                "brand_name": "Lordstown Motors",
                "pinyin": "L",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092272000,
            "unique_id_str": "1625993771092272109"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "M"
            },
            "unique_id": 1625993771092272600,
            "unique_id_str": "1625993771092272755"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 15,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001920f34d8b85~tplv-resize:100:0.png",
                "brand_name": "马自达",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092287500,
            "unique_id_str": "1625993771092287378"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 34,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/9556900e24b43302eec0d91b4545426f~tplv-resize:100:0.png",
                "brand_name": "名爵",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092294700,
            "unique_id_str": "1625993771092294759"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 45,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0df4accdb73f460f89b1aea238fcb2c8~tplv-resize:100:0.png",
                "brand_name": "玛莎拉蒂",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092309000,
            "unique_id_str": "1625993771092308982"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 65,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b13000027addd103baf~tplv-resize:100:0.png",
                "brand_name": "MINI",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092326400,
            "unique_id_str": "1625993771092326357"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 86,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019440398823a~tplv-resize:100:0.png",
                "brand_name": "迈凯伦",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092343300,
            "unique_id_str": "1625993771092343408"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 349,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/58da571e60daf824166e0e3d414a6056~tplv-resize:100:0.png",
                "brand_name": "迈迈",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092351500,
            "unique_id_str": "1625993771092351402"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 272,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef20000d37d8832ef37~tplv-resize:100:0.png",
                "brand_name": "迈莎锐",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092369400,
            "unique_id_str": "1625993771092369461"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 147,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001932e5f58ff0~tplv-resize:100:0.png",
                "brand_name": "摩根",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092391200,
            "unique_id_str": "1625993771092391266"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 356,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/96e91f0c534b64798786f983f379c69f~tplv-resize:100:0.png",
                "brand_name": "敏安汽车",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092402400,
            "unique_id_str": "1625993771092402544"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 296,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/3106291595f7e9f1f25ac50938eb0b58~tplv-resize:100:0.png",
                "brand_name": "Mazzanti",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092412700,
            "unique_id_str": "1625993771092412747"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 261,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef00000a151fd4b8064~tplv-resize:100:0.png",
                "brand_name": "Mole",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092432100,
            "unique_id_str": "1625993771092432041"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 414,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/1bfbbe3875a568792169df6f72021a9e~tplv-resize:100:0.png",
                "brand_name": "摩登汽车",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092440000,
            "unique_id_str": "1625993771092439937"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 297,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef30000e0673504e19c~tplv-resize:100:0.png",
                "brand_name": "MELKUS",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092458000,
            "unique_id_str": "1625993771092458079"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 328,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef7000043707b7bbb66~tplv-resize:100:0.png",
                "brand_name": "米高",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092475000,
            "unique_id_str": "1625993771092474935"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 327,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef500009c623ffd24e9~tplv-resize:100:0.png",
                "brand_name": "MAGNA",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092493800,
            "unique_id_str": "1625993771092493943"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 351,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6970896fefc4b2cdccbae71f45f5b755~tplv-resize:100:0.png",
                "brand_name": "Mahindra",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092499500,
            "unique_id_str": "1625993771092499467"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 443,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e73599adff3b2afa2b06aef9253137f6~tplv-resize:100:0.png",
                "brand_name": "Manhart",
                "pinyin": "M",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092507100,
            "unique_id_str": "1625993771092507247"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "N"
            },
            "unique_id": 1625993771092508200,
            "unique_id_str": "1625993771092508045"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 199,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/1f5e4e807a24a6355201bea736d3baf7~tplv-resize:100:0.png",
                "brand_name": "哪吒汽车",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092513000,
            "unique_id_str": "1625993771092513084"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 87,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019288fe8819b~tplv-resize:100:0.png",
                "brand_name": "纳智捷",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092524500,
            "unique_id_str": "1625993771092524416"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 200,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47480000255e4b424a5b~tplv-resize:100:0.png",
                "brand_name": "NEVS国能汽车",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092535800,
            "unique_id_str": "1625993771092535693"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 299,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef20000e6642647a46d~tplv-resize:100:0.png",
                "brand_name": "nanoFLOWCELL",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092561000,
            "unique_id_str": "1625993771092560868"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 363,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/eed1f04995cc3650208a845fdac18617~tplv-resize:100:0.png",
                "brand_name": "Neuron EV",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092569300,
            "unique_id_str": "1625993771092569426"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 378,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/61a083d8e9673a74e541f1919fdbffe0~tplv-resize:100:0.png",
                "brand_name": "Nikola",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092574500,
            "unique_id_str": "1625993771092574474"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 424,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/bc261bc4eaad10736a97e64df927f595~tplv-resize:100:0.png",
                "brand_name": "Novitec",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092579300,
            "unique_id_str": "1625993771092579349"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 432,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/8fd8ccd4f57f81c2a9699d63efdbf214~tplv-resize:100:0.png",
                "brand_name": "NEXT LEVEL",
                "pinyin": "N",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092584200,
            "unique_id_str": "1625993771092584297"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "O"
            },
            "unique_id": 1625993771092585000,
            "unique_id_str": "1625993771092585079"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 38,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b130000429b21f4fc90~tplv-resize:100:0.png",
                "brand_name": "讴歌",
                "pinyin": "O",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092597500,
            "unique_id_str": "1625993771092597447"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 238,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/28d3b85cbc8e1bb2c0e643931ec1baf3~tplv-resize:100:0.png",
                "brand_name": "欧拉",
                "pinyin": "O",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092607200,
            "unique_id_str": "1625993771092607106"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 357,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/592f7bbf8295c9ecb3b73b2800ff27eb~tplv-resize:100:0.png",
                "brand_name": "欧联",
                "pinyin": "O",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092611300,
            "unique_id_str": "1625993771092611448"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "P"
            },
            "unique_id": 1625993771092612000,
            "unique_id_str": "1625993771092611973"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 196,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/40670000d8c7df2767ad~tplv-resize:100:0.png",
                "brand_name": "Polestar极星",
                "pinyin": "P",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092622600,
            "unique_id_str": "1625993771092622514"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 280,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef400006030a99c0841~tplv-resize:100:0.png",
                "brand_name": "佩奇奥",
                "pinyin": "P",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092633000,
            "unique_id_str": "1625993771092633160"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 329,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e546338daf529d7f020ea64f13c080ac~tplv-resize:100:0.png",
                "brand_name": "Puritalia",
                "pinyin": "P",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092637700,
            "unique_id_str": "1625993771092637742"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 262,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef10000a15885a16ba8~tplv-resize:100:0.png",
                "brand_name": "Piëch",
                "pinyin": "P",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092647700,
            "unique_id_str": "1625993771092647663"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 420,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/9913287605a9a4e7a18fed29544ba853~tplv-resize:100:0.png",
                "brand_name": "朋克汽车",
                "pinyin": "P",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092654000,
            "unique_id_str": "1625993771092654028"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 442,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ac80992a13deeee9c54fc799e6232c03~tplv-resize:100:0.png",
                "brand_name": "Pogea Racing",
                "pinyin": "P",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092660000,
            "unique_id_str": "1625993771092660023"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "Q"
            },
            "unique_id": 1625993771092660700,
            "unique_id_str": "1625993771092660629"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 13,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/9997244f9934fdebe915cde58bb2ddf2~tplv-resize:100:0.png",
                "brand_name": "起亚",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092670000,
            "unique_id_str": "1625993771092670069"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 18,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd5000018f4728b7ea3~tplv-resize:100:0.png",
                "brand_name": "奇瑞",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092680700,
            "unique_id_str": "1625993771092680670"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 109,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/c4ba152c8dd2ff7f43c0e99b040cc611~tplv-resize:100:0.png",
                "brand_name": "启辰",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092685800,
            "unique_id_str": "1625993771092685849"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 149,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b1300000f98f6dea6d6~tplv-resize:100:0.png",
                "brand_name": "前途",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092696300,
            "unique_id_str": "1625993771092696407"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 143,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef300001f6256e41c4e~tplv-resize:100:0.png",
                "brand_name": "全球鹰",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092724500,
            "unique_id_str": "1625993771092724384"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 236,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/65de000043a2a9557872~tplv-resize:100:0.png",
                "brand_name": "乔治·巴顿",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092735500,
            "unique_id_str": "1625993771092735363"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 203,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47470000349ca8dc02e5~tplv-resize:100:0.png",
                "brand_name": "庆铃汽车",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092745200,
            "unique_id_str": "1625993771092745199"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 104,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd50000194ab9e213da~tplv-resize:100:0.png",
                "brand_name": "骐铃汽车",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092754400,
            "unique_id_str": "1625993771092754429"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 225,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/474700008f18b85b366f~tplv-resize:100:0.png",
                "brand_name": "奇点汽车",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092764700,
            "unique_id_str": "1625993771092764762"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 265,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef10000c82a18615e24~tplv-resize:100:0.png",
                "brand_name": "清源汽车",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092776200,
            "unique_id_str": "1625993771092776263"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 435,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b68797f21edf87eeeb76cf6dc6147b18~tplv-resize:100:0.png",
                "brand_name": "奇鲁汽车",
                "pinyin": "Q",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092785000,
            "unique_id_str": "1625993771092784843"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "R"
            },
            "unique_id": 1625993771092785200,
            "unique_id_str": "1625993771092785269"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 10,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/5feee803f00613b3dfb9ec977192deb5~tplv-resize:100:0.png",
                "brand_name": "日产",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092789800,
            "unique_id_str": "1625993771092789729"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 36,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/760ee4a385ef4219209dead5be9feb96~tplv-resize:100:0.png",
                "brand_name": "荣威",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092796400,
            "unique_id_str": "1625993771092796355"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 401,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/c24043cdb32678019f3162826a933ce8~tplv-resize:100:0.png",
                "brand_name": "R汽车",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092801300,
            "unique_id_str": "1625993771092801401"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 198,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4748000024170813176b~tplv-resize:100:0.png",
                "brand_name": "瑞驰",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092827600,
            "unique_id_str": "1625993771092827671"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 244,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/888300006ad3422b17d3~tplv-resize:100:0.png",
                "brand_name": "容大智造",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092837600,
            "unique_id_str": "1625993771092837593"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 150,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/2f1e0001033cbed93e8d~tplv-resize:100:0.png",
                "brand_name": "如虎",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092852000,
            "unique_id_str": "1625993771092852093"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 292,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/acbdce3c6a50a2ac24d49e13b9c6e931~tplv-resize:100:0.png",
                "brand_name": "Rezvani",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092857300,
            "unique_id_str": "1625993771092857289"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 213,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47470000819a18395b62~tplv-resize:100:0.png",
                "brand_name": "Rimac",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092871200,
            "unique_id_str": "1625993771092871273"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 279,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef10000dc18b00aef45~tplv-resize:100:0.png",
                "brand_name": "Rinspeed",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092882400,
            "unique_id_str": "1625993771092882518"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 252,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef1000047bbe86dc94f~tplv-resize:100:0.png",
                "brand_name": "RIVIAN",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092892000,
            "unique_id_str": "1625993771092891840"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 330,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/176750000413bd3b69e0c~tplv-resize:100:0.png",
                "brand_name": "RENOVO",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092902400,
            "unique_id_str": "1625993771092902372"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 358,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f6390d6846b9cbff47dfe9866905e006~tplv-resize:100:0.png",
                "brand_name": "Radical",
                "pinyin": "R",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092908800,
            "unique_id_str": "1625993771092908778"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "S"
            },
            "unique_id": 1625993771092909300,
            "unique_id_str": "1625993771092909205"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 23,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47480000d23e5f7c9d05~tplv-resize:100:0.png",
                "brand_name": "斯柯达",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092918300,
            "unique_id_str": "1625993771092918336"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 108,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/00dc924de414edc53779b408f13df233~tplv-resize:100:0.png",
                "brand_name": "上汽大通MAXUS",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092923600,
            "unique_id_str": "1625993771092923725"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 26,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd50000197600e75bea~tplv-resize:100:0.png",
                "brand_name": "三菱",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092934100,
            "unique_id_str": "1625993771092934193"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 33,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b7f695f8d411ad395ebbf4f5bb003914~tplv-resize:100:0.png",
                "brand_name": "斯巴鲁",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092942000,
            "unique_id_str": "1625993771092942026"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 48,
                "image_url": "https://p3-dcd.byteimg.com/img/mosaic-legacy/1dd50000191347772b96~tplv-resize:100:0.png",
                "brand_name": "smart",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092954400,
            "unique_id_str": "1625993771092954379"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 157,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000194cbfbc1d94~tplv-resize:100:0.png",
                "brand_name": "SWM斯威汽车",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092970500,
            "unique_id_str": "1625993771092970462"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 163,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019747cc29a9c~tplv-resize:100:0.png",
                "brand_name": "双龙",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092980000,
            "unique_id_str": "1625993771092980046"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 193,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0f086f88908cfad623ec993c7661e41d~tplv-resize:100:0.png",
                "brand_name": "SRM鑫源",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092984800,
            "unique_id_str": "1625993771092984914"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 235,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ea83a344e4b583aac8130b9d24dddc26~tplv-resize:100:0.png",
                "brand_name": "思皓",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092989200,
            "unique_id_str": "1625993771092989292"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 105,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000192da1c0aa70~tplv-resize:100:0.png",
                "brand_name": "思铭",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771092998400,
            "unique_id_str": "1625993771092998321"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 390,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/d427df451b0a08e8a6f4bee709d1e7f2~tplv-resize:100:0.png",
                "brand_name": "速达",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093002800,
            "unique_id_str": "1625993771093002872"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 365,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0dd829e1df011afb07813d2fc34bb75c~tplv-resize:100:0.png",
                "brand_name": "上喆",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093009400,
            "unique_id_str": "1625993771093009304"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 231,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000cd6a47661121~tplv-resize:100:0.png",
                "brand_name": "SERES赛力斯",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093020700,
            "unique_id_str": "1625993771093020660"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 396,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/ddbe133bf8fda1740fc662f1a7830e7e~tplv-resize:100:0.png",
                "brand_name": "神州",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093027600,
            "unique_id_str": "1625993771093027674"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 152,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/497f295f7475db8e1d0abf99bace13fb~tplv-resize:100:0.png",
                "brand_name": "赛麟",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093035000,
            "unique_id_str": "1625993771093035002"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 275,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef400005bf31099ea17~tplv-resize:100:0.png",
                "brand_name": "Scion",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093045200,
            "unique_id_str": "1625993771093045311"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 370,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f05f661942a8de8f19e2443d5a94093c~tplv-resize:100:0.png",
                "brand_name": "SONY",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093050000,
            "unique_id_str": "1625993771093050197"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 338,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e438d9783e57829dabd218f18650c25d~tplv-resize:100:0.png",
                "brand_name": "Sono Motors",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093059600,
            "unique_id_str": "1625993771093059599"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 359,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e55fdf29937f61a6b2f3b3dd6b6fdc7c~tplv-resize:100:0.png",
                "brand_name": "Share2Drive",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093064200,
            "unique_id_str": "1625993771093064244"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 408,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/d1a2f81d57507c68b16d05d2e3d9a831~tplv-resize:100:0.png",
                "brand_name": "松散机车",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093068800,
            "unique_id_str": "1625993771093068891"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 360,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/cd0e1047f4c55336d4001b283c8d68f2~tplv-resize:100:0.png",
                "brand_name": "SIN CARS",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093073400,
            "unique_id_str": "1625993771093073344"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 434,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6451abbca8223f8fff85189d18f201b5~tplv-resize:100:0.png",
                "brand_name": "Spofec",
                "pinyin": "S",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093078000,
            "unique_id_str": "1625993771093078114"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "T"
            },
            "unique_id": 1625993771093078500,
            "unique_id_str": "1625993771093078539"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 63,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/222f2748c0d6e9c69c00a304f2ac8da1~tplv-resize:100:0.png",
                "brand_name": "特斯拉",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093083000,
            "unique_id_str": "1625993771093082911"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 425,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/17fca7e0dec078194be0cf6248c79706~tplv-resize:100:0.png",
                "brand_name": "坦克",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093091300,
            "unique_id_str": "1625993771093091435"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 159,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/20ec91592b09ece5684e5db7ca842905~tplv-resize:100:0.png",
                "brand_name": "腾势",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093097200,
            "unique_id_str": "1625993771093097300"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 250,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b66372f95693eca019c33ec19f21a383~tplv-resize:100:0.png",
                "brand_name": "天际汽车",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093101800,
            "unique_id_str": "1625993771093101842"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 216,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de00001b46314bb1dd~tplv-resize:100:0.png",
                "brand_name": "塔塔",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093113300,
            "unique_id_str": "1625993771093113438"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 221,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de0000258497c7ca66~tplv-resize:100:0.png",
                "brand_name": "泰克鲁斯·腾风",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093124000,
            "unique_id_str": "1625993771093124036"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 285,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef400006193eb293e11~tplv-resize:100:0.png",
                "brand_name": "TVR",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093136000,
            "unique_id_str": "1625993771093135770"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 305,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/de66a1199a338207cbbef91b0b3eaa36~tplv-resize:100:0.png",
                "brand_name": "Tramontana",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093148000,
            "unique_id_str": "1625993771093147926"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 369,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/a9444fa3a34a308e6bd9c166bab132b6~tplv-resize:100:0.png",
                "brand_name": "TOGG",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093155000,
            "unique_id_str": "1625993771093154953"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 361,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/aa72ce4ba6781e4369ad122395309007~tplv-resize:100:0.png",
                "brand_name": "TOROIDION",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093162000,
            "unique_id_str": "1625993771093162104"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 375,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f6f00b01175ca5ea7c70ba5c989e64de~tplv-resize:100:0.png",
                "brand_name": "Troller",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093170700,
            "unique_id_str": "1625993771093170663"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 389,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/9046d63ceebaa564640fbb75c4df1d7b~tplv-resize:100:0.png",
                "brand_name": "Triton",
                "pinyin": "T",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093178600,
            "unique_id_str": "1625993771093178650"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "U"
            },
            "unique_id": 1625993771093179600,
            "unique_id_str": "1625993771093179592"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 339,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/0844359269bd043dd9a0b63bf9e000d1~tplv-resize:100:0.png",
                "brand_name": "Ultima",
                "pinyin": "U",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093186300,
            "unique_id_str": "1625993771093186263"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 348,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e5840383b8e02cf8c500f42f354aaf9e~tplv-resize:100:0.png",
                "brand_name": "Uniti",
                "pinyin": "U",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093196300,
            "unique_id_str": "1625993771093196393"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "V"
            },
            "unique_id": 1625993771093197300,
            "unique_id_str": "1625993771093197244"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 289,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000dfbe34d99eaa~tplv-resize:100:0.png",
                "brand_name": "Venturi",
                "pinyin": "V",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093214500,
            "unique_id_str": "1625993771093214575"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 300,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000e406f2085107~tplv-resize:100:0.png",
                "brand_name": "Vinfast",
                "pinyin": "V",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093229800,
            "unique_id_str": "1625993771093229845"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 288,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b13000167efb96a0bf6~tplv-resize:100:0.png",
                "brand_name": "VLF Automotive",
                "pinyin": "V",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093242000,
            "unique_id_str": "1625993771093242120"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 374,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/bb5533abc4559fd7ce9768c0c58e6261~tplv-resize:100:0.png",
                "brand_name": "VANTAS",
                "pinyin": "V",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093249500,
            "unique_id_str": "1625993771093249661"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 362,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/4550695f081ccff630a298cce56d63a4~tplv-resize:100:0.png",
                "brand_name": "Vanda Electric",
                "pinyin": "V",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093276200,
            "unique_id_str": "1625993771093276265"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 379,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e2b6966ea27e00bda107ac06d9d5ecdc~tplv-resize:100:0.png",
                "brand_name": "Vega Innovations",
                "pinyin": "V",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093290800,
            "unique_id_str": "1625993771093290813"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 436,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6c5e660f8cf199bc1ba4f1a772c0d47d~tplv-resize:100:0.png",
                "brand_name": "VIRITECH",
                "pinyin": "V",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093299200,
            "unique_id_str": "1625993771093299118"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "W"
            },
            "unique_id": 1625993771093300000,
            "unique_id_str": "1625993771093299976"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 24,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47480000350acc3ee9ba~tplv-resize:100:0.png",
                "brand_name": "沃尔沃",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093313300,
            "unique_id_str": "1625993771093313331"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 39,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6341f9be710ffc5370493582a0d80638~tplv-resize:100:0.png",
                "brand_name": "五菱汽车",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093318700,
            "unique_id_str": "1625993771093318662"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 66,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000193d695f30f9~tplv-resize:100:0.png",
                "brand_name": "WEY",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093329400,
            "unique_id_str": "1625993771093329516"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 112,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500005c0df707d6d2~tplv-resize:100:0.png",
                "brand_name": "蔚来",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093340200,
            "unique_id_str": "1625993771093340258"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 185,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f303361d6bd2a90a2bb76addfdbd653b~tplv-resize:100:0.png",
                "brand_name": "威马汽车",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093347800,
            "unique_id_str": "1625993771093347960"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 106,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001933871b44f8~tplv-resize:100:0.png",
                "brand_name": "五十铃",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093358300,
            "unique_id_str": "1625993771093358339"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 160,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000197f20ca7824~tplv-resize:100:0.png",
                "brand_name": "威麟",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093368300,
            "unique_id_str": "1625993771093368343"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 416,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/4e56dc2ae119b0a8c51595b065c05ded~tplv-resize:100:0.png",
                "brand_name": "WALD",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093375500,
            "unique_id_str": "1625993771093375569"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 161,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd500001971dfc9a31e~tplv-resize:100:0.png",
                "brand_name": "威兹曼",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093386800,
            "unique_id_str": "1625993771093386718"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 274,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000d496605b8756~tplv-resize:100:0.png",
                "brand_name": "沃克斯豪尔",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093397000,
            "unique_id_str": "1625993771093397099"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 222,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/65de000025d6460a8f01~tplv-resize:100:0.png",
                "brand_name": "W Motors",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093411000,
            "unique_id_str": "1625993771093411015"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 377,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/d89faa3891c86d27b4d5eba600958c62~tplv-resize:100:0.png",
                "brand_name": "瓦滋",
                "pinyin": "W",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093417700,
            "unique_id_str": "1625993771093417723"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "X"
            },
            "unique_id": 1625993771093418200,
            "unique_id_str": "1625993771093418173"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 6,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000196a38ee3f43~tplv-resize:100:0.png",
                "brand_name": "雪佛兰",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093429000,
            "unique_id_str": "1625993771093429060"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 11,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/6af469ddb92b4c24628c5884ab323f21~tplv-resize:100:0.png",
                "brand_name": "现代",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093433600,
            "unique_id_str": "1625993771093433681"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 21,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000196b5468da99~tplv-resize:100:0.png",
                "brand_name": "雪铁龙",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093446000,
            "unique_id_str": "1625993771093445808"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 251,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b130000bdcc33e169cb~tplv-resize:100:0.png",
                "brand_name": "星途",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093461500,
            "unique_id_str": "1625993771093461503"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 195,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/bcc1c920f0b475e4e36d4cebde17d7ec~tplv-resize:100:0.png",
                "brand_name": "小鹏汽车",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093474300,
            "unique_id_str": "1625993771093474262"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 123,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000195b51afff9b~tplv-resize:100:0.png",
                "brand_name": "新龙马汽车",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093486600,
            "unique_id_str": "1625993771093486500"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 234,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/474800009b46088ae188~tplv-resize:100:0.png",
                "brand_name": "新特汽车",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093496800,
            "unique_id_str": "1625993771093496848"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 410,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/302aea3b993849ab6ba5cda4cd192f1c~tplv-resize:100:0.png",
                "brand_name": "晓奥汽车",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093502700,
            "unique_id_str": "1625993771093502689"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 306,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef6000007dea706a690~tplv-resize:100:0.png",
                "brand_name": "谢尔比",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093530600,
            "unique_id_str": "1625993771093530693"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 89,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/cb8274929f5038b2285599d5e91b09c5~tplv-resize:100:0.png",
                "brand_name": "西雅特",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093541000,
            "unique_id_str": "1625993771093541127"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 245,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/65de000120428b239da6~tplv-resize:100:0.png",
                "brand_name": "西尔贝",
                "pinyin": "X",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093561900,
            "unique_id_str": "1625993771093561976"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "Y"
            },
            "unique_id": 1625993771093562600,
            "unique_id_str": "1625993771093562716"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 29,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/7ce6f6647f35d936df4c803e3ebedb98~tplv-resize:100:0.png",
                "brand_name": "英菲尼迪",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093569800,
            "unique_id_str": "1625993771093569720"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 67,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000196531e04027~tplv-resize:100:0.png",
                "brand_name": "一汽",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093585400,
            "unique_id_str": "1625993771093585299"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 107,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd500001904e2c764b9~tplv-resize:100:0.png",
                "brand_name": "野马汽车",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093604900,
            "unique_id_str": "1625993771093604799"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 188,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef0000011a8e0c1b3f0~tplv-resize:100:0.png",
                "brand_name": "云度",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093616600,
            "unique_id_str": "1625993771093616641"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 90,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/1dd50000196cd62fa906~tplv-resize:100:0.png",
                "brand_name": "依维柯",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093628200,
            "unique_id_str": "1625993771093628086"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 167,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000194b04820507~tplv-resize:100:0.png",
                "brand_name": "驭胜",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093641500,
            "unique_id_str": "1625993771093641472"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 172,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/39f5000028c043d6e7d6~tplv-resize:100:0.png",
                "brand_name": "宇通客车",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093652700,
            "unique_id_str": "1625993771093652769"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 173,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/2f1e0001065006487948~tplv-resize:100:0.png",
                "brand_name": "御捷",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093663000,
            "unique_id_str": "1625993771093662918"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 394,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/f888ebc54fbacc8a232dfa42e1cec12b~tplv-resize:100:0.png",
                "brand_name": "英致汽车",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093668000,
            "unique_id_str": "1625993771093668068"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 439,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/e3fc0d751c3606bb8504f7319c4dd746~tplv-resize:100:0.png",
                "brand_name": "雅升汽车",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093673000,
            "unique_id_str": "1625993771093673011"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 302,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/beef0000e9e0b59f9129~tplv-resize:100:0.png",
                "brand_name": "银隆新能源",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093683000,
            "unique_id_str": "1625993771093682878"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 308,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef700002e2974c0bb5a~tplv-resize:100:0.png",
                "brand_name": "远程汽车",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093711000,
            "unique_id_str": "1625993771093711192"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 367,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/d46ab7eac7e68c9f91d3462bc50cb31d~tplv-resize:100:0.png",
                "brand_name": "一汽凌河",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093717200,
            "unique_id_str": "1625993771093717141"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 307,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef8000025a130e476e0~tplv-resize:100:0.png",
                "brand_name": "英飒",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093731800,
            "unique_id_str": "1625993771093731760"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 332,
                "image_url": "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef8000043e9e95f3401~tplv-resize:100:0.png",
                "brand_name": "YAMAHA",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093749200,
            "unique_id_str": "1625993771093749364"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 208,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4748000057cd322df957~tplv-resize:100:0.png",
                "brand_name": "游侠",
                "pinyin": "Y",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093765000,
            "unique_id_str": "1625993771093765203"
        },
        {
            "type": 1000,
            "info": {
                "pinyin": "Z"
            },
            "unique_id": 1625993771093766100,
            "unique_id_str": "1625993771093766031"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 64,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47480000ca465d4b3d16~tplv-resize:100:0.png",
                "brand_name": "众泰",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093779500,
            "unique_id_str": "1625993771093779387"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 28,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000019687c071c90~tplv-resize:100:0.png",
                "brand_name": "中华",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093800400,
            "unique_id_str": "1625993771093800418"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 169,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd5000018e670e69289~tplv-resize:100:0.png",
                "brand_name": "中兴",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093815800,
            "unique_id_str": "1625993771093815806"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 162,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/b726f601368170c756625ee6e19b1ee3~tplv-resize:100:0.png",
                "brand_name": "中国重汽VGV",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093823000,
            "unique_id_str": "1625993771093822848"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 170,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/1dd50000193918328f5b~tplv-resize:100:0.png",
                "brand_name": "之诺",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093843500,
            "unique_id_str": "1625993771093843399"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 419,
                "image_url": "https://p1-dcd.byteimg.com/img/motor-img/394d38de068b815a14d07a78e5c23d0f~tplv-resize:100:0.png",
                "brand_name": "智己汽车",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093851600,
            "unique_id_str": "1625993771093851554"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 215,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/4747000081c3b553cea7~tplv-resize:100:0.png",
                "brand_name": "正道汽车",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093868800,
            "unique_id_str": "1625993771093868908"
        },
        {
            "type": 1001,
            "info": {
                "brand_id": 218,
                "image_url": "https://p1-dcd.byteimg.com/img/mosaic-legacy/47480000819c7496b2fc~tplv-resize:100:0.png",
                "brand_name": "Zenvo",
                "pinyin": "Z",
                "brand_activity_tag": null,
                "discount_tag": null
            },
            "unique_id": 1625993771093894000,
            "unique_id_str": "1625993771093893904"
        }
    ]
    return {
        title,
        brandList,
        related,
        themeVars,
        indexList,
        brandAll
    }
  }
})
</script>

<style scoped lang='less'>
.brand{
    margin: 0 20px;
}
.brand_img{
    width:32px;
    hight:32px;
}
.brand_name{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #1F2129;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}
.related{
    margin:0 0 0 16px;
    font-size: 14px;
    color: #1F2129;
    font-weight: 600;
}
.related_img{
    width:84px;
    hight:56px;
}
.related_name{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #1F2129;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}
.adv {
    margin: 10px 16px;
    height: 40px;
    background: #F7F8FC;
    border-radius: 2px;
    position: relative;
    .adv_tag{
        margin-left:12px;
        position: absolute;
        top: 50%;;
        transform: translateY(-50%);      
    }
  .adv_content{
        margin-left: 56px;
        width: 257px;
        height: 18px;
        position: absolute;
        top: 50%;;
        transform: translateY(-50%);
        font-size: 12px;
        color: #1F2129;
        line-height: 18px;
        font-weight: 400;
        overflow:hidden;  /*超过部分不显示*/
        text-overflow:ellipsis;  /*超过部分用点点表示*/
        white-space:nowrap;/*不换行*/
    }
    .adv_icon{
        margin-left: 309px;
        position: absolute;
        top: 50%;;
        transform: translateY(-50%);
    }
}
.index_title{
    height: 28px;
    background-image: linear-gradient(270deg, #FFFFFF 0%, #F7F8FC 100%);
}
.index_cell_url{
    width: 36px;
    height: 36px;
    vertical-align: middle;
}
.index_cell_name{
    margin-left: 16px;
    height: 32px;
    font-size: 16px;
    color: #1F2129;
    font-weight: 400;
    vertical-align: middle;
}
</style>


