import Vue from 'vue'

// var globalVar = '111'

new Vue({
  el: '#root',
  // template: `
  //   <div :class="{ active: !isActive}">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  // template: `
  //   <div :class="[isActive ? 'active' : '']">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div
      :class="[{active: isActive}]"
      :style="[styles]"
    >
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>456</span>',
    styles: {
      color: 'red'
    }
  },
  methods: {
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
