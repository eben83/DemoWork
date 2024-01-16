<script setup>
import { computed } from 'vue';
import { useStore } from '@/stores/store';
import { useRouter } from 'vue-router';

import NewsFeed from '@/components/NewsFeed.vue';
import HomePageButton from '@/components/HomePageButton.vue';
import HomeBanner from '@/components/HomeBanner.vue';

import '../assets/scss/views/page-home.scss'

const store = useStore();
const router = useRouter();

const isManager = computed( () => {
  return true
} );

const isAdhoc = computed( () => {
  return true
} );

</script>

<template>
    
    
    <div class="home-page">
        
        <div class="hero-banner">
            <HomeBanner/>
            
            <div class="hero-profile">
                
                <div class="text-center pt-4">
                    <img src="../assets/image/nopic.jpg" class="hero-profile-img" alt="Profile Picture">
                </div>
                
                <!--profile content manager-->
                <div class="profile-content text-center pt-2" v-if="isManager">
                    <p class="p-0 m-0 name-label"><strong>Hello,</strong> {{ store && store.firstname }}&nbsp;{{ store && store.surname }}</p>
                    <p class="p-0 m-0 welcome-label">Welcome Back</p>
                    <hr class="mx-5" />
                    
                    <!--mobile view-->
                    <div class="d-flex justify-content-evenly d-lg-none d-xl-none">
                        <div class="d-flex flex-column">
                            <p class="m-0 p-0 points-label text-wrap">Your Rewards <br/> Balance is:</p>
                            <p class="p-0 value-points">{{ store.memberPointsBalance }}</p>
                            <p class="pt-1 points-label-bottom"> {{ store.pointsName }} </p>
                            <div class="d-flex justify-content-center align-items-center">
                                <router-link to="/goHome">
                                    <button class="d-flex points-buttons align-items-center justify-content-around">
                                        <span class="m-0 align-items-center justify-content-center">Redeem Rewards</span>
                                        <i class="bi bi-chevron-right"></i>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                        
                        <div class="d-flex flex-column">
                            <p class="m-0 p-0 points-label text-wrap">Your Points <br /> Allocation is:</p>
                            <p class="p-0 value-points">{{ store.managerPointsBalance }}</p>
                            <p class="pt-1 points-label-bottom"> {{ store.pointsName }} </p>
                            <div class="d-flex justify-content-center align-items-center">
                                <router-link to="/goHome">
                                    <button class="d-flex points-buttons align-items-center justify-content-around">
                                        <span class="m-0 align-items-center justify-content-center">Send Points</span>
                                        <i class="bi bi-chevron-right"></i>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <!--desktop view-->
                    <div class="d-flex flex-column d-none d-lg-block d-xl-block">
                        <div class="d-flex flex-row justify-content-center">
                            <div class="points-values justify-content-center align-items-center">
                                <p class="m-0 p-0 points-label">Your Rewards Balance is:</p>
                                <p class="p-0 value-points">{{ store.memberPointsBalance }}</p>
                                <p class="p-0 points-label-bottom"> {{ store.pointsName }} </p>
                            </div>
                            <div class="redeem-button d-flex align-items-center justify-content-center">
                                <router-link to="/goHome">
                                    <button class="d-flex points-buttons align-items-center justify-content-around">
                                        <span class="m-0 align-items-center justify-content-center">Redeem Rewards</span>
                                        <i class="bi bi-chevron-right"></i>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <div class="d-flex flex-row justify-content-center">
                                <div class="points-values justify-content-center align-items-center">
                                    <p class="m-0 p-0 points-label">Your Points Allocation is:</p>
                                    <p class="p-0 value-points">{{ store.managerPointsBalance }}</p>
                                    <p class="p-0 points-label-bottom"> {{ store.pointsName }} </p>
                                </div>
                                <div class="redeem-button d-flex align-items-center justify-content-center">
                                    <router-link to="/goHome">
                                        <button class="d-flex points-buttons align-items-center justify-content-around">
                                            <span class="m-0 align-items-center justify-content-center">Send Points</span>
                                            <i class="bi bi-chevron-right"></i>
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
                
                
                
                <!--profile content user-->
                <div class="profile-content text-center pt-2" v-else>
                    <p class="p-2 m-0 name-label">Hello, {{ store.firstname }}&nbsp;{{ store.surname }}</p>
                    <p class="p-0 m-0 welcome-label">Welcome Back</p>
                    <hr class="mx-5" />
                    <p class="m-0 p-0 points-label">Your Rewards Balance is:</p>
                    <p class="p-0 value-points">{{ store.memberPointsBalance }}</p>
                    <p class="p-0 points-label-bottom"> {{ store.pointsName }} </p>
                    
                    <button class="points-buttons-user">
                        <router-link to="/goHome">
                            <p class="align-items-center justify-content-center m-0 ps-1">Redeem Rewards</p>
                        </router-link>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                
                </div>
            
            
            </div>
        
        
        </div>
        
        <!--buttons and newsfeed-->
        
        <div>
            <div class="home-bottom-content ms-3 d-flex justify-content-between">
                <div class="row justify-content-center my-2 button-container">
                    
                    <div class="col-12 col-sm-11 col-md-6 my-2 md-mx-2">
                        <HomePageButton
                                route-link="/"
                                button-svg="giftBoxSvg"
                                button-title="Redeem Rewards"
                                button-text="You've earned it! Let's get shopping!"
                                side-button-text="Redeem now"
                        />
                    </div>
                    
                    <div class="col-12 col-sm-11 col-md-6 my-2 md-mx-2">
                        <HomePageButton
                                route-link="/"
                                button-svg="speechBubbleSvg"
                                button-title="Simply Say"
                                button-text="Its funny what a few words can mean to someone."
                                side-button-text="Say it now"
                        />
                    </div>
                    
                    <div class="col-12 col-sm-11 col-md-6 my-2 md-mx-2">
                        <HomePageButton
                                route-link="/"
                                button-svg="heartHandsSvg"
                                button-title="Pay it Forward"
                                button-text="Points aren't to be paid back they're to be paid forward!"
                                side-button-text="Share the love"
                        />
                    </div>
                    
                    <div class="col-12 col-sm-11 col-md-6 my-2 md-mx-2">
                        <HomePageButton
                                route-link="/"
                                button-svg="awardBadgeSvg"
                                button-title="My Recognition"
                                button-text="Take a peep at your recognition sent and received."
                                side-button-text="View here"
                        />
                    </div>
                    
                    <!--Manager/user Specific Buttons-->
                    <div class="col-12 col-sm-11 col-md-6 my-2 md-mx-2">
                        <HomePageButton
                                v-if="!isManager"
                                route-link="/"
                                button-svg="profileSvg"
                                button-title="My Profile"
                                button-text="View and update all your profile details."
                                side-button-text="View here"
                                :is-manager="isManager"
                        />
                        <HomePageButton
                                v-if="isManager && isAdhoc"
                                route-link="/"
                                button-svg="giftCardSvg"
                                button-title="Adhoc Vouchers"
                                button-text="Let's make our customers happy too!"
                                side-button-text="Send vouchers"
                                :is-manager="isManager"
                        />
                        <HomePageButton v-if="!isAdhoc"
                                        route-link="/"
                                        button-svg="statementSvg"
                                        button-title="Manager Statement"
                                        button-text="View all your transactions in one simple report."
                                        side-button-text="View here"
                                        :is-manager="isManager"
                        />
                    </div>
                    
                    <div class="col-12 col-sm-11 col-md-6 my-2 md-mx-2">
                        <HomePageButton v-if="!isManager"
                                        route-link="/"
                                        button-svg="statementSvg"
                                        button-title="My Statement"
                                        button-text="View all your transactions in one simple report."
                                        side-button-text="View here"
                                        :is-manager="isManager"/>
                        <HomePageButton v-if="isManager"
                                        route-link="/"
                                        button-svg="paperPlaneSvg"
                                        button-title="Reward Staff"
                                        button-text="Reward excellence. It's the thought that counts!"
                                        side-button-text="Send points"
                                        :is-manager="isManager"/>
                    </div>
                    <!--end of buttons-->
                
                </div>
                
                <div class="newsfeed-container my-2 d-none d-xl-block">
                    <NewsFeed :shoutOut="store.shoutOut"/>
                </div>
            </div>
        </div>
    </div>
</template>
