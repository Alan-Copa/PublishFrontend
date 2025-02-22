<template>
    <v-card class="profile-card pa-4" elevation="8">
        <v-img src="/projects/philosophy.png" alt="Profile" height="250" cover class="rounded-lg"></v-img>
        <v-card-title class="text-h5 font-weight-bold">Alan Copa</v-card-title>
        <v-card-subtitle>Software Engineer | Data Scientist | Blockchain Dev</v-card-subtitle>
        <v-card-text class="text-body-1">
            Passionate about AI, data visualization, and decentralized applications.
        </v-card-text>
        <v-card-actions>
            <v-btn icon="mdi-github" variant="text" href="https://github.com/Alan-Copa" target="_blank"></v-btn>
            <v-btn icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/alan-copa-03776929b/" target="_blank"></v-btn>
            <v-btn icon="mdi-email" variant="text" href="mailto:alan.copa@usi.ch"></v-btn>
            <v-btn
          prepend-icon="mdi-email"
          title="Contact"
          to="/contact"
          color="green"
        >
          Contact
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
</script>

<style scoped>
</style>