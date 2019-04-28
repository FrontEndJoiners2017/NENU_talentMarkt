// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'

// ajax数据交互
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
// axios.defaults.timeout = 500
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
//  axios.defaults.baseURL = 'http://localhost:8080'

/* 未登录，将强行返回Login页面 */
// router.beforeEach((to, from, next) => {
//   //NProgress.start();
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })
/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
