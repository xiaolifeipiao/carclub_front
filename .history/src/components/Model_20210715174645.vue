<!--
 * @Author: xiaolifeipiao
 * @Description: 模态框封装
 * @version: 0.0.0
 * @Date: 2021-07-14 21:54:10
 * @LastEditTime: 2021-07-15 17:46:44
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\Model.vue
-->
<template>
    <van-config-provider :theme-vars="themeVars">
        <van-action-sheet v-model:show="showOn" title="立即预约试驾">
            <div class="content">
            <div class="content_subhead" >提交信息后工作人员会在3个工作日内与您联系</div>
            <van-form class="from" @submit="onSubmit">
                <van-cell-group>
                    <van-field
                     class="field"
                    v-model="state.city"
                    readonly
                    clickable
                    name="city"
                    label="城市"
                    @click="showCity = true"
                    placeholder="点击选择城市"
                     right-icon="arrow"
                    />
                    <van-field
                    class="field"
                    v-model="state.username"
                    name="username"
                    label="姓名"
                    placeholder="请输入您的姓名"
                    />
                    <van-field 
                    class="field"
                    v-model="state.tel" 
                    type="tel" 
                    label="手机号"
                    name="phone"
                    placeholder="请输入您的手机号"
                    @blur="onPhone"  
                   />
                </van-cell-group>
                <div >
                    <van-button  block  native-type="submit" class="btn">
                    提交
                    </van-button>
                </div>
                </van-form>
            </div>
        </van-action-sheet>
  
        <van-popup 
        v-model:show="showCity" 
        position="bottom"  
        teleport="body" 
        :style="{ height: '100%' }" >
        <van-cell icon="arrow-left" @click="cancelCityShow">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <div class="city_title">选择城市</div>
            </template>
            </van-cell>
                <!-- 下划线 -->
            <van-divider :style="{ margin: '0'}" /> 
            <div class="city_nav_title">
                <span>当前定位城市</span>
            </div>
            <div class="city_auto_location">
                <button class="btn_city_content">重庆</button>
                <div class="replay_location">
                    <van-icon :class=" refreshLocation ===true?'city_location_icon':''" size="14px" name="replay" />
                    <button>重新定位 </button>
                </div>
            </div>
            <!-- 索引 -->
            <van-index-bar :index-list="indexList.initials" highlight-color="#89BCD7" @select="indexOnSelect">
                <van-index-anchor class="index_title"   index="选" v-show="false"></van-index-anchor>
                <div v-for="(item,key) in indexList"  :index="key">
                    <van-index-anchor :index="toLocaleUpperCase(item.initials)" />
                    <van-cell v-for="(item2,key) in item.city" :key="key" :title="item2.city_name" />
                </div>
            </van-index-bar>
        </van-popup>
    </van-config-provider>
