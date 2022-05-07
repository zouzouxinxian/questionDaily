<template>
  <div class="box-center">
      <div v-for='(item,index) in list' :key="index">
            <div>
                <span>标签键：</span>
                <input v-modal='item.key' @on-change='debounce(checkValue, 1000)'></input>
            </div>
            <div>
              <span>值：</span>
              <input v-modal='item.value' @on-change='checkValue(item.key)'></input>
            </div>
          <div @click="deleteData(item, index)">删除</div>
      </div>
      <div>{{error}}</div>
      <div @click="addData">添加</div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:{
      list:{

      },
      error: String
  },
  watch: {
  },
  computed: {
  },
  components: {
  },
  methods: {
      debounce(fn, delay){
          let timer=null
          return function(){
              if(timer){
                  clearTimeout(timer)
              }
              timer=setTimeout(()=>{
                  fn.apply(this.arguments)
                  timer=null
              },delay)
          }
      },
      checkValue(value){

      },
      addData(){
          this.list.push({
              key:'',
              val:''
          })
      },
      deleteData(item, index){
          this.list.splice(index, 1)
      }
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>

</style>
