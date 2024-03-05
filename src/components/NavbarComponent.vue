<template>
    <v-app-bar app color="white" height="78" elevation="0">
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col cols="auto">
            <img src="../assets/logosahaware.jpg" alt="" width="80">
          </v-col>
          <v-col cols="auto">
            <div class="button">
              <a href=""><img src="../assets/tas.png" alt="" width="25" height="30"></a> 
              <v-btn color="white" text-color="red" variant="outlined" height="33" elevation="1">Button</v-btn>
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
  .container {
    display: flex;
    justify-content: space-between; /* Mengatur ruang antara elemen menjadi merata */
    align-items: center; /* Menyamakan ketinggian elemen di tengah-tengah */
    margin-left: 300px;
    margin-right: 300px;
}

.button{
    display: flex;
    gap: 15px;
}

@media screen and (max-width: 1600px) {
    .container {
      margin-left: 60px; /* Mengurangi margin pada perangkat dengan lebar maksimum 600px */
      margin-right: 60px; /* Mengurangi margin pada perangkat dengan lebar maksimum 600px */
    }
}

@media screen and (max-width: 800px) {
    .container {
      margin-left: 20px; /* Mengurangi margin pada perangkat dengan lebar maksimum 600px */
      margin-right: 20px; /* Mengurangi margin pada perangkat dengan lebar maksimum 600px */
    }
}
  </style>
  