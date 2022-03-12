<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h3>工作岗位：{{person.job.type}}</h3>
  <h3>薪资：{{person.job.salary}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <h3>测试的数据c:{{person.job.a.b.c}}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { reactive } from 'vue'
  export default {
    name: 'App',
    setup(){
      // 数据
      let person = reactive({
        name:'张三',
        age:18,
        job:{
        type:"前端工程师",
        salary:"32K",
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })
      
      // 方法
      function changeInfo(){
        person.name = "李四"
        person.age= 20
        person.job.type = "全栈工程师",
        person.job.salary = "80K",
        person.job.a.b.c = 999
        person.hobby[0] = '学习'

      }

      return {
        person,
        changeInfo
      }
    }
  }
</script>
