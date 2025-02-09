<template>
  <v-parallax src="../../parallax/monotone.jpg">
    <MarketGrid :units="properties" />
  </v-parallax>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MarketGrid from '@/components/MarketComponent/MarketGrid.vue';

const properties = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5001/properties');
    if (response.data.success) {
      console.log('Properties loaded:', response.data.properties);
      properties.value = response.data.properties;
    } else {
      console.error('Failed to load properties:', response.data.message);
    }
  } catch (error) {
    console.error('Error loading properties:', error);
  }
});
</script>
