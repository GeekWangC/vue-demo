<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ `Counter:${ counter }`}}</div>
    <span :title="msg">鼠标悬停几秒钟查看此处动态绑定的提示信息</span>
    <p>{{ message }}</p>
    <button @click="reverseMessage">反转 Message</button>
    <input v-model='message' />
    <div>
      <span>{{ author.name }}</span>
      <span>{{ publishedBooksMessage }}</span>
    </div>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      counter: 0,
      message: 'Hello Geekwangc',
      question:'',
      answer:'你说我听',
      author:{
        name:'geekwangc',
        books:[
          '前端程序员的痛苦',
          '看什么看，没见过',
          '哎，还真没见过'
        ]
      }
    }
  },
  computed:{
    publishedBooksMessage(){
      return this.author.books.length > 0 ? 'yes' :'no'
    }
  },
  watch:{
    question(newQ,oldQ){
      if(newQ !== oldQ){
        this.getAnswer();
      }
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
    },
    getAnswer(){

      this.answer = '让我想想';
      axios.get('https://yesno.wtf/api')
        .then(res=>{
          this.answer = res.data.answer
        })
        .catch(error=>{
          this.answer = `什么鬼问题，查不出来${error}`
        })
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
