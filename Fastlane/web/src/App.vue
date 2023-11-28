<template>
<router-link to="/1" class="link">Verse 1</router-link>
<router-link to="/2" class="link">Verse 2</router-link>
<router-link to="/3" class="link">Chorus 1</router-link>
<router-link to="/4" class="link">Verse 3</router-link><br>
<router-link to="/5" class="link">Verse 4</router-link>
<router-link to="/6" class="link">Verse 5</router-link>
<router-link to="/7" class="link">Verse 6</router-link>
<router-link to="/8" class="link">Chorus 2</router-link>
<br>
<router-view></router-view>
</template>

<style>
.link {
	margin-right: 10px	
}
</style>
