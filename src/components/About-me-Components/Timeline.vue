<template>
<v-container class="pa-6">
    <!-- Header -->
    <v-container class="header-container text-center" fluid>
    <v-row align="center" justify="center">
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <h1 class="display-2">My Journey</h1>
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <v-icon size="36">mdi-timeline</v-icon>
        <v-divider class="mr-3"></v-divider>
    </v-row>
    </v-container>

    <!-- Timeline -->
    <v-timeline align="start" dense>
    <v-timeline-item v-for="event in timelineEvents" :key="event.year" :dot-color="event.color" size="small">
        <template v-slot:opposite>
        <div :class="`pt-1 headline font-weight-bold text-${event.color}`">
            {{ event.year }}
        </div>
        </template>
        <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-2 text-${event.color}`">
            {{ event.title }}
        </h2>
        <v-card class="pa-3 content-card" elevation="6">
            <v-card-text>
            <p class="text-body-1">{{ event.description }}</p>
            </v-card-text>
        </v-card>
        </div>
    </v-timeline-item>
    </v-timeline>
</v-container>
</template>

<script setup>
import { ref } from "vue";

const timelineEvents = ref([
  {
    year: "2024 - Ongoing",
    title: "Master in Financial Technology and Computing - Università della Svizzera italiana",
    description: "Pursuing an advanced track in Informatics and the Founders track, focusing on the intersection of finance, technology, and entrepreneurship.",
    color: "teal",
  },
  {
    year: "2024",
    title: "Swiss Army - Sergeant (Rettungsschule 75)",
    description: "Gained leadership and command experience while improving proficiency in German and French. Developed strong decision-making, management, and stress-resistance skills.",
    color: "purple",
  },
  {
    year: "2024",
    title: "Swiss Army - Transmission Soldier (Rettungsschule 75)",
    description: "Completed recruit school, trained as a transmission soldier, and obtained heavy vehicle driver certification (C1, C1E, D1, D1E).",
    color: "red",
  },
  {
    year: "2023 - Present",
    title: "IT Manager - Copa e Co. SA",
    description: "Overseeing IT infrastructure, software & hardware updates, and implementing new administrative software (ELO ECM suite) for operational efficiency.",
    color: "orange",
  },
  {
    year: "2023",
    title: "Internship - Software Developer at Solefid SA",
    description: "Developed a tailored CRM web application, built a client database, and integrated activity management tools using Vue, Vuetify, Node.js, and MySQL.",
    color: "green",
  },
  {
    year: "2020 - 2023",
    title: "Bachelor of Science in Informatics - Università della Svizzera italiana",
    description: "Completed my Bachelor's degree. My Bachelor Project focused on 'Multiple services in a Digital Twin of Smart Ride Sharing EcoSystems'.",
    color: "blue",
  },
  {
    year: "2016 - 2020",
    title: "Cantonal Matura - Liceo cantonale di Lugano 2",
    description: "Completed my high school studies with a Maturity Thesis on 'Comparison and study of lunar and terrestrial impact craters'.",
    color: "cyan",
  }
]);

</script>

<style scoped>
/* 🔹 Transparent & Blur Effect */
.content-card {
background: transparent;
backdrop-filter: blur(10px);
border-radius: 12px;
transition: all 0.3s ease-in-out;
}

/* 🔹 Hover Effect */
@media (hover: hover) and (pointer: fine) {
.content-card:hover {
backdrop-filter: blur(15px);
transform: scale(1.03);
box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}
}

/* 🔹 Header Styling */
.header-container h1 {
font-weight: bold;
}
.inv {
opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>
  