<template>
  <v-container class="my-6 pa-4">
    <!-- Header -->
    <v-container class="header-container" fluid>
      <v-row align="center">
        <h1>New Crowdfund</h1>
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <v-icon>mdi-hand-heart</v-icon>
        <v-divider class="inv ms-3" inset vertical></v-divider>
      </v-row>
    </v-container>

    <!-- Form -->
    <v-form ref="form" v-model="formValid" class="mt-6">
      <v-row>
        <!-- Goal Field -->
        <v-col cols="12" md="6">
          <v-text-field
            v-model="goal"
            label="Campaign Goal (ETH)"
            type="number"
            min="0"
            required
            hint="Enter the goal amount in ETH"
          ></v-text-field>
        </v-col>

        <!-- Duration Field -->
        <v-col cols="12" md="6">
          <v-text-field
            v-model="duration"
            label="Duration (Days)"
            type="number"
            min="1"
            required
            hint="Enter the campaign duration in days"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Submit Button -->
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn
            :disabled="!formValid"
            color="primary"
            @click="createCrowdfund"
          >
            Create Crowdfunding Campaign
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>



<script setup>
import { ref } from "vue";
// import { ethers } from "ethers";
import CrowdfundingAbi from "../../../artifacts/contracts/Crowdfunding.json"; // Adjust the path based on your setup
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

// Form validation and state
const formValid = ref(false);
const goal = ref("");
const duration = ref("");

const createCrowdfund = async () => {
  try {
    // Check if Metamask is available
    if (!window.ethereum) {
      alert("Please install Metamask to use this feature!");
      return;
    }
    // Convert input to the required format
    const goalETH = goal.value.toString();
    const durationInSeconds = parseInt(duration.value) * 24 * 60 * 60;

    // Connect to Metamask as the provider
    const provider = new ethers.BrowserProvider(window.ethereum);
    // Use Metamask as the signer
    const signer = await provider.getSigner();
    // Create a new Crowdfunding campaign
    const CrowdfundingFactory = new ethers.ContractFactory(CrowdfundingAbi.abi, CrowdfundingAbi.bytecode, signer);

    const crowdfundingContract = await CrowdfundingFactory.deploy(goalETH, durationInSeconds);
    // console.log("Contract instance created at address:", crowdfundingContract.address); // undefined why?
    // console.log("New Crowdfunding contract deployed at target:", crowdfundingContract.target);
    // Save the contract address to a file in backend
    let response = await axios.post("http://localhost:5001/new/crowdfunding", {
    // address: crowdfundingContract.address,
    target: crowdfundingContract.target,
    // block: crowdfundingContract.deployTransaction.blockNumber,
    });
    console.log("response", response.data);
    console.log("Contract address saved to contracts-addresses.json file");

    // redirect to the crowdfund-info page with the contract address
    router.push(`/crowdfund-info/${response.data.address}`);
    
  } catch (error) {
    console.error("Error creating crowdfunding campaign:", error);
    alert("Failed to create crowdfunding campaign. Check the console for details.");
  }
};

</script>


<style scoped>
.inv {
  opacity: 0;
}
</style>
