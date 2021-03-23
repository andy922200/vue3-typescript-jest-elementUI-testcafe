<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <el-select v-model="selectedLanguageModel" placeholder="Please Select">
        <el-option
            v-for="(item) in LayoutLanguages"
            :key="item.param"
            :label="item.title"
            :value="item.param"
        >
        </el-option>
    </el-select>
    <Suspense>
        <template #default>
            <router-view />
        </template>
        <template #fallback>
            <p>Loading...</p>
        </template>
    </Suspense>
</template>

<script lang="ts">
import {
    defineComponent, computed
} from 'vue'

import {
    LayoutLanguages
} from '@/i18n/config/locales'

import {
    useStore
} from 'vuex'

import {
    useI18n
} from 'vue-i18n'

export default defineComponent({
    name: 'App',
    setup () {
        const store = useStore()
        const { locale } = useI18n()

        return {
            selectedLanguageModel: computed({
                get () {
                    return store.getters.selectedLanguage
                },
                set (value: string) {
                    locale.value = value
                    store.dispatch('selectNewDefaultLanguage', value)
                }
            }),
            LayoutLanguages
        }
    }
})
</script>

<style lang="scss" src="./styles/App.scss"></style>
