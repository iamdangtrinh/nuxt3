<template>
    <div
        class="m-auto nav-item-box flex items-center mt-[96px!important] background-main">
        <div class="flex nav-item">
            <NuxtImg
                class="icon-navige"
                src="/icons/icon-navige.svg"
                alt="navige" />
            <span class="font-bold title-item text-lg">List of item</span>
        </div>
    </div>

    <!-- menu -->
    <div class="m-auto flex items-center container-main">
        <div class="w-full">
            <div class="grid grid-cols-12 gap-[0.5rem]">
                <!-- Cột Menu chiếm 4 phần -->
                <div class="col-span-3 hidden md:block">
                    <Menu />
                </div>

                <!-- Cột nội dung chiếm 8 phần -->
                <div class="col-span-12 md:col-span-9">
                    <SwiperComponent />
                </div>
            </div>
        </div>
    </div>

    <div class="container-main">
        <!-- Mobile: scroll ngang | Desktop: grid -->
        <div
            class="flex md:grid mt-[28px] md:grid-cols-3 gap-4 md:gap-[16px] overflow-x-auto md:overflow-visible md:px-0">
            <div
                class="flex-shrink-0 w-[83%] md:w-full"
                v-for="(n, index) in bannerData"
                :key="index">
                <NuxtLink :to="n.url_link">
                    <NuxtImg
                        :src="n.url_image"
                        :alt="n.url_image"
                        class="w-full h-full object-cover rounded-md" />
                </NuxtLink>
            </div>
        </div>
    </div>

    <!-- banner main -->
    <div class="m-auto flex items-center container-main">
        <NuxtImg
            class="mt-[36px]"
            src="https://mastererp.mylifecompany.com/Resources/Images/Object/Banner9114012025041546_S.jpg" />
    </div>
</template>

<script>
import menuData from "@/assets/menu.json"; // Đảm bảo đường dẫn đúng với file
import Menu from "~/components/Menu.vue";

export default {
    data() {
        return {
            bannerData: menuData.banner,
            bannerMain: menuData.bannerMain,
        };
    },
    name: "ContainerComponent",
};
</script>
