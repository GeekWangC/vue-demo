<script>
export default {
	name: 'VueQuestion1',
}
</script>

<template>
<div class="question-contain">
	<h2>一、历史，好奇看看</h2>
	<section>
		<p>Web是World Wide Web的简称，中文译为万维网。</p>
		<ul>
			<li>
				石器时代就是我们的静态网页，比如你现在看的这个。显著的特点就是没有数据库
			</li>
			<li>
				文明时代，就是ASP，JSP的时代。特点就是不太灵活，JSP是在服务器端执行的，返回客户端的是一个HTML文本。
			</li>
			<li>
				工业革命时代，移动设备普及，JQuery出现，以及SPA（single page application 单页面应用）雏形，Backbone EmberJS AngularJS等一批前端框架随之出现，但当时SPA不是很行，例如SEO问题，SPA过多的页面、复杂场景下View的绑定等。
			</li>
			<li>
				百花齐放时代，就是现在的时代，前端俗称卷卷的时代。
			</li>
		</ul>
	</section>
  <h2>二、vue是什么</h2>
  <section>Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。2016年一项针对JavaScript的调查表明，Vue有着89%的开发者满意度。在GitHub上，该项目平均每天能收获95颗星，为Github有史以来星标数第3多的项目同时也是一款流行的JavaScript前端框架，旨在更好地组织与简化Web开发。Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互PS: Vue作者尤雨溪是在为AngularJS工作之后开发出了这一框架。他声称自己的思路是提取Angular中为自己所喜欢的部分，构建出一款相当轻量的框架最早发布于2014年2月</section>
  <h2>三、vue核心</h2>
	<section>
		<p>数据驱动（MVVM）</p>
		<ul>
			<li>
				Model: 模型层，负责处理业务逻辑以及和服务器端进行交互
			</li>
			<li>
				View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面
			</li>
			<li>
				ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁
			</li>
		</ul>
		<p>组件化</p>
		<p>
			<ul>
				<li>降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现</li>
				<li>调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单</li>
				<li>提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级</li>
			</ul>
		</p>
		<p>指令系统</p>
		<p>指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</p>
		<p>没有指令之前我们是怎么做的？是不是先要获取到DOM然后在....干点啥</p>
	</section>
	<h2>四、Vue跟传统开发的区别</h2>
	<p>Vue所有的界面事件，都是只去操作数据的，Jquery操作DOM</p>
	<p>Vue所有界面的变动，都是根据数据自动绑定出来的，Jquery操作DOM</p>
	<h2>五、Vue和React对比</h2>
	<p>相同点</p>
	<ul>
		<li>组件化思想</li>
		<li>支持服务器渲染</li>
		<li>虚拟dom,Virtual DOM</li>
		<li>数据驱动视图</li>
		<li>weex和 react native支持native方案</li>
		<li>vue-cli和create reate App 自己的构建工具</li>
	</ul>
	<p>区别</p>
	<ul>
		<li>数据流向的不同。react从诞生开始就推崇单向数据流，而Vue是双向数据流</li>
		<li>数据变化的实现原理不同。react使用的是不可变数据，而Vue使用的是可变的数据</li>
		<li>组件化通信的不同。react中我们通过使用回调函数来进行通信的，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数</li>
		<li>diff算法不同。react主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。Vue 使用双向指针，边对比，边更新DOM</li>
	</ul>

	<h2>参考文献</h2>
	<dir></dir>
	<a href="https://vue3js.cn/interview/vue/vue.html#%E4%B8%80%E3%80%81%E4%BB%8E%E5%8E%86%E5%8F%B2%E8%AF%B4%E8%B5%B7">https://vue3js.cn/interview/vue/vue.html</a>
</div>
</template>

<style>
.question-contain {
	display: flex;
	align-content: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	text-align: left;
	padding: 20px 16px;
}
</style>