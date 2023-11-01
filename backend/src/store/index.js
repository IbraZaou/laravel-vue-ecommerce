import { createStore } from "vuex";
import * as actions from './actions';
import * as mutations from './mutations';

const store = createStore({
    state: {
        user: {
            //changer en null
            token: sessionStorage.getItem('TOKEN'),
            data: {}
        }
    },
    getters: {},
    actions,
    mutations,
})

export default store