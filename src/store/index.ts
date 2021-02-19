import {
    createStore
} from 'vuex'

import demoModule from './modules/demo'
import dayjs from 'dayjs'

import {
    RootState
} from './declarations/index'

const state: RootState = {
    today: dayjs()
}

export default createStore({
    state,
    getters: {
        today: state => state.today
    },
    mutations: {
        setToday (state, time: string) {
            state.today = dayjs(time)
        }
    },
    actions: {

    },
    modules: {
        demoModule
    }
})
