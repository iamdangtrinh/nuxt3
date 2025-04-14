<template>
    <div class="bg-[#f8f9fa] footer-container">
        <div class="m-auto container-main">
            <div class="flex justify-between w-full">
                <!-- Thông tin liên hệ -->
                <div>
                    <h2 class="text-2xl text-[#000] font-semibold">Thông tin liên hệ</h2>
                    <p>
                        <strong class="font-semibold info-address">Địa chỉ:</strong>
                        92 Nguyễn Trọng Tuyển, Phường 15, Phú Nhuận, TP.HCM
                    </p>
                    <p>
                        <strong class="font-semibold info-address">Email:</strong>
                        <a
                            href="mailto:yenmarket@mylifecompany.com.vn"
                            class="text-blue-600 hover:text-[#0d6efd]"
                            >yenmarket@mylifecompany.com.vn</a
                        >
                    </p>
                    <p>
                        <strong class="font-semibold info-address">Hotline:</strong>
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
                        <a href="#" class="text-blue-600 text-2xl"
                            ><i class="fab fa-facebook-square"></i
                        ></a>
                        <a href="#" class="text-pink-500 text-2xl"
                            ><i class="fab fa-instagram"></i
                        ></a>
                        <a href="#" class="text-red-600 text-2xl"
                            ><i class="fab fa-youtube"></i
                        ></a>
                    </div>
                    <div>
                        <img
                            src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/logo_bct.png"
                            alt="Đã thông báo Bộ Công Thương"
                            class="w-32" />
                    </div>
                </div>

                <!-- Hệ thống cửa hàng -->
                <div class="">
                    <img
                        src="/public/icons/new_store.webp"
                        alt="Store icon"
                        class="mx-auto" />
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
