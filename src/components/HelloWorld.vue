<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ `Counter:${ counter }`}}</div>
    <span :title="msg">鼠标悬停几秒钟查看此处动态绑定的提示信息</span>
    <p>{{ message }}</p>
    <button @click="reverseMessage">反转 Message</button>
    <input v-model='message' />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      counter: 0,
      message: 'Hello Geekwangc'
    }
  },
  mounted(){
    setInterval(()=>{
      this.counter++
    },1000)
  },
  methods:{
    reverseMessage(){
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
