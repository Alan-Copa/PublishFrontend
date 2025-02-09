<template>
  <v-container class="pa-6">
    <h1 class="display-2">Market</h1>

    <v-card class="my-6 pa-4" elevation="2" rounded>
      <v-data-table
        :headers="headers"
        :items="units"
        multi-sort
        item-value="id"
      >
        <!-- Row Slot -->
        <template v-slot:body="{ items }">
          <tr
            v-for="item in items"
            :key="item.id"
            class="custom-row"
            @click="openDialog(item)"
            :class="{ 'selected-row': selectedRow === item.id }"
          >
            <!-- Image Column -->
            <td>
              <v-card class="my-2" elevation="2" rounded>
                <v-img :src="item.image || placeholderImage" height="64" cover></v-img>
              </v-card>
            </td>

            <!-- Value Column -->
            <td>{{ formatCurrency(item.value) }}</td>

            <!-- id Column -->
            <td>{{ item.id }}</td>

            <!-- Name Column -->
            <td>{{ item.name }}</td>

            <!-- Address Column -->
            <td>{{ item.locationHash }}</td>

            <!-- Ownership Token Column -->
            <td>
              <v-chip color="green" label small>
                {{ ((item.unallocatedSupply / item.totalSupply)*100).toFixed(2) }}%
              </v-chip>
            </td>

            
          </tr>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog -->
    <v-dialog v-model="dialogVisible" max-width="800px">
      <template v-slot:default="{ isActive }">
        <RealEstateDetails
          :unit="selectedUnit"
          @close-dialog="dialogVisible = false"
        />
      </template>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import RealEstateDetails from "./RealEstateDetails.vue";

const props = defineProps({
  units: {
    type: Array,
    default: () => []
  }
});

// Table headers
const headers = reactive([
  { title: "Image", key: "image", align: "start", sortable: false },
  { title: "Value (USD)", key: "value", align: "start" },
  { title: "ID", key: "id", align: "start" },
  { title: "Name", key: "name", align: "start" },
  { title: "Address", key: "locationHash", align: "start" },
  { title: "Available Ownership Token (%)", key: "unallocatedSupply", align: "start" },
]);

// Selected row and dialog visibility
const selectedRow = ref(null);
const dialogVisible = ref(false);
const selectedUnit = ref(null);
const placeholderImage = "https://via.placeholder.com/200";

// Function to open the dialog and fetch property details
const openDialog = async (item) => {
  try {    
    selectedRow.value = item.id; // Store the clicked item in the selectedRow

    // Fetch property details
    const response = await axios.get(`http://localhost:5001/property-details/${item.id}`);
    if (response.data.success) {
      console.log('Property details loaded:', response.data.property);

      // Combine row-level fields with fetched data
      selectedUnit.value = {
        ...response.data.property,
        name: item.name, // Retain the name from the row data
        image: item.image || placeholderImage, // Use placeholder if image is missing
      };

      dialogVisible.value = true; // Open the dialog
    } else {
      console.error('Failed to load property details:', response.data.message);
    }
  } catch (error) {
    console.error('Error loading property details:', error);
  }
};

// Format currency
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}
</script>

<style scoped>
.custom-row {
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.custom-row:hover {
  background-color: rgba(0, 128, 255, 0.1); /* Light blue hover effect */
  transform: scale(0.99);
}

.selected-row {
  background-color: rgba(0, 128, 255, 0.2); /* Highlight selected row */
}
</style>
