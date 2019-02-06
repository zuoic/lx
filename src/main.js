//按需导入mint-ui中的组件
import Vue from 'vue'
import { Header,Swipe, SwipeItem } from 'mint-ui'

import App from './App'




//导入路由的包
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


//安装路由
Vue.use(VueRouter)
Vue.use(VueResource)



import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
 
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(Header)


//导入自己的router.js路由模块
import router from './router.js'


new Vue({
  el: '#app',
  components: { App},
  template: '<App/>',
  router
})
