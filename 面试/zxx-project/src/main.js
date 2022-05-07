import Vue from 'vue'
import App from './App.vue'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import Mock from './libs/mock'
require('./libs/mock')
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081/api' // 设置默认请求的url
Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
