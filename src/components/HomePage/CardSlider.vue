<template>
  <v-card
    rounded="0"
    theme="dark"
    flat
  >

    <v-window v-model="onboarding">

      <v-window-item
        v-for="n in slides.length"
        :key="`card-${n}`"
        :value="n"
      >

      <v-row class="d-flex justify-center align-center">
  <v-btn
    icon="mdi-chevron-left"
    variant="plain"
    size="x-large"
    class="mx-4"
    @click="prev"
    style="font-size: 3rem; width: 80px; height: 80px;"
  ></v-btn>

        <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12 pa-4"
    max-width="400"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-item>
      <v-card-title class="text-h5 font-weight-bold">
        {{ slides[n - 1].title }}
      </v-card-title>
      <v-divider class="my-2"></v-divider>
    </v-card-item>

    <v-img
      :src="`/projects/${slides[n - 1].imgname}`"
      alt="Project"
      height="200"
      cover
      class="my-2"
    ></v-img>

    <v-card-text>
      <p class="text-body-1">
        {{ slides[n - 1].content }}
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Learn More"
        block
        border
        @click="handleClick"
      ></v-btn>
    </v-card-actions>
  </v-card>

        <!-- </v-card> -->
        
        <v-btn
          icon="mdi-chevron-right"
          variant="plain"
          size="x-large"
          class="mx-4"
          @click="next"
          style="font-size: 3rem; width: 80px; height: 80px;"
        ></v-btn>
      </v-row>
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
    imgname: "crwdf.png",
  },
  {
    title: "Smart Estate",
    content:
      "Smart Estate: A blockchain-based real estate platform",
    imgname: "smart-estate.png",
  },
  {
    title: "Data Visualization Portfolio",
    content:
      "Interactive Data Visualization Portfolio",
    imgname: "dataviz.png",
  },
  {
    title: "AI Chatbot",
    content:
      "Secure AI Chatbot running on your device",
    imgname: "ai.png",
  },
  {
    title: "Customer Relationship Management",
    content:
      "A CRM system I developed for a company",
    imgname: "CRM.png",
  },
  {
    title: "PDF Manipulator",
    content:
      "Secure PDF Manipulator running on your device",
    imgname: "PDF.png",
  },
  {
    title: "Map",
    content:
      "Interactive Map",
    imgname: "map.png",
  },
  {
    title: "My Terminal",
    content:
      "My zshrc custom terminal",
    imgname: "terminal.png",
  },
  {
    title: "Instagram Bot",
    content:
      "Bot to count followers on Instagram",
    imgname: "insta.png",
  },
  {
    title: "Shutdown Script",
    content:
      "Mini script that is activated when the computer whith Windows OS is turned off ",
    imgname: "shutdown.png",
  },
  {
    title: "Philosophy",
    content:
      "just.. Philosophy",
    imgname: "philosophy.png",
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


const currentSlide = computed(() => slides.value[n.value - 1]);
let loading = ref(false);

const handleClick = () => {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
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

.inv {
  opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>