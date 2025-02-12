<template>
  <v-card rounded="0" flat color="transparent">
    <v-window v-model="onboarding">
      <v-window-item v-for="n in slides.length" :key="`card-${n}`" :value="n">
        <v-row class="d-flex justify-center align-center">
          <!-- Previous Slide Button -->
          <v-btn
            icon="mdi-chevron-left"
            variant="plain"
            size="x-large"
            class="mx-4 nav-btn"
            @click="prev"
          ></v-btn>

          <!-- Project Card -->
          <v-card
            class="projectCard mx-auto my-12 pa-4"
            max-width="400"
            min-width="400"
            min-height="500"
            max-height="500"
            elevation="8"
            color="transparent"
          >
            <!-- Project Image -->
            <v-img
              :src="`/projects/${slides[n - 1].imgname}`"
              alt="Project"
              height="200"
              cover
              class="my-2"
            ></v-img>

            <!-- Project Title & Subtitle -->
            <v-card-item>
              <v-card-title class="text-h5 font-weight-bold">
                {{ slides[n - 1].title }}
              </v-card-title>
              <v-card-subtitle>
                <span class="me-1">Featured Project</span>
                <v-icon color="primary" icon="mdi-star-circle" size="small"></v-icon>
                <br>
                <span class="me-1">{{ slides[n - 1].year }} - {{ slides[n - 1].type }}</span>
                <v-icon v-if="slides[n - 1].type === 'Company'" color="blue" icon="mdi-office-building" size="small"></v-icon>
                <v-icon v-else-if="slides[n - 1].type === 'University'" color="green" icon="mdi-school" size="small"></v-icon>
                <v-icon v-else color="purple" icon="mdi-account" size="small"></v-icon>
              </v-card-subtitle>
            </v-card-item>

            <!-- Project Description -->
            <v-card-text>
              <p class="text-body-1">
                {{ slides[n - 1].content }}
              </p>
            </v-card-text>

            <!-- card actions -->
            <v-card-actions class="d-flex justify-center">
              <v-btn
                color="deep-purple-lighten-2"
                variant="elevated"
                to="/projects"
                prepend-icon="mdi-arrow-right-circle"
              >
                Learn More
              </v-btn>
            </v-card-actions>
            
          </v-card>

          <!-- Next Slide Button -->
          <v-btn
            icon="mdi-chevron-right"
            variant="plain"
            size="x-large"
            class="mx-4 nav-btn"
            @click="next"
          ></v-btn>
        </v-row>
      </v-window-item>
    </v-window>

    <!-- Navigation Dots -->
    <v-card-actions class="justify-space-between">
      <v-btn icon="mdi-chevron-left" variant="plain" @click="prev"></v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item v-for="n in slides.length" :key="`btn-${n}`" v-slot="{ isSelected, toggle }" :value="n">
          <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle"></v-btn>
        </v-item>
      </v-item-group>
      <v-btn icon="mdi-chevron-right" variant="plain" @click="next"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  {
    title: "Machine Learning Code",
    content: "Jupyter Notebook projects including Neural Networks, Image Classification, and multiple Regression models.",
    imgname: "mlNotebook.png",
    year: 2024,
    type: "University",
  },
  {
    title: "Smart Estate",
    content: "A blockchain-based real estate platform leveraging smart contracts for fractional ownership.",
    imgname: "smart-estate.png",
    year: 2024,
    type: "University",
  },
  {
    title: "Smart Contracts: Crowdfunding",
    content: "Ethereum-based smart contracts for crowdfunding.",
    imgname: "crwdf.png",
    year: 2024,
    type: "Personal",
  },
  {
    title: "Data Visualization Portfolio",
    content: "Interactive Data Visualization Portfolio applying best practices for effective data communication.",
    imgname: "dataviz.png",
    year: 2024,
    type: "University",
  },
  {
    title: "Slite.ai",
    content: "A startup revolutionizing urban food and grocery delivery through autonomous rovers.",
    imgname: "slite-ai.png",
    year: 2024,
    type: "University",
  },
  {
    title: "AI Chatbot",
    content: "Secure AI Chatbot running on your device.",
    imgname: "ai.png",
    year: 2024,
    type: "Personal",
  },
  {
    title: "Customer Relationship Management",
    content: "A CRM system for optimizing internal operations and improving customer management.",
    imgname: "CRM.png",
    year: 2023,
    type: "Company",
  },
  {
    title: "VRtual Arena",
    content: "A virtual reality (VR) experience reimagining sports entertainment.",
    imgname: "VRtual-arena.png",
    year: 2023,
    type: "University",
  },
  {
    title: "Retrieval System",
    content: "A Python web scraper indexing house rental listings with Solr, with search via an Express.js frontend.",
    imgname: "webCrawler.png",
    year: 2023,
    type: "University",
  },
  {
    title: "Telegram Bot",
    content: "Telegram bot to register users.",
    imgname: "telegram.png",
    year: 2023,
    type: "Company",
  },
  {
    title: "PDF Manipulator",
    content: "Secure PDF Manipulator running on your device.",
    imgname: "PDF.png",
    year: 2022,
    type: "Personal",
  },
  {
    title: "Map",
    content: "Interactive Map.",
    imgname: "map.png",
    year: 2024,
    type: "Personal",
  },
  {
    title: "My Terminal",
    content: "My zshrc custom terminal.",
    imgname: "terminal.png",
    year: 2024,
    type: "Personal",
  },
  {
    title: "Instagram Bot",
    content: "Bot to count followers on Instagram.",
    imgname: "insta.png",
    year: 2023,
    type: "Personal",
  },
  {
    title: "Philosophy",
    content: "Just.. Philosophy.",
    imgname: "philosophy.png",
    year: 2023,
    type: "Personal",
  },
]);

const onboarding = ref(1);

const next = () => {
  onboarding.value = onboarding.value + 1 > slides.value.length ? 1 : onboarding.value + 1;
};

const prev = () => {
  onboarding.value = onboarding.value - 1 <= 0 ? slides.value.length : onboarding.value - 1;
};

const loading = ref(false);

const handleClick = () => {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
};
</script>

<style scoped>
/* 🔹 Project Card with Hover & Blur Effect */
.projectCard {
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

/* 🔹 Hover Effect */
.projectCard:hover {
  backdrop-filter: blur(15px);
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

/* 🔹 Navigation Buttons */
.nav-btn {
  font-size: 3rem;
  width: 80px;
  height: 80px;
}

/* 🔹 Ensuring Fixed Card Size */
.projectCard {
  min-width: 400px;
  max-width: 400px;
  min-height: 500px;
  max-height: 500px;
}

/* 🔹 Center Text */
.text-center {
  text-align: center;
}

/* 🔹 Bold Title */
.font-weight-bold {
  font-weight: bold;
}

/* 🔹 Improve Readability */
.text-body-1 {
  margin: 0 auto;
  max-width: 500px;
}
</style>