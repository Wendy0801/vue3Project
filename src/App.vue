<template>
  <div>
    {{count}}
    <button @click="myFun">按钮</button>
    <hr>
    <div>
      <form>
        <input v-model="state2.stud2.id">
        <input v-model="state2.stud2.name">
        <button @click.prevent="addStud">提交</button>
      </form>
      <ul>
        <li v-for="(item, index) in state.stud" :key="item.id" @click="remStu(index)">{{item.name}}</li>
      </ul>
    </div>
    <hr>
    {{status.name}}
  </div>
</template>

<script>

import {ref,reactive} from "vue"
import addStudent from "./addStudent"
export default {
  name: 'App',
  // 组合API: 数组和方法(业务逻辑)放一块,方便阅读和管理,解决vue 2.0 中数据和方法比较分散的问题)
  // setup函数是组合API的入口函数
  setup(){
    //定义一个名称为count 的变量，初始值为0,直接赋值是无法监听到变量的变化,必须通过ref()
    //这个变量发生改变后，vue 会自动更新UI
    let count = ref(0);

    //在组合API中,如果想定义方法,不用到methods中,直接定义即可
    function myFun(){
      count.value += 1;
      status.name = '2'
    }

    let {state, remStu} = userRemoveStudent();
    let {state2, addStud} = addStudent(state)



    let obj = {name: 'a'}
    let status = new Proxy(obj, {
      get(obj, key){
        return obj[key]},
      set(obj, key, value){
        obj[key] = value;
        return true;
      }
    })

    //注意点: 在组合API中定义的变量/方法,想要在外界被使用,必须通过return {count, myFun} 暴露出去
    return {count, myFun, state, remStu, state2, addStud,status}
  }
}

function userRemoveStudent(){
  //ref的注意点: 官网建议ref只监听简单类型的变化,不建议监听复杂类型的变化(对象/数组)
  //通过reactive() 可以监听复杂类型的变化
  let state = reactive({
    stud:[{id: 1,name: "sz"}, {id: 2,name: "zh"}]
  });

  function remStu(index){
    state.stud = state.stud.filter((stu, idx) => idx !== index);
  }

  return {state, remStu}
}
</script>
