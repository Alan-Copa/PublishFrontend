<template>
  <v-app-bar app class="blur d-none d-md-flex" color="transparent">

    <!-- Logo -->
    <v-btn icon variant="text" class="ms-2" nav @click="goToHome">
      <v-icon>mdi-rocket</v-icon>
    </v-btn>
    <v-btn class="mr-4" nav @click="goToHome">
      <v-toolbar-title>Alan Copa's Portfolio</v-toolbar-title>
    </v-btn>

    <v-spacer></v-spacer>

    <!-- Desktop Navbar -->
    <RowNavbar />

    <v-spacer></v-spacer>

    <!-- Theme Toggle -->
    <v-btn icon variant="text" @click="toggleTheme">
      <v-icon>{{ currentTheme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>

    <v-btn icon variant="text">
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon variant="text">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <!-- User Avatar -->
    <v-list-item nav @click="goToAboutMe">
      <v-avatar size="45">
        <v-img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Profile Picture"></v-img>
      </v-avatar>
    </v-list-item>
  </v-app-bar>
</template>


<script setup>
import {ref, watch} from "vue";
import {useTheme} from "vuetify";
import LoginWithMetaMask from '@/components/AccountComponents/LoginWithMetaMask.vue';
import router from "@/router";

// Access Vuetify's instance
const theme = useTheme(); // Access Vuetify's theme object
const currentTheme = ref(theme.global.current.value);
const isDarkTheme = computed(() => theme.global.name.value === "dark");

// theme.global.name.value = isDarkTheme.value ? "light" : "dark";

// Watch for changes to the theme
watch(
  () => theme.global.current.value,
  (newTheme) => {
    currentTheme.value = newTheme;
  }
);

// Toggle the theme
const toggleTheme = () => {
  // theme.global.name.value = currentTheme.value === "dark" ? "light" : "dark";
  theme.global.name.value = isDarkTheme.value ? "light" : "dark";
};

// Go to Home
const goToHome = () => {
  router.push("/");
};
// Go to About Me
const goToAboutMe = () => {
  router.push("/about-me");
};
</script>

<style scoped>
.app-bar-search {
  max-width: 400px;
}

.blur {
  backdrop-filter: blur(10px);
}

.hidden {
  visibility: hidden;
}
</style>
