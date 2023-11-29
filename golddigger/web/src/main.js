import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import JamieFoxx1 from '../../text/JamieFoxx1.vue'

const routes = [
	{ path: '/1', component: JamieFoxx1, name: 'JamieFoxx1' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
