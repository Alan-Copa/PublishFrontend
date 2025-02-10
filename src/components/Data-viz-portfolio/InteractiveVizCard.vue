<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="projectCard mx-auto my-6"
    max-width="2000"
    color="transparent"
    elevation="8"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- Title & Subtitle (Above IFrame) -->
    <v-card-item class="text-center">
      <v-card-title class="text-h5">Interactive Data Visualization</v-card-title>
      <v-card-subtitle>
        <span class="me-1">Real-time Insights & Analytics</span>
        <v-icon color="primary" icon="mdi-chart-line" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <!-- Embedded Interactive Visualization (Large) -->
    <v-container class="iframe-container">
      <iframe
        src="/data-viz-portfolio/interactive/index.html"
        width="100%"
        height="500"
        style="border: none; border-radius: 8px;"
      ></iframe>
    </v-container>

    <!-- Description -->
    <v-card-text>
      <p class="text-body-1 text-center">
        Explore real-time interactive data visualizations and analytics. Click the button below to open the full version.
      </p>
    </v-card-text>

    <!-- Divider -->
    <v-divider class="mx-4 mb-3"></v-divider>

    <!-- External Link Button -->
    <v-card-actions class="d-flex justify-center">
      <v-btn
        color="blue-darken-2"
        variant="tonal"
        block
        href="https://interactive-visualization.vercel.app/"
        target="_blank"
        prepend-icon="mdi-open-in-new"
      >
        View on External Link
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);
</script>

<style scoped>
.projectCard {
  backdrop-filter: blur(10px);
  border-radius: 10px;
}

.iframe-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
</style>
