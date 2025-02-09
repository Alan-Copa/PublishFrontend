<template>
    <v-card class="mx-auto pa-4" outlined>
      <v-card-title>
        <v-icon start>mdi-history</v-icon>
        Last Transactions
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="transaction in transactions" :key="transaction.id">
            <v-list-item-title>{{ transaction.type }}</v-list-item-title>
            <v-list-item-subtitle>{{ transaction.details }} - {{ transaction.date }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  defineProps({
    transactions: { type: Array, required: true },
  });
  </script>
  