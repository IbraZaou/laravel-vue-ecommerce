<script setup>
import { RouterLink, routerKey } from 'vue-router';
import GuestLayout from '../components/GuestLayout.vue';
import { ref } from 'vue';
import store from '../store';
import { MapIcon } from '@heroicons/vue/24/outline';
import router from "../router";


let loading = ref(false);
let errorMsg = ref("");

function login() {
    loading.value = true;
    store.dispatch('login', user)
        .then(() => {
            loading.value = false;
            router.push({ name: 'app.dashboard' })
        })

        .catch(({ response }) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        })
}

const user = {
    email: '',
    password: '',
    remember: false
}

</script>


<template>
    <GuestLayout title="Sign in to your account" method="POST" @submit.prevent="login">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required v-model="user.email"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required
                        v-model="user.password"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>


            <div>
                <button type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                    in</button>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" v-model="user.remember"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
            </div>

            <div class="text-sm">
                <RouterLink :to="{ name: 'requestPassword' }" class="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?</RouterLink>
            </div>
        </div>
    </GuestLayout>
</template>


<style scoped></style>