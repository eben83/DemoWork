<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/store';

import * as bootstrap from 'bootstrap';
import '../assets/scss/components/app-news-feed.scss';

import Bullhorn from '../assets/svg/bullhornSvg.vue';
import PeoplePlusSvg from '../assets/svg/peoplePlusSvg.vue';
import CelebrationSvg from '../assets/svg/celebrationSvg.vue';

window.bootstrap = bootstrap;

const store = useStore();
const router = useRouter();

const months = [
  { month: 'January' , value: '1' } ,
  { month: 'February' , value: '2' } ,
  { month: 'March' , value: '3' } ,
  { month: 'April' , value: '4' } ,
  { month: 'May' , value: '5' } ,
  { month: 'June' , value: '6' } ,
  { month: 'July' , value: '7' } ,
  { month: 'August' , value: '8' } ,
  { month: 'September' , value: '9' } ,
  { month: 'October' , value: '10' } ,
  { month: 'November' , value: '11' } ,
  { month: 'December' , value: '12' } ,
];

const props = defineProps( {
  shoutOut: {
    required: true ,
  } ,
} );

const tabSelected = ( tab ) => {
  store.newsfeedSelTab = tab;
  if ( tab === 'celebration' ) {
    getCelebrations();
  }
  else if ( tab === 'getToKnow' ) {
    updateGetToKnow();
  }
};

const selTab = computed( () => {
  return store.newsfeedSelTab;
} );

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

const filterShoutOut = computed( () => {
  if ( store.shoutOutSearch !== '' ) {
    return props.shoutOut && props.shoutOut.map( item => item ).filter( ( item ) => {
      return item.from.toLowerCase().match( store.shoutOutSearch.toLowerCase() ) ||
          item.to.toLowerCase().match( store.shoutOutSearch.toLowerCase() ) ||
          item.header.toLowerCase().match( store.shoutOutSearch.toLowerCase() );
    } );
  }
  else {
    return props.shoutOut;
  }
} );

const filterGetToKnow = computed(() => {
  if ( store.getToKnowSearch !== '') {
    return store.getToKnow.map(item => item).filter( (item) => {
      return item.memberName.toLowerCase().match( store.getToKnowSearch.toLowerCase() ) ||
      item.departmentName.toLowerCase().match( store.getToKnowSearch.toLowerCase() )
          
    })
  } else {
    return store.getToKnow
  }
  
})

const filterCelebrations = computed( () => {
  if ( store.celebrationSearch !== '' ) {
    return store.celebrations.map(item => item).filter( (item) => {
      return item.firstname.toLowerCase().match( store.celebrationSearch.toLowerCase() ) ||
      item.surname.toLowerCase().match( store.celebrationSearch.toLowerCase() ) ||
      item.departmentName.toLowerCase().match( store.celebrationSearch.toLowerCase() )
    })
  }
  else {
    return store.celebrations;
  }
} );

function onLinkOut( route ) {
  console.log(route);
}

</script>


