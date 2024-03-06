<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider=">"
      class="custom-breadcrumbs"
    ></v-breadcrumbs>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data: () => ({
    items: [
      {
        text: 'List Product',
        disabled: false,
        href: '/',
      },
      {
        text: '',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),

  mounted() {
    this.fetchProductData();
  },

  methods: {
    fetchProductData() {
      axios
        .get("http://localhost:5500/product/" + this.$route.params.id)
        .then((response) => {
          // Ambil nama produk dari respons API
          const productName = response.data.data.name;

          // Perbarui item breadcrumbs dengan nama produk
          this.$set(this.items, 1, {
            text: productName,
            disabled: true,
            href: 'ProductName',
          });
        })
        .catch((error) => console.log("Error refreshing data", error));
    },
  },
};
</script>


<style scoped>
.custom-breadcrumbs  {
  color: red; /* Ganti dengan warna yang diinginkan */
}
.v-breadcrumbs {
  color: red;
}
.v-application a {color: red;}
</style>
