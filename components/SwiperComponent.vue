<template>
    <div class="pt-[.75rem] z-0 swiper-container-component">
        <Swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: true,
            }"
            :pagination="{
                clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper p-1">
            <SwiperSlide v-for="n in slides" :key="n">
                <NuxtLink :to="n.url_link">
                    <NuxtImg :src="`${n.url_image}`" width="1920"  :alt="`${n.url_image}`" class="w-full h-full" />
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation];

import slidesData from "@/assets/menu.json";
const slides = slidesData.slides;
</script>

<style scoped>
.mySwiper {
    width: 100%;
    height: 100%;
}
</style>
