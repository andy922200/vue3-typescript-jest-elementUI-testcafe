import {
    createStore
} from 'vuex'

import demoModule from './modules/demo'
import dayjs from 'dayjs'

// vue-i18n start
import {
    Locales
} from '@/i18n/config/locales'
import {
    defaultLocale
} from '@/i18n/config'
// vue-i18n end

import {
    RootState
} from './declarations/index'

const state: RootState = {
    today: dayjs(),
    selectedLanguage: defaultLocale
}

export default createStore({
    state,
    getters: {
        today: state => state.today,
        selectedLanguage: state => state.selectedLanguage
    },
    mutations: {
        setToday (state, time: string) {
            state.today = dayjs(time)
        },
        setLanguage (state, payload: Locales) {
            state.selectedLanguage = payload
        }
    },
    actions: {
        selectNewDefaultLanguage ({ getters, commit }, lang: Locales) {
            const { selectedLanguage }: { selectedLanguage: Locales } = getters
            if (lang !== selectedLanguage) {
                commit('setLanguage', lang)
            }
        }
    },
    modules: {
        demoModule
    }
})
