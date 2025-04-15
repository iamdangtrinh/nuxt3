<!-- <template>
    <ul class="bg-[#f7f7f7] text-sm">
        <MenuItem
            v-for="(item, index) in menuItems"
            :key="index"
            :item="item"
            :active-item-id="activeItemId"
            @activate="setActiveItem" />
    </ul>
</template>

<script setup>
import menuData from "@/assets/menu.json";
const flatMenu = menuData.menu[0];

import { ref } from "vue";

const activeItemId = ref(null);

function setActiveItem(id) {
    activeItemId.value = id;
}

const menuItems = ref(flatMenu);
</script> -->

<template>
    <ul class="bg-[#f7f7f7] text-sm">
        <MenuItem
            v-for="(item, index) in menuItems"
            :key="index"
            :item="item"
            :active-item-id="activeItemId"
            :open-item-id="openItemId"
            @activate="setActiveItem"
            @toggle-menu="toggleMenu" />
    </ul>
</template>

<script setup>
import menuData from "@/assets/menu.json";
const flatMenu = menuData.menu[0];

import { ref } from "vue";

const activeItemId = ref(null);
const openItemId = ref(null);

function setActiveItem(id) {
    activeItemId.value = id;
}

function toggleMenu(id) {
    // If clicking the same menu that's already open, close it
    if (openItemId.value === id) {
        openItemId.value = null;
    } else {
        // Otherwise, open the clicked menu and close any other
        openItemId.value = id;
    }
}

// Your menu data
const menuItems = ref(flatMenu);
</script>