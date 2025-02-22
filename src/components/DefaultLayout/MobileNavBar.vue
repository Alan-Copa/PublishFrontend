<template>
    <v-bottom-navigation
      app
      class="mobile-navbar"
      height="70"
      grow
    >
      <!-- Home -->
      <v-btn to="/" class="nav-btn" stacked>
        <v-icon size="30" color="blue-darken-2">mdi-home-city</v-icon>
        <span class="nav-label">Home</span>
      </v-btn>
  
      <!-- Projects -->
      <v-btn to="/projects" class="nav-btn" stacked>
        <v-icon size="36" color="deep-purple-accent-4">mdi-rocket</v-icon>
        <span class="nav-label">Projects</span>
      </v-btn>
  
      <!-- Contact -->
      <v-btn to="/contact" class="nav-btn" stacked>
        <v-icon size="30" color="green-darken-2">mdi-email</v-icon>
        <span class="nav-label">Contact</span>
      </v-btn>
  
      <!-- About Me -->
      <v-btn to="/about-me" class="nav-btn" stacked>
        <v-icon size="30" color="amber-darken-3">mdi-account</v-icon>
        <span class="nav-label">About</span>
      </v-btn>
    </v-bottom-navigation>
</template>

<script setup>
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import router from "@/router";

const theme = useTheme();
const isDarkTheme = computed(() => theme.global.name.value === 'dark');

</script>

<style scoped>
.mobile-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: var(--v-theme-secondary); /* Apply 'secondary' theme color */
  z-index: 1000;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-btn {
  color: var(--v-theme-on-secondary); /* Text color based on theme */
  flex-direction: column;
}

.nav-label {
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 2px;
}
</style>