<template>
  <v-container class="pa-6">
    <!-- Header -->
    <v-container class="header-container" fluid>
      <v-row align="center">
        <h1>AI Models</h1>
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <v-icon>mdi-hand-heart</v-icon>
        <v-divider class="inv ms-3" inset vertical></v-divider>
      </v-row>
    </v-container>

    <!-- AI Model Selection -->
    <v-card class="mx-auto" max-width="700" color="transparent" elevation="0">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="model in models"
            :key="model.name"
            :cols="model.flex"
          >
            <v-card
              @click="selectModel(model.name)"
              :class="{ 'selected-card': selectedModel === model.name }"
              class="modelCard"
              color="transparent"
              elevation="8"
            >
              <v-img
                :src="model.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="250px"
                cover
              >
                <v-card-title class="text-white">{{ model.name }}</v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-2"
                  variant="text"
                  @click="selectModel(model.name)"
                >
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Display Selected Model Info -->
      <v-card-text class="text-center">
        <p v-if="selectedModel" class="text-h6">
          Selected Model: <strong>{{ selectedModel }}</strong>
        </p>
        <p v-if="selectedModelDescription" class="text-body-1">
          {{ selectedModelDescription }}
        </p>
      </v-card-text>

      <!-- Confirmation Button -->
      <v-card-actions class="d-flex justify-center pb-4">
        <v-btn
          color="green-darken-2"
          variant="elevated"
          :disabled="!selectedModel"
          @click="confirmSelection"
        >
          Confirm Selection
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedModel = ref(null);

const models = ref([
  { name: "DeepSeek", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 12 },
  { name: "GPT-3.5", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 6 },
  { name: "GPT-4o", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
]);

const modelDescriptions = {
  "GPT-4o": "The latest GPT-4 Omni model, optimized for reasoning, creativity, and multimodal inputs.",
  "GPT-3.5": "A faster, cost-effective model great for chat applications and general AI tasks.",
  "DeepSeek": "An alternative AI model with deep contextual understanding and efficient processing."
};

const selectedModelDescription = computed(() => modelDescriptions[selectedModel.value] || "");

const selectModel = (modelName) => {
  selectedModel.value = modelName;
};

const confirmSelection = () => {
  alert(`You have selected: ${selectedModel.value}`);
};
</script>

<style scoped>
.selected-card {
  border: 3px solid #1e88e5;
  box-shadow: 0 4px 10px rgba(30, 136, 229, 0.5);
}
.modelCard {
  backdrop-filter: blur(10px);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}
/* Hover effect */
.modelCard:hover {
  backdrop-filter: blur(15px);
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}
</style>
