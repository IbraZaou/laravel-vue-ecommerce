import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            //changer en null
            token: 1234,
            data: {}
        }
    },
    getters: {},
    actions: {},
    mutations: {},
})

export default store