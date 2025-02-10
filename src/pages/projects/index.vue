<template>
  <v-container class="pa-6">
    <v-container class="header-container" fluid>
        <v-row align="center">
            <h1 class="display-2">My Projects</h1>
            <v-divider class="inv mr-3" inset vertical></v-divider>
            <v-icon>mdi-projector-screen</v-icon>
            <v-divider class="inv ms-3" inset vertical></v-divider>
        </v-row>
    </v-container>

    <v-row justify="center">
      <v-col 
        v-for="(project, index) in slides" 
        :key="index" 
        cols="12" sm="6" md="4"
      >
      <ProjectCard 
          :title="project.title" 
          :content="project.content" 
          :imgname="project.imgname" 
          :year="project.year"
          :type="project.type"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const slides = ref([
  { title: "Smart Contracts: Crowdfunding", content: "Ethereum-based smart contracts", imgname: "crwdf.png", year: 2024, type: "Personal" },
  { title: "Smart Estate", content: "A blockchain-based real estate platform", imgname: "smart-estate.png", year: 2024, type: "University" },
  { title: "Data Visualization Portfolio", content: "Interactive Data Visualization Portfolio", imgname: "dataviz.png", year: 2024, type: "University" },
  { title: "AI Chatbot", content: "Secure AI Chatbot running on your device", imgname: "ai.png", year: 2024, type: "Personal" },
  { title: "Customer Relationship Management", content: "A CRM system I developed for a company", imgname: "CRM.png", year: 2023, type: "Company" },
  { title: "PDF Manipulator", content: "Secure PDF Manipulator running on your device", imgname: "PDF.png", year: 2022, type: "Personal" },
  { title: "Map", content: "Interactive Map", imgname: "map.png", year: 2024, type: "Personal" },
  { title: "My Terminal", content: "My zshrc custom terminal", imgname: "terminal.png", year: 2024, type: "Personal" },
  { title: "Instagram Bot", content: "Bot to count followers on Instagram", imgname: "insta.png", year: 2023, type: "Personal" },
]);
</script>

<style scoped>
.inv {
  opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>