# vue-picker
## 通用的移动端picker组件 支持单列 多列 多列级联选择 基于better-scroll
### 使用
``` sh
  npm install vue-zoe-picker and yarn add vue-zoe-picker
```
``` js
  import picker from 'vue-zoe-picker'
  Vue.use(picker)
  <Picker ...options></Picker>
  // or
  import {picker} from 'vue-zoe-picker'
  Vue.component('customName', picker)
```
### props
- type: normal | multiple | cascade 代表  单列 多列 级联
- options: 根据type不同结构不同  
  normal 一维数组加对象  
  multiple 二位数组 元素为对象  
  cascade 级联树形数组 子元素为children
- title picker 标题
- label 选取options的对象属性为显示文字
- render 渲染函数 自定义渲染选项字段
- show 控制是否显示 需要.sync修饰符
- value 选择器默认值 normal 下为数字 其他为数组
### events
- change 当选择器改变时立即出发 参数为选择结果索引
- input 当点击确定是触发 参数为选择结果索引
### 地区级联选择
``` html
  <Picker 
    :options="options" 
    type="cascade" 
    :show.sync="show"
    label="name"
    title="请选择地址"
    v-model="selected">
    </Picker>
    <div @click="show = true">显示</div>
```
``` js
export default {
  data() {
    return {
      show: false,
      selected: [0, 0, 0],
      options: [
        {
          name: '北京',
          children: [
            {
              name: '北京市',
              children: [
                {
                  name: '朝阳区
                },
                {
                  name: '东城区
                }
              ]
            }
          ]
        },
        {
          name: '上海'
          ...
        }
      ]
    }
  }
}
```