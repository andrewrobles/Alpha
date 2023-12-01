import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Psalms from '../../bible/Psalms.vue'
import PsalmOne from '../../bible/PsalmOne.vue'
import PsalmTwo from '../../bible/PsalmTwo.vue'
import PsalmThree from '../../bible/PsalmThree.vue'
import PsalmFour from '../../bible/PsalmFour.vue'
import PsalmFive from '../../bible/PsalmFive.vue'
import PsalmSix from '../../bible/PsalmSix.vue'
import PsalmSeven from '../../bible/PsalmSeven.vue'
import PsalmEight from '../../bible/PsalmEight.vue'
import PsalmNine from '../../bible/PsalmNine.vue'
import PsalmTen from '../../bible/PsalmTen.vue'

const routes = [
	{ path: '/psalms', component: Psalms, name: 'Psalms' },
	{ path: '/psalms/1', component: PsalmOne, name: 'PsalmOne' },
	{ path: '/psalms/2', component: PsalmTwo, name: 'PsalmTwo' },
	{ path: '/psalms/3', component: PsalmThree, name: 'PsalmThree' },
	{ path: '/psalms/4', component: PsalmFour, name: 'PsalmFour' },
	{ path: '/psalms/5', component: PsalmFive, name: 'PsalmFive' },
	{ path: '/psalms/6', component: PsalmSix, name: 'PsalmSix' },
	{ path: '/psalms/7', component: PsalmSeven, name: 'PsalmSeven' },
	{ path: '/psalms/8', component: PsalmEight, name: 'PsalmEight' },
	{ path: '/psalms/9', component: PsalmNine, name: 'PsalmNine' },
	{ path: '/psalms/10', component: PsalmTen, name: 'PsalmTen' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
