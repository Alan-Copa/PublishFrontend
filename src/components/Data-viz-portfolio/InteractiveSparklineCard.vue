<template>
    <v-card
      class="projectCard mx-auto my-6"
      max-width="800"
      color="transparent"
      elevation="8"
    >
      <v-card-item class="text-center">
        <v-card-title class="text-h5">{{ title }}</v-card-title>
        <v-card-subtitle>
          <span class="me-1">{{ subtitle }}</span>
          <v-icon color="primary" icon="mdi-chart-line" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>
  
      <!-- Sparkline Visualization -->
      <v-container fluid>
        <v-sparkline
          :fill="fill"
          :gradient="selectedGradient"
          :line-width="lineWidth"
          :model-value="value"
          :padding="padding"
          :smooth="smooth"
          auto-draw
        ></v-sparkline>
      </v-container>
  
      <v-divider class="mx-4 mb-3"></v-divider>
  
      <!-- Customization Controls -->
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-row align="center" class="fill-height">
              <v-item-group v-model="selectedGradient" mandatory>
                <v-row class="pt-6 pl-6">
                  <v-item
                    v-for="(gradient, i) in gradients"
                    :key="i"
                    v-slot="{ active, toggle }"
                    :value="gradient"
                  >
                    <v-card
                      :style="{
                        background: gradient.length > 1
                          ? `linear-gradient(0deg, ${gradient})`
                          : gradient[0],
                        border: '2px solid',
                        borderColor: active ? '#222' : 'white'
                      }"
                      class="me-2"
                      height="30"
                      width="30"
                      @click="toggle"
                    ></v-card>
                  </v-item>
                </v-row>
              </v-item-group>
            </v-row>
          </v-col>
        </v-row>
  
        <v-row class="mt-5">
          <v-col cols="2">Filled</v-col>
          <v-col cols="3">
            <v-switch v-model="fill" class="switch"></v-switch>
          </v-col>
          <v-col cols="3">Line width</v-col>
          <v-col cols="3">
            <v-slider v-model="lineWidth" max="10" min="0.1" step="0.1" thumb-label></v-slider>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="2">Smooth</v-col>
          <v-col cols="3">
            <v-switch v-model="smooth" class="switch"></v-switch>
          </v-col>
          <v-col cols="3">Padding</v-col>
          <v-col cols="3">
            <v-slider v-model="padding" max="25" min="0" thumb-label></v-slider>
          </v-col>
        </v-row>
      </v-container>
  
      <v-card-text class="text-center">
        <p class="text-body-1">{{ description }}</p>
      </v-card-text>
  
      <!-- External Link Button -->
      <v-card-actions class="d-flex justify-center">
        <v-btn
          color="blue-darken-2"
          variant="tonal"
          block
          :href="externalLink"
          target="_blank"
          prepend-icon="mdi-open-in-new"
        >
          View on External Link
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  import { ref, defineProps } from "vue";
  
  const gradients = [
    ["#222"],
    ["#42b3f4"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "#1feaea"],
  ];
  
  const props = defineProps({
    title: String,
    subtitle: String,
    description: String,
    externalLink: String,
    chartData: Array, // Allows passing custom data points
  });
  
  const fill = ref(true);
  const selectedGradient = ref(gradients[4]);
  const padding = ref(8);
  const smooth = ref(true);
  const value = ref(props.chartData || [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]);
  const lineWidth = ref(2);
  </script>
  
  <style scoped>
  .projectCard {
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }
  
  .switch {
    position: relative;
    top: -12px;
  }
  </style>
  