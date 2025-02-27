<template>
    <v-container class="pa-6">
      <!-- Header -->
      <v-container class="header-container text-center" fluid>
        <v-row align="center" justify="center">
          <v-divider class="inv mr-3" inset vertical></v-divider>
          <h1 class="display-2">About Me</h1>
          <v-divider class="inv mr-3" inset vertical></v-divider>
          <v-icon size="36">mdi-account-circle</v-icon>
          <v-divider class="mr-3"></v-divider>
        </v-row>
      </v-container>
  
      <!-- Main Content Grid -->
      <v-row class="mt-6" align="stretch">
        <!-- Profile Card -->
        <v-col cols="12" md="4">
          <MeCard />
        </v-col>

        <!-- Biography and Skills Section -->
        <v-col cols="12" md="8">
          <v-row dense>
            <v-col cols="12" class="mb-4">
              <Biography />
            </v-col>

            <v-col cols="12">
              <SkillsComp />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Skills & Data Visualization Section in the same row -->
      <v-row class="mt-6">
        <!-- Skills & Competences -->
        <v-col cols="12" md="6">
          <!-- <DataViz/> -->
        </v-col>

        <!-- Data Visualization Section -->
        <v-col cols="12" md="6">
          <!-- <SkillsComp/> -->
        </v-col>
      </v-row>

      <Timeline/>

      <!-- Projects Section -->
      <v-row class="mt-6">
        <v-col cols="12">
          <SampleProjects/>
        </v-col>
      </v-row>

    </v-container>
  </template>
  
  <script setup>
  import Biography from "@/components/About-me-Components/Biography.vue";
import DataViz from "@/components/About-me-Components/DataViz.vue";
import SkillsComp from "@/components/About-me-Components/SkillsComp.vue";
import { ref } from "vue";
  
</script>

<style scoped>
/* 🔹 Transparent & Blur Effect */
.profile-card, .content-card, .project-card {
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

/* 🔹 Hover Effect */
.content-card:hover, .profile-card:hover, .project-card:hover {
  backdrop-filter: blur(15px);
  /* transform: scale(1.03); */
  /* box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3); */
}

.inv {
opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>
