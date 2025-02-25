<template>
  <!-- my css layout destroys css making it scrollable -->
  <v-dialog v-model="loading" persistent max-width="300">
    <v-list-item
          prepend-icon="$vuetify-outline"
          title="Refreshing..."
    >
      <template v-slot:append>
        <ProgressCircular />
      </template>
    </v-list-item>
  </v-dialog>

  <div id="map-container">
    <!-- Map -->
    <div id="map"></div>

    <!-- Control Panel -->
    <v-expansion-panels
      class="map-controls"
      elevation="2"
      max-width="300"
    >
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon start>mdi-map-marker</v-icon>
          Map Controls
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <!-- Location Search -->
          <v-text-field
            append-inner-icon="mdi-crosshairs-gps"
            variant="outlined"
            v-model="searchQuery"
            label="Search Location"
            prepend-icon="mdi-magnify"
            @keyup.enter="searchLocation"
            clearable
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted } from "vue";

import { userMarker, nearbyMarkers, realEstateUnits } from "@/stores/mapStore";

let map: leaflet.Map;
let userGeoMarker: leaflet.Marker;

import { ref } from "vue";
import ProgressCircular from "@/components/Utils/ProgressCircular.vue";
const searchQuery = ref("");
const loading = ref(true);
const searchLocation = async () => {
  if (!searchQuery.value) return;

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        searchQuery.value
      )}&format=json`
    );
    const results = await response.json();

    if (results.length > 0) {
      const { lat, lon } = results[0];
      map.setView([parseFloat(lat), parseFloat(lon)], 13);
    } else {
      alert("Location not found!");
    }
  } catch (error) {
    console.error("Error searching location:", error);
  }
};

onMounted(() => {
  // Request the user's current location
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      // Update userMarker with the user's current location
      userMarker.value.latitude = latitude;
      userMarker.value.longitude = longitude;

      // Initialize the map centered at the user's location
      map = leaflet.map("map").setView([latitude, longitude], 13);

      // Add OpenStreetMap tiles
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      // Add a marker for the user's location
      userGeoMarker = leaflet
        .marker([latitude, longitude])
        .addTo(map)
        .bindPopup("You are here");

      // Add real estate unit markers
      realEstateUnits.forEach(({ latitude, longitude, title, description }) => {
        leaflet
          .marker([latitude, longitude])
          .addTo(map)
          .bindPopup(
            `<strong>${title}</strong><br>${description}`
          );
      });

      // Add nearby markers
      nearbyMarkers.value.forEach(({ latitude, longitude }) => {
        leaflet
          .marker([latitude, longitude])
          .addTo(map)
          .bindPopup(
            `Saved Marker at (<strong>${latitude.toFixed(
              2
            )},${longitude.toFixed(2)}</strong>)`
          );
      });

      // Add marker on map click
      map.addEventListener("click", (e) => {
        const { lat, lng } = e.latlng;

        leaflet
          .marker([lat, lng])
          .addTo(map)
          .bindPopup(
            `Saved Marker at (<strong>${lat.toFixed(
              2
            )},${lng.toFixed(2)}</strong>)`
          );

        nearbyMarkers.value.push({ latitude: lat, longitude: lng });
      });
      loading.value = false;
      setTimeout(() => {
        userGeoMarker.openPopup();
      }, 1000);
    },
    (error) => {
      console.error("Geolocation error:", error);
      alert("Could not retrieve your location. The map will use a default location.");
      
      // Fallback to default location (e.g., Switzerland)
      userMarker.value.latitude = 46.8182;
      userMarker.value.longitude = 8.2275;

      // Initialize the map with default location
      map = leaflet.map("map").setView(
        [userMarker.value.latitude, userMarker.value.longitude],
        13
      );

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      // Add default marker
      leaflet
        .marker([userMarker.value.latitude, userMarker.value.longitude])
        .addTo(map)
        .bindPopup("Default Location");

      loading.value = false;
    }
  );
});
</script>

<style scoped>
#map-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

#map {
  width: 100%;
  height: 100%;
}

.map-controls {
  position: absolute;
  top: 100px;
  left: 69%;
  z-index: 1000; /* Ensure it's above the map */
  background-color: white; /* To ensure readability */
  border-radius: 8px;
  overflow: hidden; /* Keep the panel contents clipped */
  width: 30%;
}
/* create new css for mobile */
@media (max-width: 600px) {
  .map-controls {
    position: absolute;
    top: 80%;
    left: 0%;
    z-index: 1000; /* Ensure it's above the map */
    border-radius: 8px;
    overflow: hidden; /* Keep the panel contents clipped */
    width: 100%;
  }
}
</style>