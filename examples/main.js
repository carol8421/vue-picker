import Vue from 'vue'
import App from './App.vue'
import components from '../packages/index'
Vue.config.productionTip = false
// import picker from 'vue-zoe-picker'
Vue.use(components)
// Vue.use(picker)
new Vue({
  render: h => h(App),
}).$mount('#app')
