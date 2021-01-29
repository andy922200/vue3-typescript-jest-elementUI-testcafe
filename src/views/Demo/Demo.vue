<template>
    <div class="demo">
        This is Demo Page
        <ul>
            <li v-for="post in posts" :key="post.id">
                Title:{{post.title}} & Author:{{post.author}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, reactive
} from 'vue'
import {
    basicAPIs
} from '../../utils/apis'

export default defineComponent({
    name: 'Demo',
    async setup () {
        try {
            let posts = reactive([])
            const { data: rawData } = await basicAPIs.getPosts()

            posts = rawData

            return {
                posts
            }
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
