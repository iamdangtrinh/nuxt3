<template>
    <div class="m-auto items-center container-main">
        <div class="">
            <div class="">
                <h3
                    class="text-[#212529] uppercase font-bold text-xl mt-[0.9rem] mb-[0.9rem]">
                    Fish and seafood
                </h3>

                <div class="list-item">
                    <div
                        class="item-info"
                        v-for="n in visibleProductListFish"
                        :key="n">
                        <div class="item-picture">
                            <div class="item-image">
                                <img :src="n.image" :alt="n.name" />
                            </div>
                            <div class="item-quantity">
                                <div class="btn-plus bg-primary">
                                    <img
                                        src="/public/icons/icon-cart.svg"
                                        alt="cart"
                                        width="25px"
                                        height="25px" />
                                </div>
                            </div>
                        </div>
                        <div class="item-name">
                            <div
                                class="product-name text-lg font-bold line-clamp-2 overflow-hidden text-ellipsis">
                                {{ n.name }}
                            </div>

                            <div class="product-price">
                                <span class="price">{{
                                    formatCurrency(n.price)
                                }}</span>
                                <span class="currency">/ {{ n.currency }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- see all -->
                <div class="button-see-all">
                    <div class="see-all mt-[16px]">
                        <p href="" class="see-all-button">See all</p>
                    </div>
                </div>
            </div>

            <!-- product 2 -->
            <div class="mt-[12px]">
                <h3
                    class="text-[#212529] uppercase font-bold text-xl mt-[0.9rem] mb-[0.9rem]">
                    FROZEN MEAT
                </h3>

                <div class="list-item">
                    <div
                        class="item-info"
                        v-for="n in visibleProductListMeat"
                        :key="n">
                        <div class="item-picture">
                            <div class="item-image">
                                <img :src="n.image" :alt="n.name" />
                            </div>
                            <div class="item-quantity">
                                <div class="btn-plus bg-primary">
                                    <img
                                        src="/public/icons/icon-cart.svg"
                                        alt="cart"
                                        width="25px"
                                        height="25px" />
                                </div>
                            </div>
                        </div>
                        <div class="item-name">
                            <div
                                class="product-name text-lg font-bold line-clamp-2 overflow-hidden text-ellipsis">
                                {{ n.name }}
                            </div>
                            <div class="product-price">
                                <span class="price">{{
                                    formatCurrency(n.price)
                                }}</span>
                                <span class="currency">/ {{ n.currency }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- see all -->
                <div class="button-see-all">
                    <div class="see-all mt-[16px]">
                        <p href="" class="see-all-button">See all</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import productList from "@/assets/menu.json";

export default {
    name: "ProductListComponents",
    data() {
        return {
            productListData: productList.productsListFish,
            productsListMeat: productList.productsListMeat,
            isMobile: false,
        };
    },
    computed: {
        visibleProductListFish() {
            return this.isMobile
                ? this.productListData.slice(0, 4)
                : this.productListData;
        },

        visibleProductListMeat() {
            return this.isMobile
                ? this.productsListMeat.slice(0, 4)
                : this.productsListMeat;
        },
    },
    mounted() {
        this.isMobile = window.innerWidth <= 768;
        window.addEventListener("resize", this.checkMobile);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
    },
};
</script>
