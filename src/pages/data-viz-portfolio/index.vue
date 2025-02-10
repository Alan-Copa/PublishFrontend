<template>
    <v-container class="pa-6">
      <!-- Header -->
      <v-container class="header-container" fluid>
        <v-row align="center" justify="center">
          <v-icon size="36" color="primary">mdi-chart-bar</v-icon>
          <v-divider class="inv mx-3" inset vertical></v-divider>
          <h1 class="text-h4 font-weight-bold">My Data Visualizations Portfolio</h1>
          <v-divider class="inv mx-3" inset vertical></v-divider>
          <v-icon size="36" color="primary">mdi-chart-bar</v-icon>
        </v-row>
      </v-container>
  
      <!-- Quick Description -->
      <v-container class="text-center my-6">
        <p class="text-body-1">
          Explore my interactive and dynamic data visualizations. Each project represents real-world insights using modern data visualization tools.
        </p>
      </v-container>
  
      <!-- Buttons -->
      <v-row justify="center" class="mb-6">
        <v-col cols="auto">
          <v-btn 
            color="green-darken-2" 
            variant="tonal"
            prepend-icon="mdi-download"
            @click="downloadPDF"
          >
            Download PDF
          </v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn 
            color="blue-darken-2" 
            variant="tonal"
            prepend-icon="mdi-open-in-new"
            href="https://interactive-visualization.vercel.app/"
            target="_blank"
          >
            View External Link
          </v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn 
            color="deep-purple-darken-2" 
            variant="tonal"
            prepend-icon="mdi-google-drive"
            href="https://drive.google.com/drive/folders/1Ac0FJFM4y7TdbStMB_de9SxDjQRx85b1?usp=sharing"
            target="_blank"
          >
            Open in Google Drive
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- Interactive Component Placeholder -->
        <v-card elevation="3" class="pa-4 ">
          <v-card-title class="text-h5">Interactive Visualization</v-card-title>
          <v-card-text>
            <p class="text-body-2">
              This section will feature an interactive data visualization component. Stay tuned for updates!
            </p>
          </v-card-text>

          <!-- Embedding the Plotly HTML file -->
        <v-container class="iframe-container">
          <iframe
            src="/data-viz-portfolio/interactive/index.html"
            width="100%"
            height="600"
            style="border: none;"
          ></iframe>
        </v-container>
        </v-card>


    </v-container>
  </template>
  
  <script setup>
  const downloadPDF = () => {
    // Simulating PDF download
    const pdfUrl = "/data-viz-portfolio/Data_Visualization_Portfolio.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Data_Visualizations.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  </script>
  
  <style scoped>
  .inv {
    opacity: 0;
  }
  </style>
  