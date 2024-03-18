<template>
  <v-app-bar app>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="handleLogout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$emit('logout');
    }
  }
}
</script>
