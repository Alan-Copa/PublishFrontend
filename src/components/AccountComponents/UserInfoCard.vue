<template>
  <v-card :loading="loading" class="mx-auto pa-4" outlined>
    <v-card-title>
      <v-icon start>mdi-account</v-icon>
      User Information
    </v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item>
          <v-list-item-title>Name:</v-list-item-title>
          <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Email:</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Status:</v-list-item-title>
          <v-list-item-subtitle>{{ user.status }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn color="deep-purple-lighten-2" text @click="$emit('refresh')">
        Refresh
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script setup>
defineProps({
  user: { type: Object, required: true },
  loading: { type: Boolean, default: false },
});
</script>