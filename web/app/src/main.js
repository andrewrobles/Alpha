import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import PsalmsIndex from '../../vue/Index.vue'
import Psalm1 from '../../psalms/1.vue'
import Psalm2 from '../../psalms/2.vue'
import Psalm3 from '../../psalms/3.vue'
import Psalm4 from '../../psalms/4.vue'
import Psalm5 from '../../psalms/5.vue'
import Psalm6 from '../../psalms/6.vue'
import Psalm7 from '../../psalms/7.vue'
import Psalm8 from '../../psalms/8.vue'
import Psalm9 from '../../psalms/9.vue'
import Psalm10 from '../../psalms/10.vue'

const routes = [
	{ path: '/psalms', component: PsalmsIndex, name: 'PsalmsIndex' },
	{ path: '/psalms/1', component: Psalm1, name: 'Psalm1' },
	{ path: '/psalms/2', component: Psalm2, name: 'Psalm2' },
	{ path: '/psalms/3', component: Psalm3, name: 'Psalm3' },
	{ path: '/psalms/4', component: Psalm4, name: 'Psalm4' },
	{ path: '/psalms/5', component: Psalm5, name: 'Psalm5' },
	{ path: '/psalms/6', component: Psalm6, name: 'Psalm6' },
	{ path: '/psalms/7', component: Psalm7, name: 'Psalm7' },
	{ path: '/psalms/8', component: Psalm8, name: 'Psalm8' },
	{ path: '/psalms/9', component: Psalm9, name: 'Psalm9' },
	{ path: '/psalms/10', component: Psalm10, name: 'Psalm10' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
