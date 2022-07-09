import { createRouter,createWebHashHistory } from 'vue-router'

// 1、定义路由组件
import HelloWorld from './components/HelloWorld.vue'
import VueQuestion from './components/VueQuestion.vue'
import VueQuestion1 from './pages/vue/Q1.vue'

// 2、定义路由
const routes = [
	{ path: '/', component: HelloWorld },
	{ 
		path: '/vueq', component: VueQuestion , name: 'vue面经',
		children:[
			{
				path: 'Q1',
				component: VueQuestion1
			}
		]
	},
]

// 3、创建路由实例
export const router = createRouter({

	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})

