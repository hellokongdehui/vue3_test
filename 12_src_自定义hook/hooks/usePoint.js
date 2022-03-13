import {reactive, onMounted, onBeforeUnmount} from 'vue'
export default function (){
  // 实现鼠标“打点”的相关数据
  let point = reactive({
    x:0,
    y:0
  })
  
  // 实现鼠标“打点”的相关方法
  function savaPoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX,event.pageY)
  }
  
  // 实现鼠标“打点”的相关生命周期钩子
  onMounted(()=>{
    window.addEventListener("click",savaPoint)
  })
  
  onBeforeUnmount(()=>{
    window.removeEventListener("click",savaPoint)
  })

  return point
}
