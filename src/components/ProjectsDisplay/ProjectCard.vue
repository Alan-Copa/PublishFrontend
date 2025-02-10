<template>
    <v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto my-6"
      max-width="374"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <!-- Project Image -->
      <v-img height="200" :src="`/projects/${imgname}`" cover></v-img>
  
      <!-- Project Title & Subtitle -->
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>
          <span class="me-1">Featured Project</span>
          <v-icon color="primary" icon="mdi-star-circle" size="small"></v-icon>
          <br>
            <span class="me-1">{{ year }} - {{ type }}</span>
            <v-icon v-if="type === 'Company'" color="blue" icon="mdi-office-building" size="small"></v-icon>
            <v-icon v-else-if="type === 'University'" color="green" icon="mdi-school" size="small"></v-icon>
            <v-icon v-else color="purple" icon="mdi-account" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>


      <!-- Project Content -->
      <v-card-text>
        <p class="text-body-1">
          {{ content }}
        </p>
      </v-card-text>
      
  
      <!-- Divider -->
      <v-divider class="mx-4 mb-1"></v-divider>
      <v-spacer></v-spacer>

  
      <!-- Card Actions -->
      <v-card-actions>
  <v-row justify="center" no-gutters>
    <v-col cols="6">
      <v-btn
        color="green"
        text="View Project"
        block
        border
        @click="viewProject"
      >
        View Project
      </v-btn>
    </v-col>

    <v-col cols="6">
      <v-btn
        color="deep-purple-lighten-2"
        text="Book a Demo"
        block
        @click="bookDemo"
      >
        Book a Demo
      </v-btn>
    </v-col>
  </v-row>
</v-card-actions>

    </v-card>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Props
  defineProps({
    title: String,
    content: String,
    imgname: String,
    year: Number,
    type: String,
  });
  
  const loading = ref(false);
  
  const viewProject = () => {
    loading.value = true;
    setTimeout(() => (loading.value = false), 2000);
  };
  const bookDemo = () => {
    loading.value = true;
    setTimeout(() => (loading.value = false), 2000);
  };
  </script>
  