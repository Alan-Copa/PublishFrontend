<template>
    <v-card class="content-card pa-6" elevation="8">
        <v-card-title class="text-h5 font-weight-bold">
            <v-icon class="mr-2">mdi-folder-outline</v-icon> Featured Projects
        </v-card-title>
        <v-divider class="my-2"></v-divider>
        <v-row>
            <v-col v-for="project in featuredProjects" :key="project.title" cols="12" md="4">
            <v-card class="project-card pa-4" elevation="6">
                <v-img :src="`/projects/${project.imgname}`" height="180" cover class="rounded-lg"></v-img>
                <v-card-title class="text-h6 font-weight-bold">{{ project.title }}</v-card-title>
                <v-card-subtitle>{{ project.year }} - {{ project.type }}</v-card-subtitle>
                <v-card-actions class="d-flex justify-center">
                <v-btn
                    color="primary"
                    variant="elevated"
                    :to="`/projects`"
                    prepend-icon="mdi-arrow-right-circle"
                >
                    Learn More
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
// Sample featured projects
const featuredProjects = ref([
{
    title: "AI Chatbot",
    imgname: "ai.png",
    year: 2024,
    type: "Personal",
},
{
    title: "Data Visualization Portfolio",
    imgname: "dataviz.png",
    year: 2024,
    type: "University",
},
{
    title: "Smart Contracts: Crowdfunding",
    imgname: "crwdf.png",
    year: 2024,
    type: "Personal",
},
]);
</script>

<style scoped>
/* 🔹 Transparent & Blur Effect */
.project-card {
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}
/* 🔹 Hover Effect */
@media (hover: hover) and (pointer: fine) {
.project-card:hover {
  backdrop-filter: blur(15px);
  transform: scale(1.03);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}
}
</style>