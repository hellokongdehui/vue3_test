<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog/>
  </div>
</template>

<script>
  import Dialog from './Dialog.vue'
  export default {
    name:'Son',
    components:{Dialog},
    setup(){
      
    }
  }
</script>

<style>
  .son{
    background-color: hotpink;
    padding: 10px;
  }
</style>