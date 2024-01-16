<script setup>
import { computed, defineAsyncComponent } from 'vue';
import '../assets/scss/components/home-page-button.scss';

const props = defineProps( {
  routeLink: {
    type: String ,
    required: true,
  } ,
  buttonTitle: {
    type: String ,
    required: true,
  } ,
  buttonText: {
    type: String ,
    required: true,
  } ,
  sideButtonText: {
    type: String ,
    required: true,
  } ,
  buttonSvg: {
    type: String ,
    required: true,
  } ,
  isManager: {
    type: Boolean ,
    default: false,
  },
} );

const icon = computed(() => {
    return defineAsyncComponent(() => import(`../assets/svg/${props.buttonSvg }.vue`));
});

</script>

<template>
    <div class="home-page-button">
        <router-link :to="{path: props.routeLink}">
            <div class="home-page-button-wrapper" :class="props.isManager ? 'mng-button' : 'user-button'">
                <div class="home-page-button-icon">
                    <div class="icon-wrapper">
                        <component :is="icon" overflow="visible"/>
                    </div>
                </div>
                <div class="home-page-button-body">
                    <div class="body-wrapper">
                        <div class="title m-0 mb-1">{{ props.buttonTitle }}</div>
                        <div class="text m-0">{{ props.buttonText }}</div>
                    </div>
                </div>
                <div class="home-page-side-button" :class="props.isManager ? 'mng-side-button' : 'user-side-button'">
                    <div>{{ props.sideButtonText }}</div>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </router-link>
    </div>
</template>

 