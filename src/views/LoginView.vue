<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        axios.post('http://localhost:8080/auth/login', {
            email: this.email,
            password: this.password
          })
          .then(response => {
            localStorage.setItem('token', response.data.token);
            this.$router.push('/'); 
          })
          .catch(error => {
            console.error('Login failed:', error);
          });
      }
    }
  };
  </script>
  