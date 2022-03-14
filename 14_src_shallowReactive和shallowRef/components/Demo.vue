<template>
  <h4>当前的x.y值是：{{x.y}}</h4>
  <button @click="x.y++">点击x.y+1</button>
  <button @click="x={y:888}">点击替换x.y</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
  import {reactive, toRef,toRefs,ref,shallowReactive,shallowRef} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      // 数据
      // let person = shallowReactive({  // 只考虑第一层数据的响应式
      let person = reactive({
        name:'张三',
        age:20,
        job:{
          j1:{
            salary:20
          }
        }
      })
      
      let x = shallowRef({
        y:1
      })

      // 返回一个对象
      return {
        person,
        ...toRefs(person),
        x
      }
    }
  }
</script>
