<template>

    <v-container class="pa-6">
        <!-- Header -->
        <v-container class="header-container" fluid>
            <v-row align="center" justify="center">
            <v-divider class="inv mr-3" inset vertical></v-divider>
            <h1 class="display-2">Book a Demo</h1>
            <v-divider class="inv mr-3" inset vertical></v-divider>
            <v-icon size="36">mdi-calendar</v-icon>
            <v-divider class="mr-3"></v-divider>
            </v-row>
        </v-container>


        <!-- Book a Demo Section -->
  <v-card class="mx-auto" max-width="420">

        <v-container class="pt-8">
          <v-text-field
            label="Name"
            model-value="John Leider"
            variant="outlined"
          ></v-text-field>

          <v-date-input
            label="Date of birth"
            prepend-icon=""
            variant="outlined"
            persistent-placeholder
          ></v-date-input>

          <v-text-field label="Address" variant="outlined"></v-text-field>
          <v-text-field label="City" variant="outlined"></v-text-field>

          <div class="d-flex ga-2">
            <v-text-field label="State" variant="outlined"></v-text-field>

            <v-text-field label="Zip code" variant="outlined"></v-text-field>
          </div>
        </v-container>


    <template v-slot:actions>
      <v-btn color="#4603c0" disabled>Prev</v-btn>

      <v-spacer></v-spacer>

      <v-btn color="#4603c0">Next</v-btn>
    </template>
  </v-card>



    </v-container>
</template>

<script setup>
import { ref } from "vue";

const selectedDate = ref(null);

const events = [
  { name: "Booked Demo", start: "2024-04-10", end: "2024-04-10" },
  { name: "Reserved Slot", start: "2024-04-15", end: "2024-04-15" },
];

const bookDemo = () => {
  if (selectedDate.value) {
    alert(`Demo booked for ${selectedDate.value}!`);
  }
};
</script>

<style scoped>
.inv {
  opacity: 0;
}

.content-card {
  /* background: rgba(255, 255, 255, 0.1); */
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

</style>