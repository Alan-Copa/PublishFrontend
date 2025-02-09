<template>
    <v-card class="mx-auto pa-4" outlined>
      <v-card-title>
        <v-icon start>mdi-home</v-icon>
        My Properties
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="property in properties" :key="property.id">
            <v-list-item-title>{{ property.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ property.location }} - {{ property.value }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  defineProps({
    properties: { type: Array, required: true },
  });
  </script>
  