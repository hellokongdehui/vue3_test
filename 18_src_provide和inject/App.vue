<template>
  <div class="app">
    <h3>我是App组件(祖)，座驾：{{name}}--{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
  import Child from './components/Child'
  import {reactive, toRefs, provide} from 'vue'
  export default {
    name:'App',
    components:{Child},
    setup() {
      let car = reactive({name:'奔驰',price:'45W'})
      provide("car",car)  // 给自己的后代组件传递数据
      return {...toRefs(car)}
    }
  }
</script>

<style>
  .app{
    background-color: antiquewhite;
    padding: 10px;
  }
</style>