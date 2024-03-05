<template>
  <div>
    <div class="white-background">
      <div class="row">
        <div class="col text-center content-container">
          <h2 class="header-text">GENGGAMAN AJAIB</h2>
          <p class="additional-text">Belanja Kapan Saja dan Dimana Saja</p>
          <button class="learn-more-btn">Learn More</button>
        </div>

        <div class="col d-flex align-items-center justify-content-end">
          <p><img class="large-image" :src="require('@/assets/produk.jpg')" alt="Product Image" /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.white-background {
  background-color: rgb(235, 235, 235);
  padding: 20px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.col {
  flex: 1;
}

.large-image {
  max-width: 85%;
  height: auto;
  margin-left: 20px;
}

.row .col.text-center .header-text {
  margin-bottom: 10px;
  font-size: 35px;
  font-weight: bold;
}

.row .col.text-center .additional-text {
  margin-bottom: 10px;
  font-size: 20px;
}

.learn-more-btn {
  margin-top: 5px; /* Sesuaikan dengan kebutuhan */
  padding: 10px 20px;
  font-size: 14px;
  background-color: #ed410c;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #ed410c;
}
</style>
