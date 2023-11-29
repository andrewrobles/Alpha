import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PsalmOne from '../../text/PsalmOne.vue'
import PsalmTwo from '../../text/PsalmTwo.vue'
import PsalmThree from '../../text/PsalmThree.vue'
import PsalmFour from '../../text/PsalmFour.vue'
import PsalmFive from '../../text/PsalmFive.vue'
import PsalmSix from '../../text/PsalmSix.vue'
import PsalmSeven from '../../text/PsalmSeven.vue'
import PsalmEight from '../../text/PsalmEight.vue'
import PsalmNine from '../../text/PsalmNine.vue'
import PsalmTen from '../../text/PsalmTen.vue'

const routes = [
	{ path: '/1', component: PsalmOne, name: 'PsalmOne' },
	{ path: '/2', component: PsalmTwo, name: 'PsalmTwo' },
	{ path: '/3', component: PsalmThree, name: 'PsalmThree' },
	{ path: '/4', component: PsalmFour, name: 'PsalmFour' },
	{ path: '/5', component: PsalmFive, name: 'PsalmFive' },
	{ path: '/6', component: PsalmSix, name: 'PsalmSix' },
	{ path: '/7', component: PsalmSeven, name: 'PsalmSeven' },
	{ path: '/8', component: PsalmEight, name: 'PsalmEight' },
	{ path: '/9', component: PsalmNine, name: 'PsalmNine' },
	{ path: '/10', component: PsalmTen, name: 'PsalmTen' }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