<template>
    <div class="newsFeed">
        <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
            <button class="nav-link mx-2" id="nav-shoutOut-tab" data-bs-toggle="tab" data-bs-target="#nav-shoutOut" type="button" role="tab" aria-controls="nav-shoutOut" aria-selected="true" @click="tabSelected('shoutOut')" :class="selTab === 'shoutOut' ? 'active' : ''">
                <Bullhorn class="nav-tab-svg"/>
            </button>
            <button class="nav-link mx-2" id="nav-get-to-know-tab" data-bs-toggle="tab" data-bs-target="#nav-get-to-know" type="button" role="tab" aria-controls="nav-get-to-know" aria-selected="false" @click="tabSelected('getToKnow')" :class="selTab === 'getToKnow' ? 'active' :''">
                <PeoplePlusSvg class="nav-tab-svg"/>
            </button>
            <button class="nav-link mx-2" id="nav-celebrations-tab" data-bs-toggle="tab" data-bs-target="#nav-celebrations" type="button" role="tab" aria-controls="nav-celebrations" aria-selected="false" @click="tabSelected('celebration')" :class="selTab === 'celebration' ? 'active' : ''">
                <CelebrationSvg class="nav-tab-svg"/>
            </button>
        </div>
        
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade" id="nav-shoutOut" role="tabpanel" aria-labelledby="nav-shoutOut-tab" tabindex="0" :class="selTab === 'shoutOut' ? 'show active' : ''">
                <div class="feed-heading pt-2">
                    <div class="h5">Shout Out</div>
                </div>
                
                <div class="input-group input-group-sm search my-2 p-2">
                    <input class="form-control mx-4 p-2" type="text" placeholder="Search" v-model="store.shoutOutSearch">
                </div>
                
                <div v-if="props.shoutOut && props.shoutOut.length > 0" class="tabBodyContent" :class="store.newsfeedSelTab === 'shoutOut' ? 'shout-out-top' : ''">
                    <div v-for="item in filterShoutOut" class="tabContext">
                        
                        <div class="shoutout-container">
                            
                            <div class="profileImage">
                                <div class="image-wrapper pe-3">
                                    <img :src="store.image(item.picId)" alt="image of user" class="shoutout-img">
                                </div>
                                <div class="message-body p-2">
                                    <div class="ribbon ribbon-bottom-right" v-if="item.celebrationText !== ''"><span>{{ item.celebrationText }}</span></div>
                                    <div class="d-flex bubble-header">
                                        <p class="shoutout-from mb-0">&nbsp;{{ item.to }}</p>
                                        <div class="shoutout-buttons">
                                            
                                            <div class="text-center d-flex justify-content-center">
                                                <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Send Points">
                                                    <i class="icon bi bi-star"></i>
                                                </button>
                                                <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Simply Say">
                                                    <i class="icon bi bi-hand-thumbs-up"></i>
                                                </button>
                                                <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Pay it forward">
                                                    <i class="icon bi bi-send"></i>
                                                </button>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    
                                    <div class="message-bubble pt-2">
                                        <div class="mb-2">
                                            <p class="shoutout-to p-0 m-0">From:&nbsp;{{ item.from }}</p>
                                            <p class="shoutout-message p-0 m-0">For:&nbsp;{{ item.header }}</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="m-4 text-center" v-else>Sorry, no Shout Outs to see here...</div>
            </div>
            
            <div class="tab-pane fade" id="nav-get-to-know" role="tabpanel" aria-labelledby="nav-get-to-know-tab" tabindex="0" :class="selTab === 'getToKnow' ? 'show active' :''">
                <div class="feed-heading pt-2">
                    <div class="h5">Get to Know</div>
                </div>
                
                <div class="search my-3">
                    <div class="input-group input-group-sm flex-nowrap my-2 px-4 ml-2">
                        <input type="text" class="form-control" placeholder=" Search" v-model="store.getToKnowSearch" @keyup.enter="updateGetToKnow()">
                        <button @click="updateGetToKnow()" class="find-button">Find</button>
                    </div>
                    
                    <div class="input-group input-group-sm mb-2">
                        <select class="form-select mx-4" v-model="store.departmentId" @change="updateGetToKnow()">
                            <option value="">View All</option>
                            <option v-for="item in store.departmentList" :value="item.departmentName">
                                {{ item.departmentName }}
                            </option>
                        </select>
                    </div>
                </div>
                
                
                <div v-if="store.getToKnow && store.getToKnow.length > 0" class="tabBodyContent" :class="store.newsfeedSelTab === 'getToKnow' ? 'getToKnow-top' : ''">
                    <div v-for="item in filterGetToKnow" class="tabContext">
                        
                        <div class="profileImage">
                            <div class="image-wrapper pe-3">
                                <img :src="store.image(item.picId)" alt="image of user" class="gettoknow-img">
                            </div>
                            
                            <div class="message-body p-2">
                                <div class="ribbon ribbon-bottom-right" v-if="item.celebrationText !== ''">
                                    <span>{{ item.celebrationText }}</span>
                                </div>
                                <div class="d-flex bubble-header" :class="store.isSideBarCollapse ? '' : 'flex-xl-column flex-xxl-row justify-content-right'">
                                    <div class="ps-1 gtk-header">
                                        <p class="gtk-member mb-1">{{ item.memberName }}</p>
                                    </div>
                                    
                                    
                                    <div class="celebration-buttons">
                                        <div class="text-center d-flex justify-content-center">
                                            <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Send Points">
                                                <i class="icon bi bi-star"></i>
                                            </button>
                                            <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Simply Say">
                                                <i class="icon bi bi-hand-thumbs-up"></i>
                                            </button>
                                            <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Pay it forward">
                                                <i class="icon bi bi-send"></i>
                                            </button>
                                        </div>
                                    
                                    </div>
                                </div>
                                
                                <div class="message-bubble">
                                    <div class="mb-2">
                                        <div class="col-12 gettoknow-content">
                                            <div class="my-2" v-if="item.departmentName">
                                                <div class="pg-label text-start p-0 m-0">Department:</div>
                                                <p class="pg-value p-0 m-0"> {{ item.departmentName }}</p>
                                            </div>
                                            <div class="my-2" v-if="item.profession">
                                                <div class="pg-label text-start p-0 m-0">Job Title:</div>
                                                <p class="pg-value p-0 m-0"> {{ item.profession }}</p>
                                            </div>
                                            <div class="my-2" v-if="item.interests">
                                                <div class="pg-label text-start p-0 m-0 ">Interests:</div>
                                                <p class="pg-value p-0 m-0"> {{ item.interests }}</p>
                                            </div>
                                            <div class="my-2" v-if="item.birthday">
                                                <div class="pg-label text-start p-0 m-0">Birthday:</div>
                                                <p class="pg-value p-0 m-0"> {{ item.birthday }}</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="m-4 text-center pg-value" v-else>Seems you know everyone</div>
            </div>
            
            <div class="tab-pane fade" id="nav-celebrations" role="tabpanel" aria-labelledby="nav-celebrations-tab" tabindex="0" :class="selTab === 'celebration' ? 'show active' : ''">
                <div class="feed-heading pt-2">
                    <div class="h5">Celebrations</div>
                </div>
                
                <div class="search mx-4 my-2">
                    <label class="pg-label m-0 p-0" for="filter" aria-labelledby="filter" :class="store.celebrations && store.celebrations.length > 0 ? 'mt-1' : 'mt-2'">Select the period:</label>
                    <div class="input-group input-group-sm">
                        <select class="form-control" id="filter" v-model="store.celebrationFilter" @change="getCelebrations()">
                            <option selected value="bdaytoday">&nbsp;Today</option>
                            <option value="bday7days">&nbsp;This Week</option>
                            <option v-for="item in months" :value="item.value">&nbsp;{{ item.month }}</option>
                        </select>
                    </div>
                    <div class="input-group input-group-sm">
                        <input v-if="store.celebrations && store.celebrations.length > 0" type="text" class="form-control my-2" placeholder=" Search" v-model="store.celebrationSearch">
                    </div>
                </div>
                
                <div v-if="store.celebrations && store.celebrations.length > 0" class="tabBodyContent" :class="store.newsfeedSelTab === 'celebration' ? 'celebration-top' : ''">
                    <div v-for="item in filterCelebrations" class="tabContext">
                        
                        <div class="celebration-container">
                            
                            <div class="profileImage">
                                <div class="image-wrapper pe-3">
                                    <img :src="store.image(item.picId)" alt="image of user" class="celebration-img">
                                </div>
                                
                                <div class="message-body p-2">
                                    <div class="ribbon ribbon-bottom-right" v-if="item.celebrationText !== ''">
                                        <span>{{ item.celebrationText }}</span>
                                    </div>
                                    <div class="d-flex bubble-header" :class="store.isSideBarCollapse ? '' : 'flex-xl-column flex-xxl-row justify-content-right'">
                                        <div class="ps-1">
                                            <p class="member-details mb-0">{{ item.firstname }} {{ item.surname }}</p>
                                            <p class="member-dept mb-0">{{ item.departmentName }}</p>
                                        </div>
                                        
                                        
                                        <div class="celebration-buttons">
                                            <div class="text-center d-flex justify-content-center">
                                                <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Send Points">
                                                    <i class="icon bi bi-star"></i>
                                                </button>
                                                <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Simply Say">
                                                    <i class="icon bi bi-hand-thumbs-up"></i>
                                                </button>
                                                <button @click="onLinkOut('Test')" class="bubble-header-buttons m-1 tt" data-bs-placement="bottom" title="Pay it forward">
                                                    <i class="icon bi bi-send"></i>
                                                </button>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    
                                    <div class="message-bubble pt-2">
                                        <div class="mb-2">
                                            <p class="text-center m-0 p-0" v-if="item.what === 'BDAY'">Happy Birthday!</p>
                                            <p class="text-center m-0 p-0" v-else>Happy Work-iversary!</p>
                                        </div>
                                        <div class="celebration-date pt-1" :class="item.celebrationText !== '' ? 'justify-content-start' : 'justify-content-end'">{{ item.bdayDate }}</div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="m-4 text-center pg-value" v-else>Seems there are no parties coming</div>
            </div>
        </div>
    </div>
</template>

<script>
const tooltips = document.querySelectorAll( '.tt' );
tooltips.forEach( t => {
  new bootstrap.Tooltip( t );
} );
</script>