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
      <v-row class="mt-6">
        <!-- Profile Card -->
        <v-col cols="12" md="4">
          <v-card class="profile-card pa-4" elevation="8">
            <v-img src="/projects/philosophy.png" alt="Profile" height="250" cover class="rounded-lg"></v-img>
            <v-card-title class="text-h5 font-weight-bold">Alan Copa</v-card-title>
            <v-card-subtitle>Software Engineer | Data Scientist | Blockchain Dev</v-card-subtitle>
            <v-card-text class="text-body-1">
              Passionate about AI, data visualization, and decentralized applications.
            </v-card-text>
            <v-card-actions>
              <v-btn icon="mdi-github" variant="text" href="https://github.com/YourGitHub" target="_blank"></v-btn>
              <v-btn icon="mdi-linkedin" variant="text" href="https://linkedin.com/in/YourProfile" target="_blank"></v-btn>
              <v-btn icon="mdi-email" variant="text" href="mailto:youremail@example.com"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <!-- Biography Section -->
        <v-col cols="12" md="8">
          <v-card class="content-card pa-6" elevation="8">
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon class="mr-2">mdi-information</v-icon> About Me
            </v-card-title>
            <v-divider class="my-2"></v-divider>
            <v-card-text class="text-body-1">
              Hi, I'm <strong>Alan Copa</strong>, a software engineer specializing in AI, blockchain, and web development.
              With a strong foundation in machine learning, smart contracts, and Vue.js, I create high-performance applications
              with a focus on usability and innovation.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Skills & Technologies -->
      <!-- Skills & Technologies -->
      <v-row class="mt-6">
        <v-col cols="12">
          <v-card class="content-card pa-6" elevation="8">
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon class="mr-2">mdi-laptop-code</v-icon> Technical Skills & Competences
            </v-card-title>
            <v-divider class="my-2"></v-divider>
            <v-chip-group column>
              <!-- Programming Languages -->
              <v-chip color="deep-purple">Python</v-chip>
              <v-chip color="deep-purple">JavaScript</v-chip>
              <v-chip color="deep-purple">Node.js</v-chip>
              <v-chip color="deep-purple">Vue.js</v-chip>
              <v-chip color="deep-purple">C</v-chip>
              <v-chip color="deep-purple">C++</v-chip>
              <v-chip color="deep-purple">Java</v-chip>
              <v-chip color="deep-purple">HTML</v-chip>
              <v-chip color="deep-purple">CSS</v-chip>
              <v-chip color="deep-purple">LaTeX</v-chip>
  
              <!-- Databases & DevOps -->
              <v-chip color="blue">MongoDB</v-chip>
              <v-chip color="blue">MySQL</v-chip>
              <v-chip color="blue">Database Design</v-chip>
              <v-chip color="blue">DevOps</v-chip>
  
              <!-- AI & Data -->
              <v-chip color="green">Machine Learning</v-chip>
              <v-chip color="green">Data Visualization</v-chip>
              <v-chip color="green">Data Analysis</v-chip>
              <v-chip color="green">Financial Modeling</v-chip>
  
              <!-- Blockchain & Security -->
              <v-chip color="orange">Blockchain</v-chip>
              <v-chip color="orange">Smart Contracts</v-chip>
              <v-chip color="orange">Cybersecurity</v-chip>
  
              <!-- Soft Skills & Languages -->
              <v-chip color="indigo">Decision Making</v-chip>
              <v-chip color="indigo">Time Management</v-chip>
              <v-chip color="indigo">New Business Development</v-chip>
  
            </v-chip-group>
          </v-card>
        </v-col>
      </v-row>
  
        <!-- Data Visualization Card -->
        <v-col cols="12" md="6">
          <v-card class="content-card pa-6" elevation="8">
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon class="mr-2">mdi-chart-bar</v-icon> Data Visualization
            </v-card-title>
            <v-divider class="my-2"></v-divider>
            <v-container class="iframe-container">
              <iframe
                src="/data-viz-portfolio/interactive/index.html"
                width="100%"
                height="250"
                style="border: none; border-radius: 8px;"
              ></iframe>
            </v-container>
          </v-card>
        </v-col>
  
      <!-- Projects Section -->
      <v-row class="mt-6">
        <v-col cols="12">
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
                      color="blue-darken-2"
                      variant="elevated"
                      :to="`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`"
                      prepend-icon="mdi-arrow-right-circle"
                    >
                      Learn More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
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
  .profile-card, .content-card, .project-card {
    background: transparent;
    backdrop-filter: blur(10px);
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
  }
  
  /* 🔹 Hover Effect */
  .content-card:hover, .profile-card:hover, .project-card:hover {
    backdrop-filter: blur(15px);
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  }
  
  /* 🔹 Header Styling */
  .header-container h1 {
    font-weight: bold;
  }
  
  /* 🔹 Data Visualization Frame */
  .iframe-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* 🔹 Featured Project Cards */
  .project-card {
    min-height: 380px;
  }
  
  /* 🔹 Chips (Skills) */
  .v-chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .inv {
  opacity: 0; /* Ensures it doesn’t affect layout */
}
  </style>
  