<script setup>
import { ref } from 'vue';
import { useStore } from '@/stores/store';
import NavMenuList from '@/components/NavMenuList.vue';

import '../assets/scss/components/app-top-header.scss';

const store = useStore();

const closeOffCanvas = ref( 'offcanvas' );

</script>

<template>
    <div class="appHeader">
        
        <div class="logoContainer ">
            <div class="d-flex align-items-center">
                <router-link to="/" class="navbar-brand" href="#">
                    <img ref="customLogo" :src="store.image(store.logoImage)" alt="Company logo">
                </router-link>
            
            
            </div>
        </div>
        
        <div class="headerContent d-none d-lg-flex align-items-center">
            
            <div class="d-flex justify-content-end w-100">
                <ul class="d-flex justify-content-end w-100">
                    <li class="nav-item">
                        <img :src="store.image(store.picId)" class="headerProfileImg" alt="Profile Picture">
                    </li>
                    
                    <li class="nav-item px-3">
                        <router-link to="/goHome">My Profile</router-link>
                    </li>
                    
                    <li class="nav-item px-3">
                        <router-link to="/goHome">Logout</router-link>
                    </li>
                </ul>
            </div>
        
        </div>
        
        
        <i class="bi bi-list sm-burger-menu fs-4 mx-3 no-print" data-bs-toggle="offcanvas" data-bs-target="#smScreenMenu" aria-controls="smScreenMenu"></i>
        
        <div class="d-lg-none offcanvas offcanvas-start" tabindex="-1" id="smScreenMenu" aria-labelledby="smScreenMenuLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="smScreenMenuLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column p-0">
                
                <div class="d-flex justify-content-center align-items-center my-3">
                    <img :src="store.image(store.picId)" class="profileImage" alt="Profile Picture"/>
                </div>
                
                <div class="d-flex justify-content-evenly align-items-center my-3">
                    <div class="d-flex align-items-center">
                        <div class="d-flex flex-column align-items-center top-menu-text">
                            <div class="balance-text">To Redeem Balance</div>
                            <div>{{ store.memberPointsBalance }}</div>
                        </div>
                    </div>
                    
                    <div class="d-flex align-items-center">
                        <div class="d-flex flex-column align-items-center top-menu-text">
                            <div class="balance-text">To Reward Balance</div>
                            <div>{{ store.managerPointsBalance }}</div>
                        </div>
                    </div>
                </div>
                <NavMenuList :dismiss="closeOffCanvas"/>
            </div>
        </div>
    </div>
</template>

