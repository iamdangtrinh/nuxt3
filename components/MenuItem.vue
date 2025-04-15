<!-- <template>
    <li class="relative">
        <div @click="handleClick">
            <span
                v-if="item.Children"
                class="flex text-lg justify-between px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none nav-item-link"
                :class="{
                    'text-[#ca2628]': isActiveItem || hasActiveChild,
                    'text-black': !isActiveItem && !hasActiveChild,
                }">
                {{ item.GroupName }}
                <NuxtImg
                    src="/icons/icon-arrow.svg"
                    width="12px"
                    alt="arrow"
                    class="rotate-270" />
            </span>

            <a
                v-else
                :href="`/category/${item.Slug}`"
                class="block px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none flex text-lg nav-item-link"
                :class="{ 'text-[#ca2628]': isActiveItem }">
                {{ item.GroupName }}
            </a>
        </div>

        <ul
            v-if="item.Children && isOpen"
            class="absolute top-0 left-full w-48 bg-[#f7f7f7] shadow-lg z-10">
            <MenuItem
                v-for="(child, index) in item.Children"
                :key="index"
                :item="child"
                :active-item-id="activeItemId"
                @activate="onActivate" />
        </ul>
    </li>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    item: Object,
    activeItemId: Number,
});

const emit = defineEmits(["activate"]);

const isOpen = ref(false);
const hasActiveChildren = ref(false);

// Check if this item is currently active
const isActiveItem = computed(() => {
    return props.activeItemId === props.item.GroupID;
});

// Check if any children are active
const hasActiveChild = computed(() => {
    return hasActiveChildren.value;
});

// Handle child item activation
function onActivate(id, isChildActive) {
    hasActiveChildren.value = isChildActive;
    emit("activate", id, id === props.item.GroupID || isChildActive);
}

function handleClick() {
    if (props.item.Children) {
        isOpen.value = !isOpen.value;
        // Activate this item
        emit("activate", props.item.GroupID, true);
    } else {
        // Activate this item
        emit("activate", props.item.GroupID, true);
    }
}
</script> -->

<template>
    <li class="relative">
        <div @click="handleClick">
            <span
                v-if="item.Children"
                class="flex text-lg justify-between px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none nav-item-link"
                :class="{
                    'text-[#ca2628]': isActiveItem || hasActiveChild,
                    'text-black': !isActiveItem && !hasActiveChild,
                }">
                {{ item.GroupName }}
                <NuxtImg
                    src="/icons/icon-arrow.svg"
                    width="12px"
                    alt="arrow"
                    class="rotate-270" />
            </span>

            <a
                v-else
                :href="`/category/${item.Slug}`"
                class="block px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none flex text-lg nav-item-link"
                :class="{ 'text-[#ca2628]': isActiveItem }">
                {{ item.GroupName }}
            </a>
        </div>

        <ul
            v-if="item.Children && isOpen"
            class="absolute top-0 left-full w-48 bg-[#f7f7f7] shadow-lg z-10">
            <MenuItem
                v-for="(child, index) in item.Children"
                :key="index"
                :item="child"
                :active-item-id="activeItemId"
                :open-item-id="openItemId"
                @activate="onActivate"
                @toggle-menu="onToggleMenu" />
        </ul>
    </li>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
    item: Object,
    activeItemId: Number,
    openItemId: Number,
});

const emit = defineEmits(["activate", "toggle-menu"]);

// Instead of local isOpen, derive from parent openItemId
const isOpen = computed(() => {
    return props.openItemId === props.item.GroupID;
});

const hasActiveChildren = ref(false);

// Check if this item is currently active
const isActiveItem = computed(() => {
    return props.activeItemId === props.item.GroupID;
});

// Check if any children are active
const hasActiveChild = computed(() => {
    return hasActiveChildren.value;
});

// Handle child item activation
function onActivate(id, isChildActive) {
    hasActiveChildren.value = isChildActive;
    emit("activate", id, id === props.item.GroupID || isChildActive);
}

// Handle child menu toggle
function onToggleMenu(id) {
    emit("toggle-menu", id);
}

function handleClick() {
    if (props.item.Children) {
        // Toggle this menu through the parent
        emit("toggle-menu", props.item.GroupID);
        // Activate this item
        emit("activate", props.item.GroupID, true);
    } else {
        // Activate this item
        emit("activate", props.item.GroupID, true);
    }
}
</script>
