<template>
    <div
        v-if="isLoading"
        class="fixed inset-0 flex justify-center items-center bg-white z-50">
        <NuxtImg
            src="/logo-brand.png"
            width="210px"
            loading="lazy"
            alt="Loading" />
    </div>

    <div v-else>
        <HeaderComponents />
        <ContainerComponent />
        <ProductListComponents />
        <FooterComponents />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
useHead({
    title: "Yen Market",
    meta: [
        {
            name: "description",
            content:
                "Yen Market cung cấp các sản phẩm tổ yến, nước yến, và thực phẩm bổ dưỡng giúp nâng cao sức khỏe cho mọi gia đình.",
        },
        {
            name: "keywords",
            content:
                "Yen Market, tổ yến, yến sào, nước yến, thực phẩm chức năng",
        },
        {
            property: "og:title",
            content: "Yen Market - Thực phẩm bổ dưỡng từ tổ yến",
        },
        {
            property: "og:description",
            content:
                "Khám phá các sản phẩm yến sào cao cấp tại Yen Market – nâng tầm sức khỏe từ thiên nhiên.",
        },
        {
            property: "og:image",
            content: "/logo-brand.png", // Thay bằng ảnh thật của bạn
        },
        {
            property: "og:url",
            content: "https://nuxt3-phi-six.vercel.app/",
        },
    ],
});

const isLoading = ref(true);

onMounted(() => {
    console.log("Trang đã được mounted xong (hydrate client-side)");
    setTimeout(() => {
        isLoading.value = false;
    }, 500); // để transition nhẹ, có thể bỏ nếu không cần
});
</script>
