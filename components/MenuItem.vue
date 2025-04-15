<template>
    <li class="relative">
        <div @click="handleClick">
            <span
                v-if="item.Children"
                class="flex justify-between px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none"
                :class="{
                    'text-red-600': item.Children,
                    'text-[#ca2628] flex justify-between ': isActive,
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
                class="block px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer select-none flex"
                :class="{ 'text-[#ca2628] ': isActive }">
                {{ item.GroupName }}
            </a>
        </div>

        <ul
            v-if="item.Children && isOpen"
            class="absolute top-0 left-full w-48 bg-[#f7f7f7] shadow-lg z-10">
            <MenuItem
                v-for="(child, index) in item.Children"
                :key="index"
                :item="child" />
        </ul>
    </li>
</template>

<script setup>
import { ref } from "vue";

// Nhận prop item
const { item } = defineProps({
    item: Object,
});

const isOpen = ref(false);

// Biến kiểm tra item đã được click
const isActive = ref(false);

// Hàm xử lý click
const handleClick = (e) => {
    if (item.Children) {
        e.preventDefault(); // Chặn việc chuyển trang
        isOpen.value = !isOpen.value; // Toggle hiển thị menu con

        // Đánh dấu parent là đã click
        isActive.value = !isActive.value;
    }
};
</script>
