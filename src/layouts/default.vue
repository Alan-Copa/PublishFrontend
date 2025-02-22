<template>
  <v-app>
    <v-parallax
    src="../parallax/spacehoriz1.jpg"
    >
      <!-- Updated App Bar -->
      <AppBar class="d-none d-md-flex" @toggle-drawer="drawer = !drawer" />

      <!-- Navigation Drawer -->
      <!-- <ColumnNavBar :drawer.sync="drawer" v-model="drawer" /> -->

      <!-- Mobile Navbar -->
      <MobileNavBar class="d-flex d-md-none" />

      <!-- Main Content -->
      <v-main class="main-content">
        <router-view />
      </v-main>

      <!-- Footer -->
      <!-- <AppFooter /> -->

   </v-parallax>
  </v-app>
</template>

<script setup>
import { ref } from "vue"; // Import ref
import AppBar from "@/components/DefaultLayout/AppBar.vue";
import ColumnNavBar from "@/components/DefaultLayout/ColumnNavbar.vue";
import MobileNavBar from "@/components/DefaultLayout/MobileNavBar.vue";

// Define drawer state
const drawer = ref(false); // Initialize the drawer as closed
</script>

<style scoped>
.main-content {
  height: 100vh; /* Subtract MobileNavBar/AppBar height */
  overflow-y: auto; /*  Scroll only inside main content */
}

/* Parallax */
.v-parallax {
  height: 100vh;
  /* not scrollable */
}



</style>