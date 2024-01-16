<script setup>
import NewsFeed from '@/components/NewsFeed.vue';
import { useStore } from '@/stores/store';

import '../assets/scss/components/app-bottom-mobile-nav.scss';

import PaperPlane from '@/assets/svg/paperPlaneSvg.vue';
import GiftCardSvg from '@/assets/svg/giftCardSvg.vue';
import ChatSquare from '@/assets/svg/chat-square.vue';

const store = useStore();
const updateGetToKnow = () => {
  const obj = {
    departmentId: store.departmentId ,
    filter: store.getToKnowSearch ,
  };
  // axios.post( 'api/Site/GetToKnowList' , obj )
  //      .then( ( data ) => {
  //        store.getToKnow = new sjData( data.data.gettoknowlist ).data;
  //      } ).catch( ( error ) => {
  //   store.msgbox( error , 'Error' );
  // } );
};
const getCelebrations = () => {
  // axios.post( 'api/Site/GetCelebrationsList' , { filter: store.celebrationFilter } )
  //      .then( ( data ) => {
  //        store.celebrations = new sjData( data.data.celebrations ).data;
  //      } ).catch( ( error ) => {
  //   store.msgbox( error , 'Error' );
  // } );
};


</script>

<template>
    <div class="app-mobile-nav no-print">
        <div class="cstm-color-headfoot bottom-nav d-lg-none">
            <div>
                <div>
                    <div class="d-flex justify-content-evenly align-items-center pt-1">
                        <a href="#">
                            <div class="d-flex flex-column align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <div class="nav-mobile-icon">
                                    <ChatSquare/>
                                </div>
                                <p class="iconLabel">News Feed</p>
                            </div>
                        </a>
                        
                        <div>
                            <router-link to="/goHome">
                                <div class="d-flex flex-column align-items-center">
                                    <div class="nav-mobile-icon">
                                        <GiftCardSvg/>
                                    </div>
                                    <p class="iconLabel">Send Vouchers</p>
                                </div>
                            </router-link>
                        </div>
                        
                        <router-link to="/goHome">
                            <div class="d-flex flex-column align-items-center">
                                <div class="nav-mobile-icon">
                                    <PaperPlane/>
                                </div>
                                <p class="iconLabel">Send Points</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <NewsFeed :shoutOut="store.shoutOut"/>
            </div>
        </div>
    </div>
</template>
