import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Psalms from '../../psalms/Index.vue'
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

import FastLane from '../../lyrics/fastlane/Index.vue'
import Hook from '../../lyrics/fastlane/Hook.vue'
import FirstVerse from '../../lyrics/fastlane/FirstVerse.vue'
import SecondVerse from '../../lyrics/fastlane/SecondVerse.vue'
import ThirdVerse from '../../lyrics/fastlane/ThirdVerse.vue'
import FourthVerse from '../../lyrics/fastlane/FourthVerse.vue'
import FifthVerse from '../../lyrics/fastlane/FifthVerse.vue'
import SixthVerse from '../../lyrics/fastlane/SixthVerse.vue'

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
	{ path: '/fastlane', component: FastLane, name: 'FastLane' },
	{ path: '/fastlane/hook', component: Hook, name: 'Hook' },
	{ path: '/fastlane/1', component: FirstVerse, name: 'FirstVerse' },
	{ path: '/fastlane/2', component: SecondVerse, name: 'SecondVerse' },
	{ path: '/fastlane/3', component: ThirdVerse, name: 'ThirdVerse' },
	{ path: '/fastlane/4', component: FourthVerse, name: 'FourthVerse' },
	{ path: '/fastlane/5', component: FifthVerse, name: 'FifthVerse' },
	{ path: '/fastlane/6', component: SixthVerse, name: 'SixthVerse' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
