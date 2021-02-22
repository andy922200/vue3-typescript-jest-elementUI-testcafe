<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png">
        <HelloWorld :msg="$t('intro.titles.main')" />
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import HelloWorld from '@/views/Home/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld
    }
})
</script>
