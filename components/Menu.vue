<template>
    <ul class="bg-[#f7f7f7] text-sm">
        <MenuItem v-for="(item, index) in flatMenu" :key="index" :item="item" />
    </ul>
</template>

<script setup>
import menuData from "@/assets/menu.json";
const flatMenu = menuData.menu[0];
</script>
