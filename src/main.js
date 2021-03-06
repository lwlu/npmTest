// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import GlobalComponets from '@/components/table/index.js'
// import GlobalComponets from '../dist/static/js/app.js'

Vue.config.productionTip = false

Vue.use(iview)
Vue.use(GlobalComponets)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
