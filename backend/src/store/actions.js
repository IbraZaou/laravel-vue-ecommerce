// on va créer login et logout

import axios from "axios";
import axiosClient from "../axios";

// Get User
export function getUser({ commit }, data) {
    return axiosClient.get('/user', data)
        .then(({ data }) => {
            commit('setUser', data)
            return data;
        })
}

// Post login
export function login({ commit }, data) {
    return axiosClient.post('/login', data)
        .then(({ data }) => {
            commit('setUser', data.user);
            commit('setToken', data.token)
            return data;
        })
}


// Post logout
export function logout({ commit }) {
    return axiosClient.post('/logout')
        .then((response) => {
            commit('setToken', null)

            return response;
        })
}


export function getProducts({ commit }) {
    commit('setProducts', [true])
    return axiosClient.get('product')
        .then(res => {
            commit('setProducts', [false, res.data])
        })
        .catch(() => {
            commit('setProducts', [false])
        })
}