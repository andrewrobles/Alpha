import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import PsalmsIndex from '../../components/Index.vue'
import Psalm from '../../components/Psalm.vue'

const routes = [
	{ path: '/psalms', component: PsalmsIndex, name: 'PsalmsIndex' },
	{ path: '/psalms/1', component: Psalm, name: 'Psalm1', props: { index: 1 }},
	{ path: '/psalms/2', component: Psalm, name: 'Psalm2', props: { index: 2 }},
	{ path: '/psalms/3', component: Psalm, name: 'Psalm3', props: { index: 3 }},
	{ path: '/psalms/4', component: Psalm, name: 'Psalm4', props: { index: 4 }},
	{ path: '/psalms/5', component: Psalm, name: 'Psalm5', props: { index: 5 }},
	{ path: '/psalms/6', component: Psalm, name: 'Psalm6', props: { index: 6 }},
	{ path: '/psalms/7', component: Psalm, name: 'Psalm7', props: { index: 7 }},
	{ path: '/psalms/8', component: Psalm, name: 'Psalm8', props: { index: 8 }},
	{ path: '/psalms/9', component: Psalm, name: 'Psalm9', props: { index: 9 }},
	{ path: '/psalms/10', component: Psalm, name: 'Psalm10', props: { index: 10 }},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
