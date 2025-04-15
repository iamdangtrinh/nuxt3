<template>
    <ul class="bg-[#f7f7f7] text-sm">
        <MenuItem
            v-for="(item, index) in menuItems"
            :key="index"
            :item="item"
            :active-item-id="activeItemId"
            :open-menu-ids="openMenuIds"
            :active-ancestors="activeAncestors"
            @activate="setActiveItem"
            @toggle-menu="toggleMenu" />
    </ul>
</template>

<script setup>
// import menuData from "@/assets/menu.json";
// const flatMenu = menuData.menu;
// import { ref } from "vue";

// const activeItemId = ref(null);
// const openMenuIds = ref(new Set());

// const topLevelMenuIds = flatMenu.map((item) => item.GroupID);

// function setActiveItem(id, isActive, isChildActivation = false) {
//     activeItemId.value = id;

//     activeAncestors.value.clear();

//     if (isActive) {
//         if (isChildActivation) {
//             let currentId = id;
//             while (childToParentMap.value.has(currentId)) {
//                 const parentId = childToParentMap.value.get(currentId);
//                 activeAncestors.value.add(parentId);
//                 currentId = parentId;
//             }
//         }
//     }
// }

// function toggleMenu(id) {
//     const isTopLevel = topLevelMenuIds.includes(id);

//     if (openMenuIds.value.has(id)) {
//         const newOpenMenus = new Set();
//         openMenuIds.value.forEach((menuId) => {
//             if (menuId !== id) {
//                 newOpenMenus.add(menuId);
//             }
//         });
//         openMenuIds.value = newOpenMenus;
//     } else {
//         const newOpenMenus = new Set(openMenuIds.value);

//         if (isTopLevel) {
//             topLevelMenuIds.forEach((topId) => {
//                 newOpenMenus.delete(topId);
//             });
//         }

//         newOpenMenus.add(id);
//         openMenuIds.value = newOpenMenus;
//     }
// }

// const menuItems = ref(flatMenu);

import menuData from "@/assets/menu.json";
const flatMenu = menuData.menu;
import { ref, onMounted } from "vue";

const activeItemId = ref(null);
const openMenuIds = ref(new Set());
const activeAncestors = ref(new Set());
const childToParentMap = ref(new Map());

// Build the child-to-parent relationship map
onMounted(() => {
    buildChildToParentMap(flatMenu);
});

function buildChildToParentMap(items, parentId = null) {
    items.forEach((item) => {
        if (parentId !== null) {
            childToParentMap.value.set(item.GroupID, parentId);
        }

        if (item.Children && item.Children.length > 0) {
            buildChildToParentMap(item.Children, item.GroupID);
        }
    });
}

const topLevelMenuIds = flatMenu.map((item) => item.GroupID);

function setActiveItem(id, isActive, isChildActivation = false) {
    activeItemId.value = id;

    activeAncestors.value.clear();

    if (isActive) {
        if (isChildActivation) {
            let currentId = id;
            while (childToParentMap.value.has(currentId)) {
                const parentId = childToParentMap.value.get(currentId);
                activeAncestors.value.add(parentId);
                currentId = parentId;
            }
        }
    }
}

function toggleMenu(id) {
    const isTopLevel = topLevelMenuIds.includes(id);
    const parentId = childToParentMap.value.get(id);

    if (openMenuIds.value.has(id)) {
        // Close this menu
        const newOpenMenus = new Set();
        openMenuIds.value.forEach((menuId) => {
            if (menuId !== id) {
                newOpenMenus.add(menuId);
            }
        });
        openMenuIds.value = newOpenMenus;
    } else {
        const newOpenMenus = new Set(openMenuIds.value);

        // Close sibling menus at the same level
        if (isTopLevel) {
            // For top-level items, close other top-level menus
            topLevelMenuIds.forEach((topId) => {
                newOpenMenus.delete(topId);
            });
        } else if (parentId) {
            // For non-top-level items, close sibling menus with the same parent
            openMenuIds.value.forEach((menuId) => {
                if (
                    childToParentMap.value.get(menuId) === parentId &&
                    menuId !== id
                ) {
                    newOpenMenus.delete(menuId);
                }
            });
        }

        newOpenMenus.add(id);
        openMenuIds.value = newOpenMenus;
    }
}

const menuItems = ref(flatMenu);
</script>
