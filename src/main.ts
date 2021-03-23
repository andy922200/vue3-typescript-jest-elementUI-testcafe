import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from './i18n/entry'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueI18n)
app.use(store).use(router).mount('#app')
