<template>
    <v-container class="pa-6">
      <!-- Header -->
      <v-container class="header-container" fluid>
        <v-row align="center" justify="center">
          <v-divider class="inv mr-3" inset vertical></v-divider>
          <h1 class="display-2">My Data Visualizations Portfolio</h1>
          <v-divider class="inv mr-3" inset vertical></v-divider>
          <v-icon>mdi-chart-bar</v-icon>
          <v-divider class="mr-3"></v-divider>
        </v-row>
      </v-container>
  
      <!-- Quick Description -->
      <v-container class="text-center my-6">
        <p class="text-body-1">
          Explore my interactive and dynamic data visualizations. Each project represents real-world insights using modern data visualization tools. Download the PDF to view the full portfolio. 
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

      <v-container>
    <div
      v-for="(viz, index) in visualizations"
      :key="index"
    >
      <InteractiveSparklineCard
        v-if="viz.chartData"
        :title="viz.title"
        :subtitle="viz.subtitle"
        :description="viz.description"
        :externalLink="viz.externalLink"
        :chartData="viz.chartData"
      />
      <InteractiveVizCard
        v-else
        :title="viz.title"
        :subtitle="viz.subtitle"
        :description="viz.description"
        :iframeSrc="viz.iframeSrc"
        :externalLink="viz.externalLink"
      />
    </div>
  </v-container>


    </v-container>
  </template>

<script setup>
import InteractiveSparklineCard from '@/components/Data-viz-portfolio/InteractiveSparklineCard.vue';
import InteractiveVizCard from '@/components/Data-viz-portfolio/InteractiveVizCard.vue';

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

// List of Interactive Visualizations
const visualizations = ref([
  {
    title: "The Rise of Broadband: Global Subscriptions (1998-2022)",
    subtitle: "Interactive Data Visualization",
    description: "From 1998 to 2022, the world saw a dramatic rise in broadband subscriptions. This interactive visualization explores global and regional adoption trends, showcasing the impact of infrastructure growth, policy changes, and digital transformation on internet connectivity.",
    iframeSrc: "/data-viz-portfolio/interactive/index.html",
    externalLink: "https://interactive-visualization.vercel.app/"
  },
  {
    title: "Website Traffic Over Time",
    subtitle: "User Visits Per Day",
    description: "Analyze trends in website traffic over the past month.",
    externalLink: "https://traffic-analysis.vercel.app/",
    chartData: [5, 8, 3, 12, 9, 15, 18, 10, 7, 14, 10, 20, 22, 5, 17],
  },
]);

</script>

<style scoped>
.inv {
  opacity: 0;
}
</style>
  