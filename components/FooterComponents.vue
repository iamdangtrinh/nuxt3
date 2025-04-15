<template>
    <div class="bg-[#f8f9fa] footer-container">
        <div class="m-auto container-main md:w-[1320px]">
            <div
                class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 w-full">
                <!-- Thông tin liên hệ -->
                <div class="">
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
                <div class="">
                    <h2 class="text-2xl font-semibold text-[#000]">
                        Kết nối với chúng tôi
                    </h2>
                    <div class="flex gap-[4px] mb-4 mt-1">
                        <a href="#" class="text-2xl">
                            <NuxtImg
                                width="32px"
                                src="/icons/facebook.webp"
                                alt="facebook" />
                        </a>
                        <a href="#" class="text-2xl">
                            <NuxtImg
                                width="32px"
                                src="/icons/instagram.webp"
                                alt="instagram" />
                        </a>
                        <a href="#" class="text-2xl">
                            <NuxtImg
                                width="32px"
                                src="/icons/youtube.webp"
                                alt="youtube" />
                        </a>
                    </div>
                    <div>
                        <NuxtImg
                            src="/icons/logo_bct.webp"
                            alt="Đã thông báo Bộ Công Thương"
                            width="187px"
                            class="w-full max-w-[187px]" />
                    </div>
                </div>

                <!-- Hệ thống cửa hàng -->
                <div class="md:text-left">
                    <NuxtImg
                        src="/icons/new_store.webp"
                        alt="Store icon"
                        width="380"
                        class="w-[274px]" />
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
