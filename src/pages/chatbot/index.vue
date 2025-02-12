<template>
  <v-container class="pa-6">
    <!-- Header -->
    <v-container class="header-container" fluid>
      <v-row align="center" justify="center">
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <h1>AI Models</h1>
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <v-icon>mdi-hand-heart</v-icon>
        <v-divider class="mr-3"></v-divider>
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
                  :disabled="!selectedModel"
                  @click="openDialog"
                >
                Confirm Selection
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
        <!-- <v-btn
          color="green-darken-2"
          variant="elevated"
          :disabled="!selectedModel"
          @click="openDialog"
        >
          Confirm Selection
        </v-btn> -->
      </v-card-actions>
    </v-card>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card class="pa-4">
        <!-- Title -->
        <v-card-title class="text-h5 text-center">
          Confirm Model Selection
        </v-card-title>

        <!-- Selected Model Info -->
        <v-card-text class="text-center">
          <p class="text-h6">
            <strong>{{ selectedModel }}</strong>
          </p>
          <p class="text-body-1 mt-2">
            {{ selectedModelDescription }}
          </p>

          <!-- Terms and Conditions -->
          <v-divider class="my-4"></v-divider>
          <p class="text-body-2 text-grey-darken-2">
            By confirming, you acknowledge that you have read and agree to the
            <a href="#" class="terms-link">Terms and Conditions</a>.
          </p>
        </v-card-text>

        <!-- Actions -->
        <v-card-actions class="justify-end">
          <v-btn color="red-darken-2" variant="text" @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green-darken-2" variant="elevated" @click="confirmSelection">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const selectedModel = ref(null);
const dialog = ref(false);

const models = ref([
  { name: "DeepSeek", src: "ai-models-images/deepseek.webp", flex: 12 },
  { name: "GPT-3.5", src: "ai-models-images/gpt35.jpg", flex: 6 },
  { name: "GPT-4o", src: "ai-models-images/gpt4o.avif", flex: 6 },
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

const openDialog = () => {
  if (selectedModel.value) {
    dialog.value = true;
  }
};

const confirmSelection = () => {
  dialog.value = false;
  // alert(`You have confirmed: ${selectedModel.value}`);
  router.push(`/chatbot/${selectedModel.value}`);
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
  margin: 5px;
}

/* Hover effect */
.modelCard:hover {
  backdrop-filter: blur(15px);
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.inv {
  opacity: 0;
}
</style>
