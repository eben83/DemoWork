<script setup>
import { useStore } from '@/stores/store';
import NavMenuList from '@/components/NavMenuList.vue';

import '../assets/scss/components/app-side-menu.scss';

const store = useStore();

const isNavOpen = () => {
  store.isSideBarCollapse = !store.isSideBarCollapse;
};

</script>

<template>
    <aside class="main-nav-wrapper d-none d-lg-block">
        <div class="side-nav" :class="store.isSideBarCollapse ? 'is-side-bar-closed' : ''">
            <div class="profile-image">
                <div>
                    <img :src="store.image(store.picId)" alt="Profile Picture"/>
                </div>
                <div class="user">
                    <h6>{{ store.firstname }} {{ store.surname }}</h6>
                    <p>{{ store.departmentName }}</p>
                </div>
            
            </div>
            <NavMenuList @is-nav-open="isNavOpen" :isOpen="store.isSideBarCollapse"/>
        </div>
    </aside>
</template>

