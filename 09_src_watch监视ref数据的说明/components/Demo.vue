<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>当前的信息是：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
  import { ref,reactive, watch } from 'vue'
  export default {
    name: 'Demo',

    // vue2方式
    // #region
    /* watch:{
      sum(newValue,oldValue){
        console.log("sum的值变化了","新：",newValue,"旧：",oldValue)
      },
      sum:{
        immediate:true,
        deep:true,
        handler(newValue,oldValue){
          console.log("sum的值变化了","新：",newValue,"旧：",oldValue)
        }
      }
    } */
    //#endregion

    setup(){
      // 数据
      let sum = ref(0)
      let msg = ref("您好")
      let person = reactive({
        name:'张三',
        age:20,
        job:{
          j1:{
            salary:20
          }
        }
      })

      watch(sum,(newValue,oldValue) => {
        console.log("sum的值变化了",newValue,oldValue)
      })

      watch(person,(newValue,oldValue) => {
        console.log("person的值变化了",newValue,oldValue)
      },{deep:true})

      // 返回一个对象
      return {
        sum,
        msg,
        person
      }
    }
  }
</script>
