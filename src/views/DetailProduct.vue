<template>
    <v-app>
        <!--Navbar Component-->
        <NavbarComponent />
        <v-main>
            <!--Breadcrumb Section-->
            <v-container>
                <!--Check wide Screen-->
                <BreadCrumb v-if="isWideScreen" />
            </v-container>
            <!--Detail Section-->
            <v-container>
                <!--Row Product-->
                <v-row>
                    <!--Coloumn Image-->
                    <v-col cols="12" md="6">
                        <v-card class="mx-auto" max-width="744" elevation="0">
                            <v-img v-if="products.image_url" :src="'../assets/images/' + products.image_url"
                                max-height="700"></v-img>
                        </v-card>
                    </v-col>
                    <!--Column Produk-->
                    <v-col cols="12" md="6">
                        <v-card class="mx-auto" max-width="744" elevation="0">
                            <v-card-title :style="{ fontSize: '32px', color: '#333' }">
                                {{ products.name }}
                            </v-card-title>

                            <v-card-actions>
                                <v-divider class="mr-2" vertical></v-divider>
                                <v-card-subtitle
                                    :style="{ fontSize: '18px', color: '#1794BC', border: '2px solid #1794BC', borderRadius: '10px', padding: '4px 8px', display: 'inline-block' }">
                                    {{ products.category }}
                                </v-card-subtitle>

                                <v-spacer></v-spacer>
                            </v-card-actions>

                            <v-card-subtitle :style="{ fontSize: '24px', color: '#ED3237' }" class="mb-2">
                                {{ formatPrice(products.price) }}
                            </v-card-subtitle>

                            <v-col cols="auto">
                                <div class="button-container">
                                    <div class="button-wrapper">
                                        <v-btn color="red" dark variant="outlined" height="33" elevation="0"
                                            width="320px">
                                            <img src="../assets/contact.png" width="20px" alt=""> Contact Us
                                        </v-btn>
                                    </div>
                                    <div class="button-wrapper">
                                        <v-btn color="red" outlined width="320px">Tampilkan Demo</v-btn>
                                    </div>
                                </div>
                            </v-col>
                        </v-card>
                    </v-col>
                    <!--End of Column Product-->
                </v-row>
                <!--End of Row Product-->
                <!--Start of Description Row-->
                <v-row>
                    <v-col cols="12" md="6">
                        <v-card class="mx-auto" max-width="744" elevation="0">
                            <v-card-title>
                                <h3>Tentang Produk</h3>
                            </v-card-title>
                            <v-card-text>
                                <p>{{ products.description }}</p>
                            </v-card-text>
                            <v-card-subtitle class="">
                                <h4>Features: </h4>
                                <p>{{ products.features }}</p>
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
                <!--End of Description Column-->
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from 'axios';

export default {
    name: "DetailProduct",
    components: {
        NavbarComponent,
        BreadCrumb,
    },
    data() {
        return {
            show: false,
            products: [],
            isWideScreen: true, // Menyimpan informasi lebar layar
        };
    },
    methods: {
        setProduct(data) {
            this.products = data
        },
        fetchProductData() {
            axios
                .get("http://localhost:5500/product/" + this.$route.params.id)
                .then((response) => {
                    this.setProduct(response.data.data)
                })
                .catch((error) => console.log("Error refreshing data", error));
        },
        handleResize() {
            // Memperbarui nilai isWideScreen saat ukuran layar berubah
            this.isWideScreen = window.innerWidth >= 990;
        },
        formatPrice(price) {
            return price.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0, 
            });
        },
    },
    mounted() {
        this.fetchProductData();
        // Menambahkan event listener untuk merespon perubahan ukuran layar
        window.addEventListener("resize", this.handleResize);
        // Memastikan isWideScreen diatur dengan benar saat halaman dimuat
        this.handleResize();
    }
};
</script>

<style scoped>
.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 32px;
}

.button-wrapper {
    margin-bottom: 10px;
}
</style>