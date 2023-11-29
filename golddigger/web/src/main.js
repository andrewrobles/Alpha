import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PsalmOne from '../../text/PsalmOne.vue'

const routes = [
	{ path: '/1', component: PsalmOne, name: 'PsalmOne' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
