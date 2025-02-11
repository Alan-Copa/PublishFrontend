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
          :GdriveLink="project.GdriveLink"
          :GithubLink="project.GithubLink"
          :externalLink="project.externalLink"
          :PDFpath="project.PDFpath"
          :DemoLink="project.DemoLink"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const slides = ref([
  {
    title: "Machine Learning Code", 
    content: "Jupyter Notebook projects including Neural Networks, Image Classification and multiple Regression models", 
    imgname: "mlNotebook.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "https://drive.google.com/drive/folders/1ThFQPpzWAqsLSTbbSz2m9sYORUowraGx?usp=sharing",
    GithubLink: "https://github.com/Alan-Copa/MyMachineLearning",
    externalLink: "",
    DemoLink: "/book-demo", 
  },
  { 
    title: "Smart Estate", 
    content: "A blockchain-based real estate platform. The DApp leverages blockchain and smart contracts to enable fractional ownership of real estate through NFT tokenization. ", 
    imgname: "smart-estate.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/RealEstate",
    externalLink: "",
    DemoLink: "/book-demo"
  },
  { 
    title: "Smart Contracts: Crowdfunding", 
    content: "Ethereum-based smart contracts for crowdfunding", 
    imgname: "crwdf.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "",
    externalLink: "/crowdfunding",
    DemoLink: "/book-demo"
  },
  { 
    title: "Data Visualization Portfolio", 
    content: "Interactive Data Visualization Portfolio. The project explores different visualization techniques, critiques common design flaws, and applies best practices for effective data communication.", 
    imgname: "dataviz.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/DataVisualizationPortfolio",
    externalLink: "/data-viz-portfolio",
    DemoLink: "/book-demo"
  },
  {
    title: "slite.ai", 
    content: "Slite.ai is a revolutionary startup focused on transforming urban food and grocery delivery through autonomous rovers. Download the pitch deck below", 
    imgname: "slite-ai.png", 
    year: 2024, 
    type: "University",
    GdriveLink: "",
    GithubLink: "",
    externalLink: "",
    PDFpath: "/projects/slite-ai.pdf",
    DemoLink: "/book-demo"
  },
  { 
    title: "AI Chatbot", 
    content: "Secure AI Chatbot running on your device", 
    imgname: "ai.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "",
    externalLink: "/chatbot",
    DemoLink: "/book-demo"
  },
  { 
    title: "Customer Relationship Management", 
    content: "Web application designed to optimize internal operations, improve customer management, and streamline communication within the company. Developed as a centralized platform, it enables efficient tracking of client activities, internal collaboration, and secure data storage.", 
    imgname: "CRM.png", 
    year: 2023, 
    type: "Company",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/solefid-project",
    externalLink: "",
    DemoLink: "/book-demo"
  },
  { 
    title: "VRtual Arena", 
    content: "VRtual Arena is an innovative virtual reality (VR) solution that reimagines the sports entertainment industry. It offers an immersive experience that puts fans right in the action.", 
    imgname: "VRtual-arena.png", 
    year: 2023, 
    type: "University",
    GdriveLink: "",
    GithubLink: "",
    externalLink: "",
    PDFpath: "/projects/VRtual_Arena.pdf",
    DemoLink: "/book-demo", 
  },
  { 
    title: "Retrieval System", 
    content: "A Python web scraper that collects and indexes house rental listings with Solr, with search functionality via an Express.js frontend.", 
    imgname: "webCrawler.png", 
    year: 2023, 
    type: "University",
    GdriveLink: "",
    GithubLink: "https://github.com/AndreaGualandris/RetrievalSystem",
    externalLink: "",
    DemoLink: "/book-demo", 
  },
  { 
    title: "Telegram Bot",
    content: "Telegram bot to register users",
    imgname: "telegram.png",
    year: 2023,
    type: "Company",
    GdriveLink: "",
    GithubLink: "",
    externalLink: "",
    DemoLink: "/book-demo"
  },
  { 
    title: "PDF Manipulator", 
    content: "Secure PDF Manipulator running on your device", 
    imgname: "PDF.png", 
    year: 2022, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/PDF_Manipulator",
    externalLink: "",
    DemoLink: "/book-demo"
  },
  { 
    title: "Map", 
    content: "Interactive Map", 
    imgname: "map.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "",
    externalLink: "/map",
    DemoLink: "/book-demo"
  },
  { 
    title: "My Terminal", 
    content: "My zshrc custom terminal", 
    imgname: "terminal.png", 
    year: 2024, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/My_Terminal",
    externalLink: "",
    DemoLink: "/book-demo"
  },
  { 
    title: "Instagram Bot", 
    content: "Bot to count followers on Instagram", 
    imgname: "insta.png", 
    year: 2023, 
    type: "Personal",
    GdriveLink: "",
    GithubLink: "https://github.com/Alan-Copa/Instagram_Bot",
    externalLink: "",
    DemoLink: "/book-demo"
  },
  {
    title: "Philosophy",
    content: "just.. Philosophy",
    imgname: "philosophy.png",
    year: 2023,
    type: "Personal",
    GdriveLink: "",
    GithubLink: "  https://github.com/Alan-Copa/antropologic-universalism",
    externalLink: "",
    DemoLink: "/book-demo"
  },
]);


</script>

<style scoped>
.inv {
  opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>