<template>
    <div class="m-auto flex items-center mt-[96px!important] background-main">
        <div class="flex nav-item">
            <img
                class="icon-navige"
                src="/icons/icon-navige.svg"
                alt="navige" />
            <span class="font-bold title-item">List of item</span>
        </div>
    </div>

    <!-- menu -->
    <div class="m-auto flex items-center container-main">
        <div class="w-full">
            <div class="grid grid-cols-12 gap-[0.5rem]">
                <!-- Cột Menu chiếm 4 phần -->
                <div class="col-span-3">
                    <Menu />
                </div>

                <!-- Cột nội dung chiếm 8 phần -->
                <div class="col-span-9">
                    <SwiperComponent />
                </div>
            </div>
        </div>
    </div>

    <!-- banner -->
    <div class="m-auto flex items-center container-main">
        <div class="grid grid-cols-3 gap-[2rem] mt-[2rem]">
            <div
                class="col-span-1"
                v-for="(n, index) in bannerData"
                :key="index">
                <NuxtLink :to="n.url_link">
                    <img
                        :src="n.url_image"
                        :alt="n.url_image"
                        class="w-full h-full object-cover rounded-md" />
                </NuxtLink>
            </div>
        </div>
    </div>

    <!-- banner main -->
    <div class="m-auto flex items-center container-main">
        <img class="mt-[30px]"
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
