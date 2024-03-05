<template>
  <v-app>
    <navbar-components></navbar-components>
    <v-main>
      <v-container>
        <hero-section></hero-section>
      </v-container>
      <br><br>
      <v-container>
        <div class="main">
          <type-component></type-component>
          <v-row justify="end">
            <card-component v-for="index in 20" :key="index"></card-component>
          </v-row>
        </div>
      </v-container>
    </v-main>
    <hr>
    <footer-section></footer-section>
  </v-app>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import CardComponent from '@/components/CardComponent.vue'
import TypeComponent from '@/components/TypeComponent.vue'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',

    components: {
    "navbar-components": NavbarComponent,
    "hero-section": HeroSection,
    "footer-section": FooterSection,
    "card-component": CardComponent,
    "type-component": TypeComponent,
    },
  }
</script>

<style scoped>

.card{
  display: flex;
}

.main{
  display: flex;
  justify-items: center;
}


</style>