<template>
  <v-app-bar app color="transparent">

    <!-- Logo -->
    <v-btn icon variant="text" class="ms-2" nav>
      <v-icon @click="goToHome">mdi-rocket</v-icon>
    </v-btn>
    <v-btn class="mr-4" nav>
      <v-toolbar-title @click="goToHome">Alan Copa's Portfolio</v-toolbar-title>
    </v-btn>

    <!-- Spacer to center the search bar -->
    <v-spacer></v-spacer>

    <!--Chat with AI chatbot -->

    <!-- navbar -->
    <RowNavbar/>

    <!-- Spacer to push icons and login to the right -->
    <v-spacer></v-spacer>

    <v-divider
      class="ms-0"
      inset
      vertical
    ></v-divider>

    <!-- Theme Toggle Button -->
    <v-btn icon variant="text" @click="toggleTheme">
      <v-icon>{{ currentTheme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>

    <!-- Icons -->
    <v-btn icon variant="text">
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon variant="text">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-divider
      class="mr-2"
      inset
      vertical
    ></v-divider>

    <!-- Login Button -->
    <!-- <div>
      <LoginWithMetaMask/>
    </div> -->

    <!-- <v-divider
      class="ms-0"
      inset
      vertical
    ></v-divider> -->

    <!-- User Information -->
    <v-list-item
      nav
      @click="goToAboutMe"
    >
      <v-avatar size="45">
        <v-img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Profile Picture"></v-img>
      </v-avatar>
    </v-list-item>

    <v-divider
      class="ms-2 hidden"
      inset
      vertical
    ></v-divider>

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

.hidden {
  visibility: hidden;
}
</style>
