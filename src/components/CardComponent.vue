<template>
  <router-link :to="'/product/' + product.id" tag="div" class="router-link">
    <v-card class="mx-1 my-1" max-width="450" elevation-0>
      <v-img height="200px" :src="'assets/images/' + product.image_url" cover></v-img>
      <v-card-title>
        {{ product.name }}
      </v-card-title>
      <v-card-subtitle>
        Rp. {{ product.price }}
      </v-card-subtitle>
    </v-card>
  </router-link>
</template>


<script>

export default {
  name: "CardComponent",
  props: ["product"],
}


</script>

<style scoped>
.router-link {
  text-decoration: none;
  color: inherit; /* Sesuaikan dengan warna teks yang diinginkan */
}
</style>