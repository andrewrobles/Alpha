import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import JamieFoxx1 from '../../text/JamieFoxx1.vue'
import KanyeWestJamieFoxx from '../../text/KanyeWestJamieFoxx.vue'
import KanyeWest1 from '../../text/KanyeWest1.vue'
import KanyeWest2 from '../../text/KanyeWest2.vue'
import KanyeWest3 from '../../text/KanyeWest3.vue'
import KanyeWest4 from '../../text/KanyeWest4.vue'

const routes = [
	{ path: '/1', component: JamieFoxx1, name: 'JamieFoxx1' },
	{ path: '/2', component: KanyeWestJamieFoxx, name: 'KanyeWestJamieFoxx1' },
	{ path: '/3', component: KanyeWest1, name: 'KanyeWest1' },
	{ path: '/4', component: KanyeWestJamieFoxx, name: 'KanyeWestJamieFoxx2' },
	{ path: '/5', component: KanyeWest2, name: 'KanyeWest2' },
	{ path: '/6', component: KanyeWestJamieFoxx, name: 'KanyeWestJamieFoxx' },
	{ path: '/7', component: KanyeWest3, name: 'KanyeWest3' },
	{ path: '/8', component: KanyeWestJamieFoxx, name: 'KanyeWestJamieFoxx3' },
	{ path: '/9', component: KanyeWest4, name: 'KanyeWest4' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
