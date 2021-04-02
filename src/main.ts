import { createApp } from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// 设置ElementPlus语言
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// import './utils/jumpLink'
const app: any = createApp(App)
// 全局分页组件
import pagination from './components/pagination.vue'
app.component('pagination', pagination)
// 全局变量
import globalData from './utils/globalData'
app.config.globalProperties.$globalData = globalData

app.use(store)
app.use(router)
app.use(ElementPlus,{
    // size: 'mini',
    size: '',
    zIndex: 2000,
    locale 
})

app.provide('app', app.config.globalProperties)
app.mount('#app')

/**
 * 全局变量的写法：
 * import globalData from './utils/globalData'
 * 
 * 该方法实用于vue2.0，在组件当中用this.$globalData获取
 * app.config.globalProperties.$globalData = globalData
 * 
 * 该方法实用于vue3.0，在组件当中用inject('$globalData')获取
 * app.provide('$globalData', globalData)
 * 或者使用app.config.globalProperties获取所有，
 * app.provide('app', app.config.globalProperties)
 */