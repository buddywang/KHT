// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import api from './request/api/index' // 导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
