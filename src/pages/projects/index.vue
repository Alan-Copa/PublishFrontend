<template>
  <v-container class="pa-6">
    <v-container class="header-container" fluid>
        <v-row align="center" justify="center">
          <v-divider class="inv mr-3" inset vertical></v-divider>
            <h1 class="display-2">My Projects</h1>
            <v-divider class="inv mr-3" inset vertical></v-divider>
            <v-icon size="36">mdi-projector-screen</v-icon>
            <v-divider class="mr-3"></v-divider>
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
          :GdriveLink="project.GdriveLink"
          :GithubLink="project.GithubLink"
          :internalLink="project.internalLink"
          :PDFpath="project.PDFpath"
          :DemoLink="project.DemoLink"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ProjectCard from '@/components/ProjectsDisplay/ProjectCard.vue';
const slides = ref([
  {
    title: "Machine Learning Code", 
    content: "Jupyter Notebook projects including Neural Networks, Image Classification and multiple Regression models", 
    imgname: "mlNotebook.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "https://drive.google.com/drive/folders/1ThFQPpzWAqsLSTbbSz2m9sYORUowraGx?usp=sharing",
    GithubLink: "https://github.com/Alan-Copa/MyMachineLearning",
    internalLink: "",
    DemoLink: "/schedule", 
  },
  { 
    title: "Smart Estate", 
    content: "A blockchain-based real estate platform. The DApp leverages blockchain and smart contracts to enable fractional ownership of real estate through NFT tokenization. ", 
    imgname: "smart-estate.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/RealEstate",
    internalLink: "",
    DemoLink: "/schedule"
  },
  { 
    title: "Smart Contracts: Crowdfunding", 
    content: "Ethereum-based smart contracts for crowdfunding", 
    imgname: "crwdf.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "",
    internalLink: "/crowdfunding",
    DemoLink: "/schedule"
  },
  { 
    title: "Data Visualization Portfolio", 
    content: "Interactive Data Visualization Portfolio. The project explores different visualization techniques, critiques common design flaws, and applies best practices for effective data communication.", 
    imgname: "dataviz.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/DataVisualizationPortfolio",
    internalLink: "/data-viz-portfolio",
    DemoLink: "/schedule"
  },
  {
    title: "slite.ai", 
    content: "Slite.ai is a revolutionary startup focused on transforming urban food and grocery delivery through autonomous rovers. Download the pitch deck below", 
    imgname: "slite-ai.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "",
    GithubLink: "",
    internalLink: "",
    PDFpath: "/projects/slite-ai.pdf",
    DemoLink: "/schedule"
  },
  { 
    title: "AI Chatbot", 
    content: "Secure AI Chatbot running on your device", 
    imgname: "ai.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "",
    internalLink: "/chatbot",
    DemoLink: "/schedule"
  },
  { 
    title: "Customer Relationship Management", 
    content: "Web application designed to optimize internal operations, improve customer management, and streamline communication within the company. Developed as a centralized platform, it enables efficient tracking of client activities, internal collaboration, and secure data storage.", 
    imgname: "CRM.png", 
    year: 2023, 
    type: "Company",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/solefid-project",
    internalLink: "",
    DemoLink: "/schedule"
  },
  { 
    title: "VRtual Arena", 
    content: "VRtual Arena is an innovative virtual reality (VR) solution that reimagines the sports entertainment industry. It offers an immersive experience that puts fans right in the action.", 
    imgname: "VRtual-arena.png", 
    year: 2023, 
    type: "University",
    GdriveLink: "",
    GithubLink: "",
    internalLink: "",
    PDFpath: "/projects/VRtual_Arena.pdf",
    DemoLink: "/schedule", 
  },
  {
    title: "Dystributed System",
    content: "This repository contains solutions for three coding assignments in a Distributed Systems course (Autumn 2024/25). The assignments focus on building a multi-threaded chat server, transitioning from a client-server architecture to a peer-to-peer communication model.",
    imgname: "distributed.png",
    year: 2024,
    type: "University",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/MyDistributedSystem",
    internalLink: "",
    DemoLink: "/schedule"
  },
  { 
    title: "Retrieval System", 
    content: "A Python web scraper that collects and indexes house rental listings with Solr, with search functionality via an Express.js frontend.", 
    imgname: "webCrawler.png", 
    year: 2023, 
    type: "University",
    GdriveLink: "",
    GithubLink: "https://github.com/AndreaGualandris/RetrievalSystem",
    internalLink: "",
    DemoLink: "/schedule", 
  },
  { 
    title: "Telegram Bot",
    content: "Telegram bot to register users",
    imgname: "telegram.png",
    year: 2023,
    type: "Company",
    GdriveLink: "",
    GithubLink: "",
    internalLink: "",
    DemoLink: "/schedule"
  },
  { 
    title: "PDF Manipulator", 
    content: "Secure PDF Manipulator running on your device", 
    imgname: "PDF.png", 
    year: 2022, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/PDF_Manipulator",
    internalLink: "",
    DemoLink: "/schedule"
  },
  { 
    title: "Map", 
    content: "Interactive Map", 
    imgname: "map.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "",
    internalLink: "/map",
    DemoLink: "/schedule"
  },
  { 
    title: "My Terminal", 
    content: "My zshrc custom terminal", 
    imgname: "terminal.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/My_Terminal",
    internalLink: "",
    DemoLink: "/schedule"
  },
  { 
    title: "Instagram Bot", 
    content: "Bot to count followers on Instagram", 
    imgname: "insta.png", 
    year: 2023, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/Instagram_Bot",
    internalLink: "",
    DemoLink: "/schedule"
  },
  {
    title: "Philosophy",
    content: "Just... Philosophy",
    imgname: "philosophy.png",
    year: 2023,
    type: "Personal",
    GdriveLink: "",
    GithubLink: "  https://github.com/Alan-Copa/antropologic-universalism",
    internalLink: "",
    DemoLink: "/schedule"
  },
]);

</script>

<style scoped>
.inv {
  opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>