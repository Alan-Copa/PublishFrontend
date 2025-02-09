<template>
  <v-container class="my-6 pa-4">
    <!-- Header -->
    <v-container class="header-container" fluid>
      <v-row align="center">
        <h1>Crowdfund</h1>

        <v-divider class="ms-3" inset vertical></v-divider>
        <v-icon>mdi-heart</v-icon>


        <v-spacer></v-spacer>
        <h1> {{contractAddress}}</h1>
        
      </v-row>
    </v-container>

    <!-- Contract Details -->

   </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ethers } from "ethers";
import { useRoute } from "vue-router";
import CrowdfundingAbi from "../../../artifacts/contracts/Crowdfunding.json";

const route = useRoute();
const contractAddress = route.params.address;

const owner = ref("");
const goal = ref(0);
const totalPledged = ref(0);
const deadline = ref(0);
const numberOfDonors = ref(0);
const isOwner = ref(false);
const campaignEnded = ref(false);
const hasPledged = ref(false);

const loadContractDetails = async () => {

};

onMounted(() => {
  loadContractDetails();
});

// Actions
const pledgeFunds = async () => { /* Pledge logic */ };
const claimRefund = async () => { /* Refund logic */ };
const endCampaign = async () => { /* End campaign logic */ };
</script>

<style scoped>

</style>
