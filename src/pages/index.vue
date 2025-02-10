<template>

  <!-- welcome -->
  <div class="divAsk">
      <h1 class="display-2 text-center text-primary">Welcome to My Portfolio</h1>
      <p class="text-h6 text-center text-secondary">
        My favorite projects and technologies.
      </p>
      <v-btn large color="primary" class="mt-6" to="/projects">
        See Projects
      </v-btn>  
      <!-- <v-btn large color="primary" class="mt-6" href="/account">
        Sync Wallet
      </v-btn> -->
    </div>
    
  <!-- Call to Action -->
  <!-- <div class="divAsk">
          <h1 class="display-2 text-center text-primary">Start Investing Today</h1>
          <p class="text-h6 text-center text-secondary">
            Explore the world of decentralized real estate ownership.
            </p>
            <v-btn large color="primary" class="mt-6" href="/uploadUnit">
              Tokenize!
            </v-btn>
        </div> -->
       
  
        <div class="divAsk">
          <h1 class="display-2 text-center text-primary">Overview of My Projects</h1>
          <CardSlider></CardSlider>
        </div>
        <!-- <div class="divAsk">
          <SlideGroups></SlideGroups>
        </div> -->
  
        <!-- <div class="divAsk">
          <h1 class="display-2 text-center text-primary">Explore on the Map!</h1>
          <p class="text-h6 text-center text-secondary">
            
          </p>
          <v-btn large color="primary" class="mt-6" href="/map">
            Explore Properties
          </v-btn>
        </div> -->
  
        <!-- Features Section -->
     <!-- <div fluid>
          <h2 class="text-h4 text-center mb-6 text-primary">Our Features</h2>
          <v-row align="center" justify="center">
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="64">mdi-home-modern</v-icon>
              <h3 class="text-h6 mt-4">Innovative Properties</h3>
              <p>Curated properties registered securely on the blockchain.</p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="64">mdi-security</v-icon>
              <h3 class="text-h6 mt-4">Secure Transactions</h3>
              <p>Seamless, transparent property transactions via smart contracts.</p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="64">mdi-earth</v-icon>
              <h3 class="text-h6 mt-4">Global Access</h3>
              <p>Invest and own properties globally from the comfort of your home.</p>
            </v-col>
          </v-row>
        </div>

        <v-divider class="mt-10"></v-divider> -->
  
  </template>
  
  <script setup>
  // Placeholder if needed
  </script>
  
  <style scoped>
  
  .divAsk {
    height:"600px";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 7em;
  }

  h1 {
    font-size: 2.5em;
  }
  
  </style>