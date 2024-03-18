<template>
  <v-app>
    <!--Navbar Components-->
    <navbar-components @logout="logout" />
    <v-main>
      <!--Hero Section-->
      <hero-section></hero-section>
      <!--End of Hero Section-->
      <br /><br />
      <!--Card Section-->
      <v-container>
        <v-row>
          <!--Condition if Mobile-->
          <v-col v-if="shouldDisplayTypeComponent" cols="12" md="4">
            <type-component></type-component>
          </v-col>
          <!--Condition if Desktop-->
          <v-col cols="12" md="8">
            <v-row>
              <!--Condition if Mobile-->
              <v-col v-for="item in products" :key="item.id" cols="12" sm="6" md="4">
                <!--Condition if Desktop-->
                <card-component :product="item"></card-component>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <!--End of Card Section-->
    </v-main>
    <hr />
    <!--Footer Section-->
    <footer-section></footer-section>
  </v-app>
</template>

<script>
import axios from "@/plugins/axios"; // Menggunakan konfigurasi Axios dari plugin
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroSection from "@/components/HeroSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import CardComponent from "@/components/CardComponent.vue";
import TypeComponent from "@/components/TypeComponent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    "navbar-components": NavbarComponent,
    "hero-section": HeroSection,
    "footer-section": FooterSection,
    "card-component": CardComponent,
    "type-component": TypeComponent,
  },

  data() {
    return {
      products: [],
      shouldDisplayTypeComponent: true,
    };
  },

  methods: {
    setProduct(data) {
      this.products = data;
    },
    fetchProductData() {
      axios
        .get("/product") // Menggunakan base URL yang telah ditentukan di konfigurasi Axios
        .then((response) => {
          // Ambil nama produk dari respons API
          this.setProduct(response.data.data);
          console.log(this.products);
        })
        .catch((error) => console.log("Error refreshing data", error));
    },
    checkScreenWidth() {
      // Update the shouldDisplayTypeComponent based on the screen width
      this.shouldDisplayTypeComponent = window.innerWidth > 990;
    },
    logout() {
      // Hapus token dari localStorage
      localStorage.removeItem('token');
      this.$router.push('/login'); 
      // Redirect ke halaman login atau lakukan halaman lain yang diperlukan
    },
  },

  mounted() {
    this.fetchProductData();
    this.checkScreenWidth();
    // Listen for window resize events to update the screen width dynamically
    window.addEventListener("resize", this.checkScreenWidth);
  },

  beforeDestroy() {
    // Remove the resize event listener when the component is destroyed
    window.removeEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  justify-items: center;
}

/* Media Query for Mobile Devices */
@media screen and (max-width: 990px) {
  .main {
    flex-direction: column;
  }

  .card {
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
