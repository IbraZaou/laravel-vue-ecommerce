<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <div class="flex justify-center items-center min-h-full min-w-full w-full">
        <div class="text-indigo-600 text-9xl px-8 font-bold border-r">404</div>
        <div class="px-8">
            <h1 class="text-5xl font-bold mb-4">Page Not Found</h1>
            <p class="text-gray-700">Please check the URL in the address bar and try again</p>
            <div>
                <RouterLink :to="{ name: 'app.dashboard' }"
                    class="flex justify-center mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Go
                    back home</RouterLink>
            </div>
        </div>

    </div>
</template>


<style scoped></style>