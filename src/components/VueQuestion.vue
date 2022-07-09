<script>
	import { useRouter } from 'vue-router'


export default {
	setup(){
		const router = useRouter();
		const toQuestion = ((path)=>{
			router.push({
				path:`vueq/${path}`
			})
		})
		return {
			toQuestion
		}
	},
	data() {
		return {
			questionList: [
				{
					question:'vue是什么',
					path:'Q1'
				}
			]
		}
	}
}
</script>

<template>
	<ul class="question-list">
		<li 
			v-for="item in questionList" 
			:key="item.path"
			@click="toQuestion(item.path)"
		>
			{{ item.question }}
		</li>
	</ul>
	<router-view></router-view>
</template>

<style>
.question-list {
	font-weight: bold;
	display: flex;
	align-content: center;
	
}
</style>