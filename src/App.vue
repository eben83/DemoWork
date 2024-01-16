<script setup>
import { RouterView , useRoute } from 'vue-router';
import AppSideMenu from '@/components/AppSideMenu.vue';
import AppTopHeader from '@/components/AppTopHeader.vue';
import AppBottomMobileNav from '@/components/AppBottomMobileNav.vue';

const route = useRoute();
</script>

<style scoped lang="scss">
</style>

<template>
    <div class="layout" v-if="route.path === '/goHome'">
        <AppTopHeader/>
        <div class="d-flex">
            <div class="wrapper">
                <AppSideMenu/>
            </div>
            <main>
                <div class="wrapper-content">
                    <RouterView/>
                </div>
                <div>
                    <AppBottomMobileNav />
                </div>
            </main>
        </div>
    
    </div>
    
    <div v-else>
        <RouterView/>
    </div>
</template>


