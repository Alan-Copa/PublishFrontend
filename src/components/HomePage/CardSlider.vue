<template>
  <v-card
    rounded="0"
    theme="dark"
    flat
  >
    <!-- <v-card-title class="text-center">
      <h1 class="text-h4">Quick Overview of My Projects</h1>
    </v-card-title> -->
    <v-window v-model="onboarding">
      <v-window-item
        v-for="n in slides.length"
        :key="`card-${n}`"
        :value="n"
      >
        <v-card
          class="d-flex justify-center align-center text-center"
          height="200"
        >
          <div>
            <h2 class="text-h4 font-weight-bold">{{ slides[n - 1].title }}</h2>
            <img
              :src="`/images/projects/${n}.png`"
              alt="Project"
              height="100"
            />
            <p class="text-body-1 mt-3">{{ slides[n - 1].content }}</p>
          </div>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        icon="mdi-chevron-left"
        variant="plain"
        @click="prev"
      ></v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in slides.length"
          :key="`btn-${n}`"
          v-slot="{ isSelected, toggle }"
          :value="n"
        >
          <v-btn
            :variant="isSelected ? 'outlined' : 'text'"
            icon="mdi-record"
            @click="toggle"
          ></v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        icon="mdi-chevron-right"
        variant="plain"
        @click="next"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  {
    title: "Smart Contracts: Crowdfunding",
    content:
      "Ethereum-based smart contracts",
  },
  {
    title: "Smart Estate",
    content:
      "Smart Estate: A blockchain-based real estate platform",
  },
  {
    title: "Data Visualization Portfolio",
    content:
      "Interactive Data Visualization Portfolio",
  },
  {
    title: "AI Chatbot",
    content:
      "Secure AI Chatbot running on your device",
  },
  {
    title: "Customer Relationship Management",
    content:
      "A CRM system I developed for a company",
  },
  {
    title: "PDF Manipulator",
    content:
      "Secure PDF Manipulator running on your device",
  },
  {
    title: "Map",
    content:
      "Interactive Map",
  },
  {
    title: "My Terminal",
    content:
      "My zshrc custom terminal",
  },
  {
    title: "Instagram Bot",
    content:
      "Bot to count followers on Instagram",
  },
  {
    title: "Shutdown Script",
    content:
      "Mini script that is activated when the computer whith Windows OS is turned off ",
  },
  {
    title: "Philosophy",
    content:
      "just.. Philosophy",
  },
  
  

  // {
  //   title: "Tokenized Ownership",
  //   content:
  //     "Convert real estate units into NFTs, enabling partial ownership, passive income, and more. Perfect for small capital investors.",
  // },
  // {
  //   title: "Real Estate Development",
  //   content:
  //     "Crowdfund and contribute to new property developments. Enjoy proportional ownership and a stake in high-potential projects.",
  // },
  // {
  //   title: "Join Us Today",
  //   content:
  //     "Start your journey with Fragmented State. Sign up, connect your wallet, and invest in the future of real estate.",
  // },
]);

const onboarding = ref(1);

const next = () => {
  onboarding.value = onboarding.value + 1 > slides.value.length ? 1 : onboarding.value + 1;
};

const prev = () => {
  onboarding.value = onboarding.value - 1 <= 0 ? slides.value.length : onboarding.value - 1;
};
</script>

<style scoped>
.v-card {
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

.v-card-actions {
  padding: 0 16px;
}

.v-btn {
  margin: 0 8px;
}
</style>