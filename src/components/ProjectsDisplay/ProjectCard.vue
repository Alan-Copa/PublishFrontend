<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="projectCard mx-auto my-6"
    max-width="374"
    color="transparent"
    elevation="8"
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

    <!-- Card Actions (Conditional Buttons) -->
    <v-card-actions>
      <v-row justify="center" no-gutters>
        <v-col v-if="GdriveLink" cols="12" class="mb-2">
          <v-btn 
            color="yellow-darken-3"
            block
            :href="GdriveLink"
            target="_blank"
            prepend-icon="mdi-google-drive"
            border
          >
            Google Drive
          </v-btn>
        </v-col>

        <v-col v-if="GithubLink" cols="12" class="mb-2">
          <v-btn 
            color="green"
            block
            :href="GithubLink"
            target="_blank"
            prepend-icon="mdi-github"
            border
          >
            GitHub Repository
          </v-btn>
        </v-col>

        <v-col v-if="internalLink" cols="12" class="mb-2">
          <v-btn 
            color="blue"
            block
            :to="internalLink"
            prepend-icon="mdi-open-in-new"
            border
          >
            Try it out!
          </v-btn>
        </v-col>

        <v-col v-if="PDFpath" cols="12" class="mb-2">
            <v-btn 
              color="red-darken-2"
              block
              @click="downloadPDF"
              download
              prepend-icon="mdi-download"
              border
            >
              Download PDF
            </v-btn>
        </v-col>

        <v-col v-if="DemoLink" cols="12" class="mb-2">
          <v-btn 
            color="deep-purple-accent-4"
            block
            :to="DemoLink"
            prepend-icon="mdi-calendar-check"
            border
          >
            Book Demo
          </v-btn>
        </v-col>

      </v-row>
    </v-card-actions>

  </v-card>
</template>

<script setup>
import { ref } from "vue";

// Props
const props = defineProps({
  title: String,
  content: String,
  imgname: String,
  year: Number,
  type: String,
  GdriveLink: String,
  GithubLink: String,
  internalLink: String,
  DemoLink: String,
  PDFpath: String,
});

const loading = ref(false);

const downloadPDF = () => {
  const pdfUrl = props.PDFpath;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = props.PDFpath.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
.projectCard {
  backdrop-filter: blur(10px);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

/* Hover effect */
@media (hover: hover) and (pointer: fine) {
.projectCard:hover {
  backdrop-filter: blur(15px);
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}
}
</style>  
