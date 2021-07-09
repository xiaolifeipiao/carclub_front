import { createApp } from 'vue'
import App from './App.vue'
import vant from 'vant'

const app = createApp(App);
app.use(vant)
app.mount('#app')