</template>
<script lang="ts">
import { defineComponent ,onUnmounted,ref,reactive} from 'vue'
import { ActionSheet,Form, Field, CellGroup,Button ,Cell,Toast,Popup,Divider,IndexBar,IndexAnchor} from 'vant';
import mitt, { Emitter } from "mitt";
import {isPhoneNumber} from '@utils/tool'
import { useRouter } from 'vue-router';
import {cityModel} from '@/models/cityModel'
// 实例化mitt
export const mitter: Emitter = mitt();
export default defineComponent({
    naem:'Model',
    components:{
        [ActionSheet.name]:ActionSheet,
        [Form.name]:Form,
        [Field.name]:Field,
        [CellGroup.name]:CellGroup,
        [Button.name]:Button,
        [Cell.name]:Cell,
        [Toast.name]:Toast,
        [Popup.name]:Popup,
        [Divider.name]:Divider,
        [IndexBar.name]:IndexBar,
        [IndexAnchor.name]:IndexAnchor
    },
    setup() {
       const router = useRouter()
        // 刷新定位 
        const refreshLocation = ref(true);
          // 打开模态框
        const showOn = ref(false)
        // 打开城市模态框 
        const showCity = ref(false) 
        // 添加mitt事件监听器事件及回调函数
        mitter.on("on-show", (show)=>{
            console.log(show)
            showOn.value = show;
        });
        onUnmounted(() => {
            // 删除监听
            mitter.off("on-show", (show)=>{
                console.log(show)
             });
        });
        const state = reactive({
            username: '',
            tel: '',
            city:'重庆'
        });
        const onSubmit = (values) => {
            if(values.city===""){
                Toast.fail('请选择城市 ');
            }
            else if(values.username===""){
                Toast.fail('请输入姓名 ');
            }else if(values.phone===""){
                Toast.fail('请输入手机号码 ');
            }else if(!isPhoneNumber(values.phone)){
                  Toast.fail('手机格式错误');
            }else{
                  console.log('submit', values);
            }
          
        };
        const themeVars = {
             fieldLabelWidth:'60px',
             fieldLabelMarginRight:'20px'
        };
    
        // 手机格式验证
        const onPhone = (val)=>{
            if(!isPhoneNumber(val.target.value)){
                Toast.fail('手机格式错误');
            }
           
        }
        // 关闭城市模态框
        const cancelCityShow=()=>{
            showCity.value =false
        }
          // indexchange
        const  indexOnSelect = (index)=>{
            if(index ==='选')
                window.scrollTo({
                    top: 0
                })
        }
        // 索引数据
         const indexCityList:Array<cityModel> = [
    {
        "city": [
            {
                "city_name": "安阳",
                "initials": "A"
            },
            {
                "city_name": "鞍山",
                "initials": "A"
            },
            {
                "city_name": "安庆",
                "initials": "A"
            },
            {
                "city_name": "安康",
                "initials": "A"
            },
            {
                "city_name": "阿坝",
                "initials": "A"
            },
            {
                "city_name": "阿拉善",
                "initials": "A"
            },
            {
                "city_name": "阿克苏",
                "initials": "A"
            },
            {
                "city_name": "阿勒泰",
                "initials": "A"
            },
            {
                "city_name": "安顺",
                "initials": "A"
            },
            {
                "city_name": "澳门",
                "initials": "A"
            },
            {
                "city_name": "阿拉尔",
                "initials": "A"
            },
            {
                "city_name": "阿里",
                "initials": "A"
            }
        ],
        "initials": "a"
    },
    {
        "city": [
            {
                "city_name": "北京",
                "initials": "B"
            },
            {
                "city_name": "蚌埠",
                "initials": "B"
            },
            {
                "city_name": "保定",
                "initials": "B"
            },
            {
                "city_name": "本溪",
                "initials": "B"
            },
            {
                "city_name": "包头",
                "initials": "B"
            },
            {
                "city_name": "亳州",
                "initials": "B"
            },
            {
                "city_name": "滨州",
                "initials": "B"
            },
            {
                "city_name": "白城",
                "initials": "B"
            },
            {
                "city_name": "百色",
                "initials": "B"
            },
            {
                "city_name": "白山",
                "initials": "B"
            },
            {
                "city_name": "白银",
                "initials": "B"
            },
            {
                "city_name": "宝鸡",
                "initials": "B"
            },
            {
                "city_name": "保山",
                "initials": "B"
            },
            {
                "city_name": "巴彦淖尔",
                "initials": "B"
            },
            {
                "city_name": "巴中",
                "initials": "B"
            },
            {
                "city_name": "北海",
                "initials": "B"
            },
            {
                "city_name": "毕节",
                "initials": "B"
            },
            {
                "city_name": "博尔塔拉",
                "initials": "B"
            },
            {
                "city_name": "巴音郭楞",
                "initials": "B"
            }
        ],
        "initials": "b"
    },
    {
        "city": [
            {
                "city_name": "重庆",
                "initials": "C"
            },
            {
                "city_name": "成都",
                "initials": "C"
            },
            {
                "city_name": "长春",
                "initials": "C"
            },
            {
                "city_name": "长沙",
                "initials": "C"
            },
            {
                "city_name": "承德",
                "initials": "C"
            },
            {
                "city_name": "常州",
                "initials": "C"
            },
            {
                "city_name": "滁州",
                "initials": "C"
            },
            {
                "city_name": "沧州",
                "initials": "C"
            },
            {
                "city_name": "常德",
                "initials": "C"
            },
            {
                "city_name": "昌吉",
                "initials": "C"
            },
            {
                "city_name": "长治",
                "initials": "C"
            },
            {
                "city_name": "朝阳",
                "initials": "C"
            },
            {
                "city_name": "潮州",
                "initials": "C"
            },
            {
                "city_name": "郴州",
                "initials": "C"
            },
            {
                "city_name": "楚雄",
                "initials": "C"
            },
            {
                "city_name": "赤峰",
                "initials": "C"
            },
            {
                "city_name": "池州",
                "initials": "C"
            },
            {
                "city_name": "崇左",
                "initials": "C"
            },
            {
                "city_name": "昌都",
                "initials": "C"
            }
        ],
        "initials": "c"
    },
    {
        "city": [
            {
                "city_name": "大连",
                "initials": "D"
            },
            {
                "city_name": "东莞",
                "initials": "D"
            },
            {
                "city_name": "德州",
                "initials": "D"
            },
            {
                "city_name": "丹东",
                "initials": "D"
            },
            {
                "city_name": "大理",
                "initials": "D"
            },
            {
                "city_name": "大庆",
                "initials": "D"
            },
            {
                "city_name": "大同",
                "initials": "D"
            },
            {
                "city_name": "达州",
                "initials": "D"
            },
            {
                "city_name": "德宏",
                "initials": "D"
            },
            {
                "city_name": "德阳",
                "initials": "D"
            },
            {
                "city_name": "定西",
                "initials": "D"
            },
            {
                "city_name": "迪庆",
                "initials": "D"
            },
            {
                "city_name": "东营",
                "initials": "D"
            },
            {
                "city_name": "东方",
                "initials": "D"
            },
            {
                "city_name": "儋州",
                "initials": "D"
            },
            {
                "city_name": "定安",
                "initials": "D"
            },
            {
                "city_name": "大兴安岭",
                "initials": "D"
            }
        ],
        "initials": "d"
    },
    {
        "city": [
            {
                "city_name": "鄂州",
                "initials": "E"
            },
            {
                "city_name": "鄂尔多斯",
                "initials": "E"
            },
            {
                "city_name": "恩施",
                "initials": "E"
            }
        ],
        "initials": "e"
    },
    {
        "city": [
            {
                "city_name": "福州",
                "initials": "F"
            },
            {
                "city_name": "阜阳",
                "initials": "F"
            },
            {
                "city_name": "佛山",
                "initials": "F"
            },
            {
                "city_name": "抚州",
                "initials": "F"
            },
            {
                "city_name": "防城港",
                "initials": "F"
            },
            {
                "city_name": "抚顺",
                "initials": "F"
            },
            {
                "city_name": "阜新",
                "initials": "F"
            }
        ],
        "initials": "f"
    },
    {
        "city": [
            {
                "city_name": "广州",
                "initials": "G"
            },
            {
                "city_name": "贵阳",
                "initials": "G"
            },
            {
                "city_name": "桂林",
                "initials": "G"
            },
            {
                "city_name": "赣州",
                "initials": "G"
            },
            {
                "city_name": "广元",
                "initials": "G"
            },
            {
                "city_name": "甘孜",
                "initials": "G"
            },
            {
                "city_name": "广安",
                "initials": "G"
            },
            {
                "city_name": "贵港",
                "initials": "G"
            },
            {
                "city_name": "固原",
                "initials": "G"
            },
            {
                "city_name": "甘南",
                "initials": "G"
            },
            {
                "city_name": "果洛",
                "initials": "G"
            }
        ],
        "initials": "g"
    },
    {
        "city": [
            {
                "city_name": "杭州",
                "initials": "H"
            },
            {
                "city_name": "合肥",
                "initials": "H"
            },
            {
                "city_name": "哈尔滨",
                "initials": "H"
            },
            {
                "city_name": "海口",
                "initials": "H"
            },
            {
                "city_name": "衡阳",
                "initials": "H"
            },
            {
                "city_name": "邯郸",
                "initials": "H"
            },
            {
                "city_name": "呼和浩特",
                "initials": "H"
            },
            {
                "city_name": "黄冈",
                "initials": "H"
            },
            {
                "city_name": "黄石",
                "initials": "H"
            },
            {
                "city_name": "湖州",
                "initials": "H"
            },
            {
                "city_name": "衡水",
                "initials": "H"
            },
            {
                "city_name": "呼伦贝尔",
                "initials": "H"
            },
            {
                "city_name": "黄山",
                "initials": "H"
            },
            {
                "city_name": "海北",
                "initials": "H"
            },
            {
                "city_name": "海西",
                "initials": "H"
            },
            {
                "city_name": "哈密",
                "initials": "H"
            },
            {
                "city_name": "汉中",
                "initials": "H"
            },
            {
                "city_name": "鹤壁",
                "initials": "H"
            },
            {
                "city_name": "河池",
                "initials": "H"
            },
            {
                "city_name": "鹤岗",
                "initials": "H"
            },
            {
                "city_name": "黑河",
                "initials": "H"
            },
            {
                "city_name": "和田",
                "initials": "H"
            },
            {
                "city_name": "河源",
                "initials": "H"
            },
            {
                "city_name": "菏泽",
                "initials": "H"
            },
            {
                "city_name": "贺州",
                "initials": "H"
            },
            {
                "city_name": "红河",
                "initials": "H"
            },
            {
                "city_name": "淮安",
                "initials": "H"
            },
            {
                "city_name": "淮北",
                "initials": "H"
            },
            {
                "city_name": "怀化",
                "initials": "H"
            },
            {
                "city_name": "淮南",
                "initials": "H"
            },
            {
                "city_name": "惠州",
                "initials": "H"
            },
            {
                "city_name": "葫芦岛",
                "initials": "H"
            },
            {
                "city_name": "海东",
                "initials": "H"
            },
            {
                "city_name": "海南",
                "initials": "H"
            },
            {
                "city_name": "黄南",
                "initials": "H"
            }
        ],
        "initials": "h"
    },
    {
        "city": [
            {
                "city_name": "吉林",
                "initials": "J"
            },
            {
                "city_name": "济南",
                "initials": "J"
            },
            {
                "city_name": "九江",
                "initials": "J"
            },
            {
                "city_name": "揭阳",
                "initials": "J"
            },
            {
                "city_name": "酒泉",
                "initials": "J"
            },
            {
                "city_name": "嘉兴",
                "initials": "J"
            },
            {
                "city_name": "荆州",
                "initials": "J"
            },
            {
                "city_name": "锦州",
                "initials": "J"
            },
            {
                "city_name": "佳木斯",
                "initials": "J"
            },
            {
                "city_name": "吉安",
                "initials": "J"
            },
            {
                "city_name": "江门",
                "initials": "J"
            },
            {
                "city_name": "焦作",
                "initials": "J"
            },
            {
                "city_name": "嘉峪关",
                "initials": "J"
            },
            {
                "city_name": "金昌",
                "initials": "J"
            },
            {
                "city_name": "晋城",
                "initials": "J"
            },
            {
                "city_name": "景德镇",
                "initials": "J"
            },
            {
                "city_name": "荆门",
                "initials": "J"
            },
            {
                "city_name": "金华",
                "initials": "J"
            },
            {
                "city_name": "济宁",
                "initials": "J"
            },
            {
                "city_name": "晋中",
                "initials": "J"
            },
            {
                "city_name": "鸡西",
                "initials": "J"
            },
            {
                "city_name": "济源",
                "initials": "J"
            }
        ],
        "initials": "j"
    },
    {
        "city": [
            {
                "city_name": "昆明",
                "initials": "K"
            },
            {
                "city_name": "开封",
                "initials": "K"
            },
            {
                "city_name": "喀什",
                "initials": "K"
            },
            {
                "city_name": "克拉玛依",
                "initials": "K"
            },
            {
                "city_name": "克孜勒苏",
                "initials": "K"
            }
        ],
        "initials": "k"
    },
    {
        "city": [
            {
                "city_name": "兰州",
                "initials": "L"
            },
            {
                "city_name": "廊坊",
                "initials": "L"
            },
            {
                "city_name": "六安",
                "initials": "L"
            },
            {
                "city_name": "乐山",
                "initials": "L"
            },
            {
                "city_name": "来宾",
                "initials": "L"
            },
            {
                "city_name": "柳州",
                "initials": "L"
            },
            {
                "city_name": "聊城",
                "initials": "L"
            },
            {
                "city_name": "莱芜",
                "initials": "L"
            },
            {
                "city_name": "拉萨",
                "initials": "L"
            },
            {
                "city_name": "洛阳",
                "initials": "L"
            },
            {
                "city_name": "凉山",
                "initials": "L"
            },
            {
                "city_name": "连云港",
                "initials": "L"
            },
            {
                "city_name": "辽阳",
                "initials": "L"
            },
            {
                "city_name": "辽源",
                "initials": "L"
            },
            {
                "city_name": "丽江",
                "initials": "L"
            },
            {
                "city_name": "临沧",
                "initials": "L"
            },
            {
                "city_name": "临汾",
                "initials": "L"
            },
            {
                "city_name": "临夏",
                "initials": "L"
            },
            {
                "city_name": "临沂",
                "initials": "L"
            },
            {
                "city_name": "林芝",
                "initials": "L"
            },
            {
                "city_name": "丽水",
                "initials": "L"
            },
            {
                "city_name": "六盘水",
                "initials": "L"
            },
            {
                "city_name": "陇南",
                "initials": "L"
            },
            {
                "city_name": "龙岩",
                "initials": "L"
            },
            {
                "city_name": "娄底",
                "initials": "L"
            },
            {
                "city_name": "漯河",
                "initials": "L"
            },
            {
                "city_name": "泸州",
                "initials": "L"
            },
            {
                "city_name": "吕梁",
                "initials": "L"
            }
        ],
        "initials": "l"
    },
    {
        "city": [
            {
                "city_name": "绵阳",
                "initials": "M"
            },
            {
                "city_name": "马鞍山",
                "initials": "M"
            },
            {
                "city_name": "茂名",
                "initials": "M"
            },
            {
                "city_name": "眉山",
                "initials": "M"
            },
            {
                "city_name": "梅州",
                "initials": "M"
            },
            {
                "city_name": "牡丹江",
                "initials": "M"
            }
        ],
        "initials": "m"
    },
    {
        "city": [
            {
                "city_name": "南京",
                "initials": "N"
            },
            {
                "city_name": "南昌",
                "initials": "N"
            },
            {
                "city_name": "南宁",
                "initials": "N"
            },
            {
                "city_name": "宁波",
                "initials": "N"
            },
            {
                "city_name": "南通",
                "initials": "N"
            },
            {
                "city_name": "南充",
                "initials": "N"
            },
            {
                "city_name": "南平",
                "initials": "N"
            },
            {
                "city_name": "南阳",
                "initials": "N"
            },
            {
                "city_name": "内江",
                "initials": "N"
            },
            {
                "city_name": "宁德",
                "initials": "N"
            },
            {
                "city_name": "那曲",
                "initials": "N"
            },
            {
                "city_name": "怒江",
                "initials": "N"
            }
        ],
        "initials": "n"
    },
    {
        "city": [
            {
                "city_name": "莆田",
                "initials": "P"
            },
            {
                "city_name": "濮阳",
                "initials": "P"
            },
            {
                "city_name": "盘锦",
                "initials": "P"
            },
            {
                "city_name": "攀枝花",
                "initials": "P"
            },
            {
                "city_name": "平顶山",
                "initials": "P"
            },
            {
                "city_name": "平凉",
                "initials": "P"
            },
            {
                "city_name": "萍乡",
                "initials": "P"
            },
            {
                "city_name": "普洱",
                "initials": "P"
            }
        ],
        "initials": "p"
    },
    {
        "city": [
            {
                "city_name": "青岛",
                "initials": "Q"
            },
            {
                "city_name": "秦皇岛",
                "initials": "Q"
            },
            {
                "city_name": "泉州",
                "initials": "Q"
            },
            {
                "city_name": "衢州",
                "initials": "Q"
            },
            {
                "city_name": "曲靖",
                "initials": "Q"
            },
            {
                "city_name": "黔东南",
                "initials": "Q"
            },
            {
                "city_name": "黔南",
                "initials": "Q"
            },
            {
                "city_name": "黔西南",
                "initials": "Q"
            },
            {
                "city_name": "庆阳",
                "initials": "Q"
            },
            {
                "city_name": "清远",
                "initials": "Q"
            },
            {
                "city_name": "钦州",
                "initials": "Q"
            },
            {
                "city_name": "齐齐哈尔",
                "initials": "Q"
            },
            {
                "city_name": "七台河",
                "initials": "Q"
            },
            {
                "city_name": "琼海",
                "initials": "Q"
            },
            {
                "city_name": "潜江",
                "initials": "Q"
            }
        ],
        "initials": "q"
    },
    {
        "city": [
            {
                "city_name": "日照",
                "initials": "R"
            },
            {
                "city_name": "日喀则",
                "initials": "R"
            }
        ],
        "initials": "r"
    },
    {
        "city": [
            {
                "city_name": "上海",
                "initials": "S"
            },
            {
                "city_name": "深圳",
                "initials": "S"
            },
            {
                "city_name": "沈阳",
                "initials": "S"
            },
            {
                "city_name": "石家庄",
                "initials": "S"
            },
            {
                "city_name": "三门峡",
                "initials": "S"
            },
            {
                "city_name": "三明",
                "initials": "S"
            },
            {
                "city_name": "三亚",
                "initials": "S"
            },
            {
                "city_name": "商洛",
                "initials": "S"
            },
            {
                "city_name": "商丘",
                "initials": "S"
            },
            {
                "city_name": "苏州",
                "initials": "S"
            },
            {
                "city_name": "汕头",
                "initials": "S"
            },
            {
                "city_name": "汕尾",
                "initials": "S"
            },
            {
                "city_name": "十堰",
                "initials": "S"
            },
            {
                "city_name": "遂宁",
                "initials": "S"
            },
            {
                "city_name": "上饶",
                "initials": "S"
            },
            {
                "city_name": "绍兴",
                "initials": "S"
            },
            {
                "city_name": "邵阳",
                "initials": "S"
            },
            {
                "city_name": "双鸭山",
                "initials": "S"
            },
            {
                "city_name": "朔州",
                "initials": "S"
            },
            {
                "city_name": "四平",
                "initials": "S"
            },
            {
                "city_name": "松原",
                "initials": "S"
            },
            {
                "city_name": "绥化",
                "initials": "S"
            },
            {
                "city_name": "随州",
                "initials": "S"
            },
            {
                "city_name": "宿迁",
                "initials": "S"
            },
            {
                "city_name": "宿州",
                "initials": "S"
            },
            {
                "city_name": "石嘴山",
                "initials": "S"
            },
            {
                "city_name": "韶关",
                "initials": "S"
            },
            {
                "city_name": "神农架",
                "initials": "S"
            },
            {
                "city_name": "石河子",
                "initials": "S"
            },
            {
                "city_name": "山南",
                "initials": "S"
            }
        ],
        "initials": "s"
    },
    {
        "city": [
            {
                "city_name": "天津",
                "initials": "T"
            },
            {
                "city_name": "太原",
                "initials": "T"
            },
            {
                "city_name": "唐山",
                "initials": "T"
            },
            {
                "city_name": "台州",
                "initials": "T"
            },
            {
                "city_name": "塔城",
                "initials": "T"
            },
            {
                "city_name": "泰安",
                "initials": "T"
            },
            {
                "city_name": "铁岭",
                "initials": "T"
            },
            {
                "city_name": "泰州",
                "initials": "T"
            },
            {
                "city_name": "天水",
                "initials": "T"
            },
            {
                "city_name": "铜川",
                "initials": "T"
            },
            {
                "city_name": "通化",
                "initials": "T"
            },
            {
                "city_name": "通辽",
                "initials": "T"
            },
            {
                "city_name": "铜陵",
                "initials": "T"
            },
            {
                "city_name": "铜仁",
                "initials": "T"
            },
            {
                "city_name": "吐鲁番",
                "initials": "T"
            },
            {
                "city_name": "天门",
                "initials": "T"
            },
            {
                "city_name": "台湾",
                "initials": "T"
            },
            {
                "city_name": "图木舒克",
                "initials": "T"
            }
        ],
        "initials": "t"
    },
    {
        "city": [
            {
                "city_name": "武汉",
                "initials": "W"
            },
            {
                "city_name": "温州",
                "initials": "W"
            },
            {
                "city_name": "无锡",
                "initials": "W"
            },
            {
                "city_name": "乌鲁木齐",
                "initials": "W"
            },
            {
                "city_name": "芜湖",
                "initials": "W"
            },
            {
                "city_name": "潍坊",
                "initials": "W"
            },
            {
                "city_name": "威海",
                "initials": "W"
            },
            {
                "city_name": "渭南",
                "initials": "W"
            },
            {
                "city_name": "文山",
                "initials": "W"
            },
            {
                "city_name": "乌海",
                "initials": "W"
            },
            {
                "city_name": "乌兰察布",
                "initials": "W"
            },
            {
                "city_name": "武威",
                "initials": "W"
            },
            {
                "city_name": "吴忠",
                "initials": "W"
            },
            {
                "city_name": "梧州",
                "initials": "W"
            },
            {
                "city_name": "万宁",
                "initials": "W"
            },
            {
                "city_name": "五指山",
                "initials": "W"
            },
            {
                "city_name": "文昌",
                "initials": "W"
            },
            {
                "city_name": "五家渠",
                "initials": "W"
            }
        ],
        "initials": "w"
    },
    {
        "city": [
            {
                "city_name": "西安",
                "initials": "X"
            },
            {
                "city_name": "厦门",
                "initials": "X"
            },
            {
                "city_name": "湘潭",
                "initials": "X"
            },
            {
                "city_name": "徐州",
                "initials": "X"
            },
            {
                "city_name": "许昌",
                "initials": "X"
            },
            {
                "city_name": "信阳",
                "initials": "X"
            },
            {
                "city_name": "西宁",
                "initials": "X"
            },
            {
                "city_name": "咸阳",
                "initials": "X"
            },
            {
                "city_name": "宣城",
                "initials": "X"
            },
            {
                "city_name": "新乡",
                "initials": "X"
            },
            {
                "city_name": "湘西",
                "initials": "X"
            },
            {
                "city_name": "襄阳",
                "initials": "X"
            },
            {
                "city_name": "咸宁",
                "initials": "X"
            },
            {
                "city_name": "孝感",
                "initials": "X"
            },
            {
                "city_name": "锡林郭勒",
                "initials": "X"
            },
            {
                "city_name": "兴安",
                "initials": "X"
            },
            {
                "city_name": "邢台",
                "initials": "X"
            },
            {
                "city_name": "新余",
                "initials": "X"
            },
            {
                "city_name": "忻州",
                "initials": "X"
            },
            {
                "city_name": "西双版纳",
                "initials": "X"
            },
            {
                "city_name": "香港",
                "initials": "X"
            },
            {
                "city_name": "仙桃",
                "initials": "X"
            }
        ],
        "initials": "x"
    },
    {
        "city": [
            {
                "city_name": "扬州",
                "initials": "Y"
            },
            {
                "city_name": "银川",
                "initials": "Y"
            },
            {
                "city_name": "宜昌",
                "initials": "Y"
            },
            {
                "city_name": "岳阳",
                "initials": "Y"
            },
            {
                "city_name": "榆林",
                "initials": "Y"
            },
            {
                "city_name": "烟台",
                "initials": "Y"
            },
            {
                "city_name": "雅安",
                "initials": "Y"
            },
            {
                "city_name": "延安",
                "initials": "Y"
            },
            {
                "city_name": "延边",
                "initials": "Y"
            },
            {
                "city_name": "盐城",
                "initials": "Y"
            },
            {
                "city_name": "阳江",
                "initials": "Y"
            },
            {
                "city_name": "阳泉",
                "initials": "Y"
            },
            {
                "city_name": "宜宾",
                "initials": "Y"
            },
            {
                "city_name": "伊春",
                "initials": "Y"
            },
            {
                "city_name": "宜春",
                "initials": "Y"
            },
            {
                "city_name": "伊犁",
                "initials": "Y"
            },
            {
                "city_name": "营口",
                "initials": "Y"
            },
            {
                "city_name": "鹰潭",
                "initials": "Y"
            },
            {
                "city_name": "益阳",
                "initials": "Y"
            },
            {
                "city_name": "永州",
                "initials": "Y"
            },
            {
                "city_name": "玉林",
                "initials": "Y"
            },
            {
                "city_name": "运城",
                "initials": "Y"
            },
            {
                "city_name": "云浮",
                "initials": "Y"
            },
            {
                "city_name": "玉溪",
                "initials": "Y"
            },
            {
                "city_name": "玉树",
                "initials": "Y"
            }
        ],
        "initials": "y"
    },
    {
        "city": [
            {
                "city_name": "珠海",
                "initials": "Z"
            },
            {
                "city_name": "肇庆",
                "initials": "Z"
            },
            {
                "city_name": "张家口",
                "initials": "Z"
            },
            {
                "city_name": "中山",
                "initials": "Z"
            },
            {
                "city_name": "淄博",
                "initials": "Z"
            },
            {
                "city_name": "驻马店",
                "initials": "Z"
            },
            {
                "city_name": "枣庄",
                "initials": "Z"
            },
            {
                "city_name": "张家界",
                "initials": "Z"
            },
            {
                "city_name": "张掖",
                "initials": "Z"
            },
            {
                "city_name": "漳州",
                "initials": "Z"
            },
            {
                "city_name": "湛江",
                "initials": "Z"
            },
            {
                "city_name": "昭通",
                "initials": "Z"
            },
            {
                "city_name": "郑州",
                "initials": "Z"
            },
            {
                "city_name": "镇江",
                "initials": "Z"
            },
            {
                "city_name": "中卫",
                "initials": "Z"
            },
            {
                "city_name": "周口",
                "initials": "Z"
            },
            {
                "city_name": "舟山",
                "initials": "Z"
            },
            {
                "city_name": "株洲",
                "initials": "Z"
            },
            {
                "city_name": "自贡",
                "initials": "Z"
            },
            {
                "city_name": "资阳",
                "initials": "Z"
            },
            {
                "city_name": "遵义",
                "initials": "Z"
            }
        ],
        "initials": "z"
    }
        ]
        const indexList =ref([])
        indexCityList.map(item=>indexList.value.push(item.initials.toLocaleUpperCase()))
        console.log(indexList.value)
       
        //小写转化大写
        const toLocaleUpperCase =(val:string):string=>{
           return  val.toLocaleUpperCase()
        }
         return{
             showOn,
             state,
             onSubmit,
             themeVars,
             onPhone,
             showCity,
             cancelCityShow,
             refreshLocation,
             indexList,
             indexOnSelect,
             toLocaleUpperCase
         }
    },
})
</script>
<style lang="less" scoped>
.content {
    font-family: PingFangSC-Regular;
    height: 250px;
    padding:0 17px;
    .content_subhead{
        margin-top: -3px;
        z-index: 999;
        font-size: 12px;
        color: rgba(138, 125, 125,.8);
        text-align: center;
        line-height: 18px;
        font-weight: 400;
    }
    .from{
        margin-top: 12px;
    }
}
.btn{
    margin: 16px 0;
    color:#1F2129 ;
    background: #FFCD32;
    border-radius: 2px;
    font-weight: 550;
}
  .field{
    margin: 5px 0;
    font-size: 16px;
    color: #222222;
    letter-spacing: 0;
    font-weight: 400;
  }

//   城市
.city_title{
    font-size: 16px;
    color: #333333;
    text-align: center;
    font-weight: 400;
}
.city_nav_title{
    background-image: linear-gradient(90deg, #F7F8FC 0%, rgba(247,248,252,0.00) 100%);
    span{
        font-size: 14px;
        display: inline-block;
        display: flex;
        align-items: center;
        height: 28px;
        color: #1F2129;
        margin-left: 16px;
        line-height: 20px;
        font-weight: 550;
    }
}
.city_auto_location{
    height: 60px;
    display: flex;
    align-items: center;
    .btn_city_content{
        margin-left: 16px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 68px;
        border: 0;
    }
    .replay_location{
        margin-left: 16px;
        .city_location_icon{
            animation: rotation 1s infinite linear;
        }
        @keyframes rotation {
            from {transform: rotate(0deg);}
            to{transform: rotate(360deg);}
        }
        button{
            font-size: 12px;
            color: #1F2129;
            border: 0;
            line-height: 18px;
            font-weight: 400;
            background-color: #fff;
            padding: 0 4px;
        }
    }
}
</style>
