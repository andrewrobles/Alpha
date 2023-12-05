<script setup>
import Psalm1 from '../psalms/1.vue'
import Psalm2 from '../psalms/2.vue'
import Psalm3 from '../psalms/3.vue'
import Psalm4 from '../psalms/4.vue'
import Psalm5 from '../psalms/5.vue'
import Psalm6 from '../psalms/6.vue'
import Psalm7 from '../psalms/7.vue'
import Psalm8 from '../psalms/8.vue'
import Psalm9 from '../psalms/9.vue'
import Psalm10 from '../psalms/10.vue'
import Psalm11 from '../psalms/11.vue'

const props = defineProps({
    index: Number
})
</script>
<template>
    <div>
        <index/>
        <psalm1 v-if="index===1"/>
        <psalm2 v-if="index===2"/>
        <psalm3 v-if="index===3"/>
        <psalm4 v-if="index===4"/>
        <psalm5 v-if="index===5"/>
        <psalm6 v-if="index===6"/>
        <psalm7 v-if="index===7"/>
        <psalm8 v-if="index===8"/>
        <psalm9 v-if="index===9"/>
        <psalm10 v-if="index===10"/>
        <psalm11 v-if="index===11"/>
    </div>
</template>