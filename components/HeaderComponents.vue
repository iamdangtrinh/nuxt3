<template>
    <header class="header header-container">
        <div class="container-main">
            <div class="header-left">
                <NuxtImg
                    src="/logo-brand.png"
                    alt="Logo"
                    class="lazyLoad logo-brand"
                    width="160px" />
            </div>

            <div
                class="header-search flex align-center position-relative search-item">
                <input
                    type="text"
                    class="input-search"
                    placeholder="Key search" />
                <NuxtImg
                    width="20px"
                    class="cursor-pointer"
                    src="/icons/icon-find.svg"
                    alt="" />
            </div>

            <div class="header-hotline flex gap-[0.5rem]">
                <NuxtImg
                    src="/icons/icon-hotline.svg"
                    class="icon-primary cursor-pointer"
                    width="33px" />
                <div class="flex flex-col">
                    <span class="text-base font-bold">Hotline</span>
                    <span class="text-base font-bold mt-[-2px]">1900 066 890</span>
                </div>
            </div>

            <div class="header-user flex gap-[0.5rem]">
                <NuxtImg
                    class="icon-primary cursor-pointer"
                    src="/icons/icon-user.svg"
                    width="42px" />

                <div class="flex flex-col">
                    <span class="text-base font-bold">Hi,</span>
                    <span class="text-base font-bold mt-[-2px]">Login</span>
                </div>
            </div>

            <div class="header-right flex gap-[2rem]">
                <div class="btn-cart p-1 cursor-pointer">
                    <NuxtImg
                        class="icon-primary"
                        src="/icons/icon-cart.svg"
                        width="33px" />
                </div>
                <div class="flex gap-[0.75rem]">
                    <NuxtImg
                        class="cursor-pointer"
                        src="/icons/flag-vi.svg"
                        width="33px" />
                    <NuxtImg
                        class="cursor-pointer"
                        src="/icons/flag-en.svg"
                        width="33px" />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponents",
};
</script>
