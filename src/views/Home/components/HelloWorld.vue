<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p v-html="headline"></p>
        <h3>{{ $t("intro.titles.links") }}</h3>
        <ul>
            <li v-for="(link, index) in essentialLinks" :key="index">
                <a :href="link.url" target="_blank" rel="noopener">{{ $t(`intro.essentialLinks.${link.caption}`) }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String
    },
    setup () {
        const essentialLinks = [
            {
                caption: 'Core Docs',
                url: 'https://vuejs.org'
            },
            {
                caption: 'Forum',
                url: 'https://forum.vuejs.org'
            },
            {
                caption: 'Community Chat',
                url: 'https://chat.vuejs.org'
            },
            {
                caption: 'Twitter',
                url: 'https://twitter.com/vuejs'
            },
            {
                caption: 'News',
                url: 'https://news.vuejs.org'
            }
        ]

        return {
            essentialLinks
        }
    }
})
</script>

<style scoped lang="scss" src="../styles/HelloWorld.scss"></style>
