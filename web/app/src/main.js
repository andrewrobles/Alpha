import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import PsalmsIndex from '../../psalms/Index.vue'
import PsalmOne from '../../psalms/PsalmOne.vue'
import PsalmTwo from '../../psalms/PsalmTwo.vue'
import PsalmThree from '../../psalms/PsalmThree.vue'
import PsalmFour from '../../psalms/PsalmFour.vue'
import PsalmFive from '../../psalms/PsalmFive.vue'
import PsalmSix from '../../psalms/PsalmSix.vue'
import PsalmSeven from '../../psalms/PsalmSeven.vue'
import PsalmEight from '../../psalms/PsalmEight.vue'
import PsalmNine from '../../psalms/PsalmNine.vue'
import PsalmTen from '../../psalms/PsalmTen.vue'

const routes = [
	{ path: '/psalms', component: PsalmsIndex, name: 'PsalmsIndex' },
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
