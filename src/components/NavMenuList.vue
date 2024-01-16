<script setup>
import { ref } from 'vue';
import { useStore } from '@/stores/store';

import SpeechBubbleSvg from '@/assets/svg/speechBubbleSvg.vue';
import DashboardSvg from '@/assets/svg/dashboardSvg.vue';
import GearSvg from '@/assets/svg/gearSvg.vue';
import GiftCardSvg from '@/assets/svg/giftCardSvg.vue';
import HeartHandsSvg from '@/assets/svg/heartHandsSvg.vue';
import ProfileSvg from '@/assets/svg/profileSvg.vue';
import GiftBoxSvg from '@/assets/svg/giftBoxSvg.vue';
import AwardBadgeSvg from '@/assets/svg/awardBadgeSvg.vue';
import PaperPlane from '@/assets/svg/paperPlaneSvg.vue';
import StatementSvg from '@/assets/svg/statementSvg.vue';
import LogoutSvg from '@/assets/svg/logoutSvg.vue';
import ChatSquare from '@/assets/svg/chat-square.vue';

import '../assets/scss/components/nav-menu-list.scss';

const store = useStore();
const isHideProfileSubMenu = ref( true );
const isHideAdminSubMenu = ref( true );

defineEmits( [ 'isNavOpen' , 'close' ] );

const props = defineProps( {
  isOpen: {
    type: Boolean ,
    required: false ,
  } ,
  
  dismiss: '',
} );
const closeProfileSubMenu = () => {
  isHideProfileSubMenu.value = !isHideProfileSubMenu.value;
  if ( !props.isOpen ) {
    isHideAdminSubMenu.value = true;
  }
};
const closeAdminSubMenu = () => {
  isHideAdminSubMenu.value = !isHideAdminSubMenu.value;
  if ( !props.isOpen ) {
    isHideProfileSubMenu.value = true;
  }
};
</script>

<template>
    <div class="nav-menu">
        <nav>
            <ul>
                <li class="menu-header">
                    <div class="top-menu-item">
                        <span>General</span>
                        <div class="open-close d-none d-lg-flex" @click="$emit('isNavOpen')">
                            <i class="bi bi-arrow-right"></i>
                        </div>
                    </div>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <DashboardSvg/>
                        </span>
                        <span class="menu-title">
                            Dashboard
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-item">
                    <a href="#">
                        <span class="menu-icon menu-with-sub">
                            <ProfileSvg/>
                        </span>
                        <span class="menu-title menu-with-sub" :class="isHideProfileSubMenu || props.isOpen ? '' : 'chevron-rotate'" @click.prevent="closeProfileSubMenu">
                            My Profile
                        </span>
                    </a>
                    <div class="sub-menu" :class="isHideProfileSubMenu || props.isOpen ? 'sub-menu-closed' : ''">
                        <ul>
                            <li :data-bs-dismiss="props.dismiss">
                                <router-link to="/goHome">
                                    <span>View Profile</span>
                                </router-link>
                            </li>
                            <li :data-bs-dismiss="props.dismiss">
                                <router-link to="/goHome">
                                    <span>My Statement</span>
                                </router-link>
                            </li>
                            <li :data-bs-dismiss="props.dismiss">
                                <router-link to="/goHome">
                                    <span>Update Password</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="hover-sub-menu">
                        <ul>
                            <li>
                                <router-link to="/goHome">
                                    <span>View Profile</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/goHome">
                                    <span>My Statement</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/goHome">
                                    <span>Update Password</span>
                                </router-link>
                            </li>
                            <li class="logout-link">
                                <router-link to="/goHome">
                                    <span>Logout</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <GiftBoxSvg/>
                        </span>
                        <span class="menu-title">
                            Redeem Rewards
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-item d-none d-lg-block d-xl-none">
                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span class="menu-icon">
                            <ChatSquare/>
                        </span>
                        <span class="menu-title">
                            News Feed
                        </span>
                    </a>
                </li>
                
                <li class="menu-item d-lg-none d-xl-none">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <LogoutSvg/>
                        </span>
                        <span class="menu-title">Logout</span>
                    </router-link>
                </li>
                
                <li class="menu-header">
                    <div class="top-menu-item">
                        <span>Recognise</span>
                    </div>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <PaperPlane/>
                        </span>
                        <span class="menu-title">
                            Send {{ store.pointsName }}
                        </span>
                    </router-link>
                </li>
                
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <SpeechBubbleSvg/>
                        </span>
                        <span class="menu-title">
                            Simply Say
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <HeartHandsSvg/>
                        </span>
                        <span class="menu-title">
                            Pay it Forward
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <AwardBadgeSvg/>
                        </span>
                        <span class="menu-title">
                            My Recognition
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <StatementSvg/>
                        </span>
                        <span class="menu-title">
                            Awards Statement
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-header">
                    <div class="top-menu-item">
                        <span>Administration</span>
                    </div>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <GiftCardSvg/>
                        </span>
                        <span class="menu-title">
                            Send Adhoc Vouchers
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-item" :data-bs-dismiss="props.dismiss">
                    <router-link to="/goHome">
                        <span class="menu-icon">
                            <PaperPlane/>
                        </span>
                        <span class="menu-title">
                            Bulk Send {{ store.pointsName }}
                        </span>
                    </router-link>
                </li>
                
                <li class="menu-item">
                    <a href="#">
                        <span class="menu-icon menu-with-sub">
                            <GearSvg/>
                        </span>
                        <span class="menu-title menu-with-sub" :class="isHideAdminSubMenu || props.isOpen ? '' : 'chevron-rotate'" @click.prevent="closeAdminSubMenu">
                            Administration
                        </span>
                    </a>
                    <div class="sub-menu" :class="isHideAdminSubMenu || props.isOpen ? 'sub-menu-closed' : ''">
                        <ul>
                            <li :data-bs-dismiss="props.dismiss">
                                <router-link to="/goHome">
                                    <span>Reports</span>
                                </router-link>
                            </li>
                            <li :data-bs-dismiss="props.dismiss">
                                <router-link to="/goHome">
                                    <span>Funds Management</span>
                                </router-link>
                            </li>
                            <li :data-bs-dismiss="props.dismiss">
                                <router-link to="/goHome">
                                    <span>Member Admin</span>
                                </router-link>
                            </li>
                            <li :data-bs-dismiss="props.dismiss">
                                <router-link to="/goHome">
                                    <span>Company Setup</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="hover-sub-menu">
                        <ul>
                            <li>
                                <router-link to="/goHome">
                                    <span>Reports</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/goHome">
                                    <span>Funds Management</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/goHome">
                                    <span>Member Admin</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/goHome">
                                    <span>Company Setup</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

