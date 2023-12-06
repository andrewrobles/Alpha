<script setup>
import { onMounted } from 'vue'

const fetchData = async () => {
        try {
            const response = await fetch('https://api.scripture.api.bible/v1/bibles', {
                method: 'GET',
                headers: {
					'api-key': '4a203cf6d4603048c9008bc07df8be2a'
                },
            });
            const json = await response.json();
			console.log(json)
        } catch (error) {
            console.error(error);
        }
    }

onMounted(async () => {
	await fetchData()
})
</script>

<template>
<router-link to="/psalms" class="link">BOOK OF PSALMS</router-link><br>
<router-view></router-view>
</template>

<style>
.link {
	margin-right: 10px	
}
</style>
