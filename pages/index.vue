<template>
    <HeaderComponents />
    <ContainerComponent />
    <ProductListComponents />
    <FooterComponents />
</template>

<script setup>
useHead({
    title: "Yen Market",
});

import { onMounted } from "vue";

onMounted(() => {
    console.log("Trang đã được mounted xong (hydrate client-side)");
});
</script>
