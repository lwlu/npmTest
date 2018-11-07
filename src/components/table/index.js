import mytable from './table.vue'

const myTable = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('myTable', mytable)
  }
}

export default myTable
