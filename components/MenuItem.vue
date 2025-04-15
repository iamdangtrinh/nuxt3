<template>
    <li class="relative">
        <div @click="handleClick">
            <span
                v-if="item.Children"
                class="hover:text-[#ca2628] flex text-lg justify-between px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none nav-item-link"
                :class="{
                    'text-[#ca2628]':
                        isActiveItem || hasActiveChild || isActiveAncestor,
                    'text-black':
                        !isActiveItem && !hasActiveChild && !isActiveAncestor,
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
                class="hover:text-[#ca2628] block px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none flex text-lg nav-item-link"
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
                :open-menu-ids="openMenuIds"
                :active-ancestors="activeAncestors"
                :parent-id="item.GroupID"
                @activate="onActivate"
                @toggle-menu="onToggleMenu"
                @set-active-ancestors="onSetActiveAncestors" />
        </ul>
    </li>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
    item: Object,
    activeItemId: Number,
    openMenuIds: Object, 
    activeAncestors: {
        type: Object,
        default: () => new Set(),
    },
    parentId: {
        type: Number,
        default: null,
    },
});

const emit = defineEmits(["activate", "toggle-menu", "set-active-ancestors"]);

const isOpen = computed(() => {
    return props.openMenuIds && props.openMenuIds.has(props.item.GroupID);
});

const hasActiveChildren = ref(false);

watch(
    () => props.activeItemId,
    (newId) => {
        if (newId !== props.item.GroupID) {
            hasActiveChildren.value = false;
        }
    }
);

const isActiveAncestor = computed(() => {
    return (
        props.activeAncestors && props.activeAncestors.has(props.item.GroupID)
    );
});

const isActiveItem = computed(() => {
    return props.activeItemId === props.item.GroupID;
});

const hasActiveChild = computed(() => {
    return hasActiveChildren.value;
});

function onSetActiveAncestors(ancestorIds) {
    if (props.parentId) {
        const newAncestors = new Set(ancestorIds);
        newAncestors.add(props.item.GroupID);
        emit("set-active-ancestors", newAncestors);
    }
}

function onActivate(id, isActive, isChildActivation = false) {
    if (isChildActivation || id !== props.item.GroupID) {
        hasActiveChildren.value = isActive;
    }

    emit("activate", id, isActive, isChildActivation);
}

function onToggleMenu(id) {
    emit("toggle-menu", id);
}

function handleClick() {
    if (props.item.Children) {
        emit("toggle-menu", props.item.GroupID);
        emit("activate", props.item.GroupID, true);
    } else {
        emit("activate", props.item.GroupID, true);

        const ancestors = new Set();
        if (props.parentId) {
            ancestors.add(props.parentId);
            emit("set-active-ancestors", ancestors);
        }
    }
}
</script>
