
<template>
  
    <v-btn
      color="green"
      v-if="!logged"
      @click="LogingWithGitHub"
    >
      <v-icon>mdi-wallet</v-icon>
      Login with GitHub
    </v-btn>
    <v-btn
      v-else
      @click="logout"
    >
      Connected: {{ user }}
    </v-btn>
  
  </template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const logged = ref(false);
const user = ref('');
</script>
