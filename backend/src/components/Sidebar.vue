<script setup>
import { RouterLink } from 'vue-router';
import { HomeIcon, ShoppingCartIcon, UserIcon, ChartPieIcon } from '@heroicons/vue/24/outline';


const emit = defineEmits(['submit'])

</script>


<template>
    <div class="w-[200px] bg-indigo-700 rounded-r-xl text-gray-300 py-4 px-2 transition-all">
        <!-- Dashbooard -->
        <RouterLink :to="{ name: 'app.dashboard' }"
            class="flex items-center hover:bg-black/30 py-1 px-3 rounded transition-colors mb-2 ">
            <span class="mr-2">
                <HomeIcon class="w-5" />
            </span>
            <span>
                Dashboard
            </span>
        </RouterLink>

        <!-- Products -->
        <RouterLink :to="{ name: 'app.products' }"
            class="flex items-center hover:bg-black/30 py-1 px-3 rounded transition-colors mb-2 ">
            <span class="mr-2">
                <ShoppingCartIcon class="w-5" />
            </span>
            <span>
                Products
            </span>
        </RouterLink>

        <!-- Users -->
        <RouterLink :to="{ name: 'app.dashboard' }"
            class="flex items-center hover:bg-black/30 py-1 px-3 rounded transition-colors mb-2 ">
            <span class="mr-2">
                <UserIcon class="w-5" />
            </span>
            <span>
                Users
            </span>
        </RouterLink>

        <!-- Reports -->
        <RouterLink :to="{ name: 'app.dashboard' }"
            class="flex items-center hover:bg-black/30 py-1 px-3 rounded transition-colors mb-2 ">
            <span class="mr-2">
                <ChartPieIcon class="w-5" />
            </span>
            <span>
                Reports
            </span>
        </RouterLink>
    </div>
</template>


<style scoped></style>