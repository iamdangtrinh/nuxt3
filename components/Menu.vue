<!-- <template>
    <ul class="bg-[#f7f7f7] text-sm">
        <MenuItem
            v-for="(item, index) in menuItems"
            :key="index"
            :item="item"
            :active-item-id="activeItemId"
            :open-menu-ids="openMenuIds"
            @activate="setActiveItem"
            @toggle-menu="toggleMenu" />
    </ul>
</template>

<script setup>
import menuData from "@/assets/menu.json";
import { ref } from "vue";

const activeItemId = ref(null);
const openMenuIds = ref(new Set()); // Use a Set to track multiple open menus

function setActiveItem(id) {
    activeItemId.value = id;
}

function toggleMenu(id) {
    // Toggle this specific menu ID
    if (openMenuIds.value.has(id)) {
        // If it's already open, close it and all its children
        const newOpenMenus = new Set();
        // Keep only the menus that aren't the toggled menu or its children
        openMenuIds.value.forEach(menuId => {
            if (menuId !== id) {
                newOpenMenus.add(menuId);
            }
        });
        openMenuIds.value = newOpenMenus;
    } else {
        // If it's closed, open it
        const newOpenMenus = new Set(openMenuIds.value);
        newOpenMenus.add(id);
        openMenuIds.value = newOpenMenus;
    }
}

// Your menu data
const menuItems = ref(menuData.menu);
</script> -->

<template>
    <ul class="bg-[#f7f7f7] text-sm">
        <MenuItem
            v-for="(item, index) in menuItems"
            :key="index"
            :item="item"
            :active-item-id="activeItemId"
            :open-menu-ids="openMenuIds"
            @activate="setActiveItem"
            @toggle-menu="toggleMenu" />
    </ul>
</template>

<script setup>
import menuData from "@/assets/menu.json";
const flatMenu = menuData.menu;
import { ref } from "vue";

const activeItemId = ref(null);
const openMenuIds = ref(new Set()); // Use a Set to track multiple open menus

// Keep track of top-level menu IDs
const topLevelMenuIds = flatMenu.map((item) => item.GroupID);

function setActiveItem(id) {
    activeItemId.value = id;
}

function toggleMenu(id) {
    // Check if this is a top-level menu item
    const isTopLevel = topLevelMenuIds.includes(id);

    // Toggle this specific menu ID
    if (openMenuIds.value.has(id)) {
        // If it's already open, close it and all its children
        const newOpenMenus = new Set();
        // Keep only the menus that aren't the toggled menu or its children
        openMenuIds.value.forEach((menuId) => {
            if (menuId !== id) {
                newOpenMenus.add(menuId);
            }
        });
        openMenuIds.value = newOpenMenus;
    } else {
        // If it's closed, open it
        const newOpenMenus = new Set(openMenuIds.value);

        // If this is a top-level menu, close other top-level menus
        if (isTopLevel) {
            topLevelMenuIds.forEach((topId) => {
                newOpenMenus.delete(topId);
            });
        }

        newOpenMenus.add(id);
        openMenuIds.value = newOpenMenus;
    }
}

// Your menu data
const menuItems = ref(flatMenu);
</script>
