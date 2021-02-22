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
    defineComponent, computed, inject, DefineComponent
} from 'vue'

import {
    LayoutLanguages
} from '@/i18n/config/locales'

import {
    useStore
} from 'vuex'

export default defineComponent({
    name: 'App',
    setup () {
        const root = inject('rootVueInstance') as DefineComponent
        const store = useStore()

        return {
            selectedLanguageModel: computed({
                get () {
                    return store.getters.selectedLanguage
                },
                set (value: string) {
                    root.__VUE_I18N__.global.locale = value
                    store.dispatch('selectNewDefaultLanguage', value)
                }
            }),
            LayoutLanguages
        }
    }
})
</script>

<style lang="scss" src="./styles/App.scss"></style>
