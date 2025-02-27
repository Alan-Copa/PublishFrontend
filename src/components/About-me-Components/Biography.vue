<template>
    <v-card class="content-card pa-6" elevation="8">
        <v-card-title class="text-h5 font-weight-bold">
            <v-icon class="mr-2">mdi-information</v-icon> About Me
        </v-card-title>
        <v-divider class="my-2"></v-divider>
        <v-card-text>
            I'm <strong>Alan Copa</strong>, software engineer specializing in Finance, AI, blockchain, and web development.
            I speak Italian, English, German, and French. With a strong foundation in machine learning, smart contracts, Vue, and React, I create high-performance applications with a focus on usability and innovation.
            I have also obtained two 
            <a 
                href="https://www.linkedin.com/in/alan-copa-03776929b/" 
                target="_blank" 
                class="custom-link"
            >
            SVF-ASFC certificates
            </a> 
            in Leading a Team and Time Management.
        </v-card-text>
    </v-card>
</template>

<style scoped>
.custom-link {
    text-decoration: none;
    color: #1976d2; /* Standard blue */
    font-weight: 500;
    transition: color 0.2s ease-in-out;
}

.custom-link:hover {
    color: #8e24aa; /* Purple on hover */
    text-decoration: underline;
}
</style>
