import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
// import { loadAllPlugins } from './plugins'
// 引入模块后自动生效
import '@vant/touch-emulator';
import { ConfigProvider, List, Icon } from 'vant';
import AMapLoader from '@amap/amap-jsapi-loader';
import Keys from '@/constant/key'

// 加载高德api
AMapLoader.load({
    "key": Keys.gaoDeKey,                                          // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "plugins": ['AMap.CitySearch'],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
const app = createApp(App);
// 加载所有插件
// loadAllPlugins(app)
app.use(ConfigProvider);
app.use(List);
app.use(Icon);
app.use(store)
app.use(router)
app.mount('#app')

