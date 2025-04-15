<template>
    <div class="bg-[#f8f9fa] footer-container">
        <div class="m-auto container-main">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <!-- Thông tin liên hệ -->
                <div>
                    <h2 class="text-2xl text-[#000] font-semibold">
                        Thông tin liên hệ
                    </h2>
                    <p>
                        <strong class="font-semibold info-address"
                            >Địa chỉ:</strong
                        >
                        92 Nguyễn Trọng Tuyển, Phường 15, Phú Nhuận, TP.HCM
                    </p>
                    <p>
                        <strong class="font-semibold info-address"
                            >Email:</strong
                        >
                        <a
                            href="mailto:yenmarket@mylifecompany.com.vn"
                            class="text-blue-600 hover:text-[#0d6efd]"
                            >yenmarket@mylifecompany.com.vn</a
                        >
                    </p>
                    <p>
                        <strong class="font-semibold info-address"
                            >Hotline:</strong
                        >
                        <a
                            href="tel:1900066890"
                            class="text-blue-600 hover:text-[#0d6efd]"
                            >1900 066 890</a
                        >
                    </p>
                    <p class="text-[16.5px]">
                        Mã số doanh nghiệp: 0317179405. Đăng ký lần đầu:
                        20/09/2008
                    </p>
                </div>

                <!-- Kết nối -->
                <div>
                    <h2 class="text-2xl font-semibold text-[#000]">
                        Kết nối với chúng tôi
                    </h2>
                    <div class="flex space-x-4 mb-4">
                        <a href="#" class="text-blue-600 text-2xl">
                            <NuxtImg src="/icons/facebook.webp" alt="" />
                        </a>
                        <a href="#" class="text-pink-500 text-2xl">
                            <NuxtImg src="/icons/instagram.webp" alt="" />
                        </a>
                        <a href="#" class="text-red-600 text-2xl">
                            <NuxtImg src="/icons/youtube.webp" alt="" />
                        </a>
                    </div>
                    <div>
                        <NuxtImg
                            src="/icons/logo_bct.webp"
                            alt="Đã thông báo Bộ Công Thương"
                            class="w-[187px]" />
                    </div>
                </div>

                <!-- Hệ thống cửa hàng -->
                <div class="md:text-left">
                    <NuxtImg
                        src="/icons/new_store.webp"
                        alt="Store icon"
                        class="md:mx-0" />
                    <p class="text-[#4c4c4c] mt-[0.5rem]">Hệ thống cửa hàng</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComponents",
};
</script>
