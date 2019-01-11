//按需导入mint-ui中的组件
import Vue from 'vue'
import { Header } from 'mint-ui';

import App from './App'


import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)





Vue.use(Header)


new Vue({
  el: '#app',
  components: { App},
  template: '<App/>'
})
