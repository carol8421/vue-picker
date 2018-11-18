<template>
  <div id="app">
    <zoe-picker 
      :options="options" 
      type="cascade" 
      :show.sync="show"
      label="name"
      title="请选择"
      v-model="selected">
      </zoe-picker>
      <div @click="show = true">显示</div>
  </div>
</template>

<script>
import cities from './cities.json'
export default {
  name: 'app',
  data() {
    return {
      options: [],
      current: 0,
      show: false,
      optionsSingle: [
        {
          name: '苹果'
        },
        {
          name: '华为'
        },
        {
          name: 'oppo'
        }
      ],
      selected: [2, 0, 2],
      optionsMultiple: [
        [
          {
            label: '诺基亚'
          },
          {
            label: '苹果'
          },
          {
            label: '安卓'
          }
        ],
        [
          {
            label: '25岁'
          },
          {
            label: '26岁'
          },
          {
            label: '27岁'
          }
        ],
        [
          {
            label: '跑步'
          },
          {
            label: '游泳'
          },
          {
            label: '健身'
          }
        ]
      ]
    }
  },
  methods: {
    change(v) {
      console.log(v)
    },
    render(h, text) {
      return <div style="color:gray">😀{text}</div>
    }
  },
  mounted() {
    const tree = cities[0]
    const keys = Object.keys(cities)
    tree.forEach(item => {
      keys.some(k => {
        if (k === item.code) {
          item.children = cities[k]
          item.children.forEach(c => {
            keys.some(k => {
              if (k === c.code) {
                c.children = cities[k]
                return true
              }
            })
          })
          return true
        }
      })
    })
    this.options = tree      
  }
}
</script>

<style lang="scss">

</style>
