<script setup>
    import { useStore } from '@/stores/store';
    
    const store = useStore();
    
    import '../assets/scss/components/app-home-banner.scss';
</script>

<template>

    <div class="banner-wrapper">
        <div class="banner-bg-colour" :style="`background: ${store.bannerBgColor}`"/>
        
        <div class="banner-image-bg">
            <img :src="store.image(store.bannerBgImage)" alt="hero banner image" class="img-fluid"/>
        </div>
        
        <div class="banner-image" v-if="store.bannerImage">
            <img :src="store.image(store.bannerImage)" alt="hero banner image" class="img-fluid"/>
        </div>
        
        <div class="banner-text" :style="{color:store.bannerTextColor}">
            {{store.bannerText}}
        </div>
    </div>

</template>
