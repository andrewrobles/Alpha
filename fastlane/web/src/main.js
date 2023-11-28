import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import FirstVerse from '../../text/FirstVerse.vue'
import SecondVerse from '../../text/SecondVerse.vue'
import ThirdVerse from '../../text/ThirdVerse.vue'
import Hook from '../../text/Hook.vue'
import FourthVerse from '../../text/FourthVerse.vue'
import FifthVerse from '../../text/FifthVerse.vue'
import SixthVerse from '../../text/SixthVerse.vue'

const routes = [
	{ path: '/1', component: FirstVerse, name: 'FirstVerse' },
	{ path: '/2', component: SecondVerse, name: 'SecondVerse' },
	{ path: '/3', component: Hook, name: 'FirstHook' },
	{ path: '/4', component: ThirdVerse, name: 'ThirdVerse' },
	{ path: '/5', component: FourthVerse, name: 'FourthVerse' },
	{ path: '/6', component: FifthVerse, name: 'FifthVerse' },
	{ path: '/7', component: SixthVerse, name: 'SixthVerse' },
	{ path: '/8', component: Hook, name: 'SecondHook' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
