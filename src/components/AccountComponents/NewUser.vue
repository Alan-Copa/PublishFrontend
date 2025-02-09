<template>

<v-container class="pa-6">
  <h1 class="display-2">Access Your Account</h1>

    <!-- <v-card class="my-6 pa-4" elevation="2" rounded> -->

  <v-container class="login-container">
    <v-row class="justify-center align-center" no-gutters>
      <!-- Left: Login Component -->
      <v-col cols="12" md="5" class="d-flex justify-center">
        <LoginComp />
      </v-col>

      <!-- Right: Login Card -->
      <v-col cols="12" md="5" class="d-flex justify-center">
        <v-card
          class="login-card pa-8"
          elevation="0"
          max-width="450"
          rounded="lg"
          variant="outlined"
        >
          <v-container class="d-flex flex-column align-center gap-4">
            <h3 class="text-h5 font-weight-bold mb-3">Sign in with other services</h3>

            <v-btn block variant="outlined" color="blue-darken-2">
              <v-icon left>mdi-google</v-icon>
              Google
            </v-btn>

            <v-btn block variant="outlined" color="blue">
              <v-icon left>mdi-facebook</v-icon>
              Facebook
            </v-btn>

            <LoginWithGithub />
            <LoginWithLinkedin />

            <v-divider class="my-4"></v-divider>

            <h4 class="text-subtitle-1 font-weight-medium">or connect with</h4>

            <LoginWithMetaMask />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- </v-card> -->
</v-container>
</template>


<script setup>
import { useWallet } from '@/composables/useWallet';
import { Log } from 'ethers';
defineProps({

});
</script>

<style scoped>
.login-card {
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 24px;
}

.gap-4 {
  gap: 16px;
}
</style>

