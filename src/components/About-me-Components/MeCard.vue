<template>
    <v-card class="profile-card pa-4" elevation="8">
        <v-img src="/projects/philosophy.png" alt="Profile" height="250" cover class="rounded-lg"></v-img>
        <v-card-title class="text-h5 font-weight-bold">Alan Copa</v-card-title>
        <v-card-subtitle>Master Student in Financial Technology & Computing</v-card-subtitle>
        <v-card-text class="text-body-1">
          Passionate about Finance, AI, and decentralized applications.
          I also have a deep interest in Astronomy/Astrophysics, Space Exploration, Machine Learning, Geopolitics        </v-card-text>
        <v-card-actions>
            <v-btn icon="mdi-github" variant="text" href="https://github.com/Alan-Copa" target="_blank"></v-btn>
            <v-btn icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/alan-copa-03776929b/" target="_blank"></v-btn>
            <v-btn icon="mdi-email" variant="text" href="mailto:alan.copa@usi.ch"></v-btn>
            <v-btn
              icon="mdi-calendar"
              variant="text"
              to="/schedule"
            >
            </v-btn>
            <!-- CV button -->
            <v-btn
              prepend-icon="mdi-briefcase-download"
              title="Download CV"
              color="blue"
              href="https://drive.google.com/drive/folders/1O36sEWXWSEp1UPketSOkPMj6JGghZ1Qg"
              target="blank"
              download
            >
              CV
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
</script>

<style scoped>
</style>