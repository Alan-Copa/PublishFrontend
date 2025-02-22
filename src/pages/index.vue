<template>

  <!-- welcome -->
  <div class="divStandard">
    <h1 class="display-2 text-center text-primary">Welcome to My Portfolio</h1>
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
          class="mt-6 about-me-btn"
          size="x-large"
          color="green"
          variant="elevated"
          to="/contact"
          prepend-icon="mdi-email"
        >
          Contact
        </v-btn>
      </v-col>

    </v-row>
  </div>
    
  <!-- Call to Action -->
       
  <!-- Project card slider -->
  <div class="divStandard">
    <div class="control-width">
      <h1 class="display-2 text-center text-primary">Overview of My Projects</h1>
      <CardSlider></CardSlider>
    </div>
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
}

h1 {
  font-size: 2.5em;
}

.see-projects-btn, .about-me-btn {
  min-width: 260px;
  min-height: 60px;
}

.control-width {
  margin-top: 1em;
  width: 30vh;
}

</style>