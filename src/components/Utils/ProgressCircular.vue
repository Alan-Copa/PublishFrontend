<template>
    <div class="text-center">
      <v-progress-circular
        :model-value="value"
        :rotate="360"
        :size="size"
        :width="width"
        :color="color"
      >
        <template v-slot:default> {{ value }} % </template>
      </v-progress-circular>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";
  
  // Props for customization
  const props = defineProps({
    duration: { type: Number, default: 5000 }, // Progress duration in ms
    size: { type: Number, default: 100 },
    width: { type: Number, default: 15 },
    color: { type: String, default: "teal" },
  });
  
  const value = ref(0);
  let interval = null;
  
  onMounted(() => {
    const increment = 100 / (props.duration / 100); // Calculate step based on duration
    interval = setInterval(() => {
      if (value.value >= 100) {
        clearInterval(interval);
      } else {
        value.value += increment;
      }
    }, 100);
  });
  
  onBeforeUnmount(() => clearInterval(interval));
  </script>
  
  <style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  </style>
  