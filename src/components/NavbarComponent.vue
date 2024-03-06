<template>
  <v-app-bar app color="white" height="78" elevation="0">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <div class="brand-logo">
            <img src="../assets/logosahaware.jpg" class="logo" alt="" width="80">
            <p><b>SAHAWARE DIGITAL</b></p>
          </div>
        </v-col>
        <v-col cols="auto">
          <div class="button">
            <a href=""><img src="../assets/tas.png" alt="" width="25" height="30"></a>
            <v-btn color="white" id="tombol1" text-color="red" variant="outlined" height="33"
              elevation="1">Button</v-btn>
            <v-btn color="red" dark variant="outlined" height="33" elevation="0">Daftar</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>
p {
  margin-top: 22px;
}

.brand-logo {
  display: flex;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
  /* Mengatur ruang antara elemen menjadi merata */
  align-items: center;
  /* Menyamakan ketinggian elemen di tengah-tengah */
  margin-left: 300px;
  margin-right: 300px;
}

.button {
  display: flex;
  gap: 15px;
}

@media screen and (max-width: 1600px) {
  .container {
    margin-left: 60px;
    /* Mengurangi margin pada perangkat dengan lebar maksimum 600px */
    margin-right: 60px;
    /* Mengurangi margin pada perangkat dengan lebar maksimum 600px */
  }
}

@media screen and (max-width: 590px) {
  .brand-logo {
    display: none;
  }

  .container {
    margin-left: 200px;
    margin-right: 150px;
  }

  #tombol1 {
    display: none;
  }
}
</style>