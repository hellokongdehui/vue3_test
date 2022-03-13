<template>
  <Demo @hello="showHelloMsg" msg="您好" school="HITSZ">
    <template v-slot:qwe>
      <span>上端国际</span>
    </template>
    <template v-slot:asd>
      <span>上端国际</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup() {
      function showHelloMsg(value){
        alert(`您好啊！您触发了hello事件，我收到的参数是：${value}`)
      }

      return {
        showHelloMsg
      }
    }
    
  }
</script>
