<template>
  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="800"
  >
    <!-- Slide Group -->
    <v-slide-group
      v-model="selectedFeature"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
    >
      <v-slide-group-item
        v-for="(feature, index) in features"
        :key="index"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          :class="['ma-4', selectedClass]"
          color="grey-lighten-1"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
              >{{ feature.icon }}</v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <!-- Display Selected Feature -->
    <v-expand-transition>
      <v-sheet
        v-if="selectedFeature !== null"
        height="200"
      >
        <div class="d-flex fill-height align-center justify-center text-center">
          <div>
            <h3 class="text-h6 font-weight-bold">
              {{ features[selectedFeature]?.title }}
            </h3>
            <p class="text-body-1">
              {{ features[selectedFeature]?.description }}
            </p>
          </div>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

// Features for the DApp
const features = [
  {
    title: "Smart Contracts: Crowdfunding",
    description: "Ethereum-based smart contracts",
    icon: "mdi-file-document-box-multiple",
  },
  {
    title: "Smart Estate",
    description: "Smart Estate: A blockchain-based real estate platform",
    icon: "mdi-domain",
  },
  {
    title: "Interactive Data Visualization",
    description: "Interactive Data Visualization Portal",
    icon: "mdi-chart-bell-curve",
  },
  {
    title: "AI Chatbot",
    description: "Secure AI Chatbot running on your device",
    icon: "mdi-robot",
  },
  {
    title: "Customer Relationship Management",
    description: "A CRM system I developed for a company",
    icon: "mdi-account-group",
  },
  {
    title: "PDF Manipulator",
    description: "Secure PDF Manipulator running on your device",
    icon: "mdi-file-pdf-box",
  },
  {
    title: "Map",
    description: "Interactive Map",
    icon: "mdi-map",
  },
  {
    title: "My Terminal",
    description: "My zshrc custom terminal",
    icon: "mdi-console",
  },
  {
    title: "Instagram Bot",
    description: "Bot to count followers on Instagram",
    icon: "mdi-instagram",
  },
  {
    title: "Shutdown Script",
    description: "Mini script that is activated when the computer with Windows OS is turned off",
    icon: "mdi-power",
  },
  {
    title: "Philosophy",
    description: "Just... Philosophy",
    icon: "mdi-lightbulb-outline",
  },
];

const selectedFeature = ref(null); // Track the selected feature
</script>

<style scoped>
.v-sheet {
  background-color: transparent;
  color: white;
}

.text-center {
  text-align: center;
}

.font-weight-bold {
  font-weight: bold;
}

.text-body-1 {
  margin: 0 auto;
  max-width: 500px;
}
</style>