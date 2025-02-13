<template>
    <v-card class="content-card pa-6" elevation="8">
        <v-card-title class="text-h5 font-weight-bold">
            <v-icon class="mr-2">mdi-chart-bar</v-icon> Data Visualization
        </v-card-title>
        <v-divider class="my-2"></v-divider>
        <v-container class="iframe-container">
            <iframe
            src="/data-viz-portfolio/interactive/index.html"
            width="100%"
            height="250"
            style="border: none; border-radius: 8px;"
            ></iframe>
        </v-container>
    </v-card>
</template>

<script setup>
</script>

<style scoped>

</style>