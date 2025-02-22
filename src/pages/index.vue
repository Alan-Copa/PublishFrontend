<template>

  <!-- welcome -->
  <div class="divStandard">
    <h1 class="display-2 text-center text-primary">Welcome to My Portfolio <v-icon size="36">mdi-rocket-launch</v-icon></h1>
    <p class="text-h6 text-center text-secondary">
      My tech and business projects.
    </p>

    <v-row>

      <v-col>
        <v-btn 
          class="mt-6 see-projects-btn"
          size="x-large"
          color="primary"
          variant="elevated"
          to="/projects"
          prepend-icon="mdi-folder-open"
        >
          See Projects
        </v-btn>
      </v-col>
      <v-col>
        <v-btn 
          class="mt-6 about-me-btn"
          size="x-large"
          color="secondary"
          variant="elevated"
          to="/about-me"
          prepend-icon="mdi-account-circle"
        >
          About Me
        </v-btn>
      </v-col>
      <v-col>
        <v-btn 
          class="mt-6 book-demo-btn"
          size="x-large"
          color="deep-purple-accent-4"
          variant="elevated"
          to="/book-demo"
          prepend-icon="mdi-calendar"
        >
          Book Demo
        </v-btn>
      </v-col>

    </v-row>
  </div>
    
  <!-- Call to Action -->
       
  <!-- Project card slider -->
  <div class="divStandard">
    <v-row class="desktop">
      <v-col>
        <h1 class="display-2 text-center text-primary">Overview of My Projects <v-icon size="36">mdi-lightbulb-on-outline</v-icon></h1>
        <CardSlider></CardSlider>
      </v-col>
    </v-row>
  </div>

</template>
  
<script setup>
import { VRow } from 'vuetify/components';

</script>

<style scoped>

.divStandard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5em;
  margin-top: 3em;
}

h1 {
  font-size: 2.5em;
}

.see-projects-btn, .about-me-btn, .book-demo-btn {
  min-width: 260px;
  min-height: 60px;
}
@media (hover: hover) and (pointer: fine) {
.desktop {
  width: 50em;
}
}

</style>