<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <Navbar/>
  <div class="bg-gray-900">
    <router-view />
  </div>
  <Footer/>
</template>

<style>
</style>
