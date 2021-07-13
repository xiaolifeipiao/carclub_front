import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
// import { loadAllPlugins } from './plugins'
// 引入模块后自动生效
import '@vant/touch-emulator';
import { ConfigProvider,List,Icon} from 'vant';
import  ''
const app = createApp(App);
// 加载所有插件
// loadAllPlugins(app)
app.use(ConfigProvider);
app.use(List);
app.use(Icon);
app.use(store)
app.use(router)
app.mount('#app')

