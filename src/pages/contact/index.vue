<template>
  <v-container class="pa-6">
    <!-- Contact Information -->
    <v-card class="content-card pa-6 mb-8" elevation="8">
      <v-card-title class="text-h5 font-weight-bold">
        <v-icon class="mr-2">mdi-phone</v-icon> Contact Information
      </v-card-title>
      <v-divider class="my-4"></v-divider>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-icon><v-icon color="blue-darken-2">mdi-email</v-icon></v-list-item-icon>
            <v-list-item-title>Email: <a href="mailto:alan.copa@example.com">alan.copa@example.com</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon><v-icon color="green-darken-2">mdi-phone</v-icon></v-list-item-icon>
            <v-list-item-title>Phone: +41 79 123 45 67</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon><v-icon color="amber-darken-3">mdi-map-marker</v-icon></v-list-item-icon>
            <v-list-item-title>Location: Lugano, Switzerland</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Book a Demo Section -->
    <v-card class="content-card pa-6" elevation="8">
      <v-card-title class="text-h5 font-weight-bold">
        <v-icon class="mr-2">mdi-calendar</v-icon> Book a Demo
      </v-card-title>
      <v-divider class="my-4"></v-divider>
      <v-card-text>
        <v-calendar
          v-model="selectedDate"
          color="deep-purple-accent-4"
          :events="events"
          event-color="green-darken-2"
          week
          show-adjacent-months
          hide-header
        ></v-calendar>

        <v-btn
          v-if="selectedDate"
          class="mt-4"
          color="blue-darken-2"
          block
          @click="bookDemo"
          prepend-icon="mdi-calendar-check"
        >
          Confirm Booking for {{ selectedDate }}
        </v-btn>
      </v-card-text>
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
.content-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

.content-card:hover {
  backdrop-filter: blur(15px);
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

a {
  color: var(--v-theme-primary);
  text-decoration: none;
}

.v-calendar {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
}
</style>
