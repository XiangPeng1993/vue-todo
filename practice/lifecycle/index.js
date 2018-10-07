import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this, 'beforeMount')
  },
  mounted () {
    console.log(this, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () { // 在组件章节讲解
    console.log(this, 'activated')
  },
  deactivated () { // 在组件章节讲解
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    // throw new TypeError('render error')
    console.log('render function invoked')
    return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured (h, err) {
    // 会向上冒泡，并且正式环境可以使用
  }
})

app.$mount('#root')
// setInterval(() => {
//   app.text += 1
// }, 1000)
// setInterval(() => {
//   app.$destroy()
// }, 1000)
