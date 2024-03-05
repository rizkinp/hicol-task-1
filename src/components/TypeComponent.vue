<template>
    <v-container fluid>
      <p>Product Type: {{ radios }}</p>
      <v-radio-group v-model="radios">
        <v-radio label="Company Profile Website" value="one"></v-radio>
      </v-radio-group>
    </v-container>
  </template>


<script>

  export default{
    name: "TypeComponent",
  }

</script>

<style scoped>

    *{
        width: 100%;
    }

</style>