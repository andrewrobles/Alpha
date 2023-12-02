<!-- <script setup>
import { onMounted } from 'vue'

onMounted(() => {
	console.log('test')
	const url = 'https://andrewrobles.pythonanywhere.com/1'
	const request = new Request(url, {method: 'GET'})
	fetch(request).then(console.log(request))

})
</script> -->

<template>
<router-link to="/psalms" class="link">Psalms</router-link><br>
<router-link to="/fastlane" class="link">Fast Lane</router-link><br>
<router-link to="/golddigger" class="link">Gold Digger</router-link><br>
<router-view></router-view>
</template>

<style>
.link {
	margin-right: 10px	
}
</style>
