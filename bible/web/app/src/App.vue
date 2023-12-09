<script setup>
import { onMounted } from 'vue'
const BIBLE_ID = 'de4e12af7f28f599-02'
const API_KEY = '4a203cf6d4603048c9008bc07df8be2a'
const URL = 'https://api.scripture.api.bible/v1/bibles'
const getPsalmURL = (psalmIndex) => {
    return `${URL}/${BIBLE_ID}/chapters/PSA.${psalmIndex}?content-type=text`
}
const fetchData = async () => {
        try {
            const response = await fetch(getPsalmURL(1), {
                method: 'GET',
                headers: {
					'api-key': API_KEY
                },
            });
            const json = await response.json();
			console.log(json.data.content)
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
