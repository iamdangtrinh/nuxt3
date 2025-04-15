<template>
    <div
        v-if="isLoading"
        class="fixed inset-0 flex justify-center items-center bg-white z-50">
        <NuxtImg src="/logo-brand.png" width="200px" loading="lazy" alt="Loading" />
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
useHead({ title: "Yen Market" });

const isLoading = ref(true);

onMounted(() => {
    console.log("Trang đã được mounted xong (hydrate client-side)");
    setTimeout(() => {
        isLoading.value = false;
    }, 300); // để transition nhẹ, có thể bỏ nếu không cần
});
</script>
