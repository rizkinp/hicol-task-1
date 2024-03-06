<template>
  <div class="container">
      <p>2022 copyright Blitzkrieg</p>
      <p>contact us</p>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
}

@media screen and (max-width: 990px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
  }
}
</style>
