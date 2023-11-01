<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue'
import Navbar from './Navbar.vue';
import { ref, onMounted, onUnmounted } from 'vue';


function toggleSidebar() {
    // console.log('toggleSidebar');
    SidebarOpened.value = !SidebarOpened.value
}

onMounted(() => {
    handleSidebarOpened();
    window.addEventListener('resize', handleSidebarOpened)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleSidebarOpened)
})

function handleSidebarOpened() {
    SidebarOpened.value = window.outerWidth > 768;
}

//to make sure is watch by vue.js
const SidebarOpened = ref(true);

</script>


<template>
    <div class="min-h-full bg-gray-200 flex ">
        <Sidebar :class="{ '-ml-[200px]': !SidebarOpened }" />
        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar" />

            <!-- Content -->
            <main class="p-6">
                <RouterView></RouterView>
            </main>
            <!-- Content -->

        </div>
    </div>
</template>


<style scoped></style>