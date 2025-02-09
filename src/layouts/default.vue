<template>
  <v-app>
    <v-parallax
    src="../../parallax/spacehoriz1.jpg"
    >
      <!-- Updated App Bar -->
      <AppBar @toggle-drawer="drawer = !drawer" />

      <!-- Navigation Drawer -->
      <ColumnNavBar :drawer.sync="drawer" v-model="drawer" />

      <!-- Main Content -->
      <v-main>
        <router-view />
      </v-main>

      <!-- Footer -->
      <AppFooter />

   </v-parallax>
  </v-app>
</template>

<script setup>
import { ref } from "vue"; // Import ref
import ColumnNavBar from "@/components/DefaultLayout/ColumnNavbar.vue";

// Define drawer state
const drawer = ref(false); // Initialize the drawer as closed
</script>