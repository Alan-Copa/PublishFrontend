<template>
  <v-card :loading="loading" class="mx-auto pa-4" outlined>
    <v-card-title>
      <v-icon start>mdi-wallet</v-icon>
      Wallet Details
    </v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item>
          <v-list-item-title>Address:</v-list-item-title>
          <v-list-item-subtitle>{{ walletAddress}}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Balance:</v-list-item-title>
          <v-list-item-subtitle>{{ walletBalance }} ETH</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Network:</v-list-item-title>
          <v-list-item-subtitle>{{ networkName }}</v-list-item-subtitle>
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
import { useWallet } from '@/composables/useWallet';
const { walletAddress, walletBalance, networkName } = useWallet();
defineProps({
  wallet: { type: Object, required: true },
  loading: { type: Boolean, default: false },
});
</script>
