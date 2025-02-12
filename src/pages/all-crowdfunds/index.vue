<template>
    <v-container class="my-6 pa-4">
      <!-- Header -->
      <v-container class="header-container" fluid>
        <v-row align="center">
          <h1>Crowdfunding Contracts</h1>
          <v-divider class="inv mr-3" inset vertical></v-divider>
          <v-icon>mdi-hand-heart</v-icon>
          <v-divider class="inv ms-3" inset vertical></v-divider>
        </v-row>
      </v-container>
  
      <!-- Contracts List -->
      <v-row>
        <v-col
          v-for="contract in contracts"
          :key="contract.address"
          cols="12"
          md="6"
        >
          <v-card class="mb-4" :style="{ backgroundColor: contract.isOwner ? 'green' : '' }"          >
            <v-card-title>
              Contract: {{ contract.address }}
            </v-card-title>
            <v-card-text>
              <p><strong>Owner:</strong> {{ contract.owner }}</p>
              <p><strong>Goal (ETH):</strong> {{ contract.goal }}</p>
              <p><strong>Total Pledged (ETH):</strong> {{ contract.totalPledged }}</p>
              <p><strong>Deadline:</strong> {{ formatDeadline(contract.deadline) }}</p>
              <p><strong>Number of Donors:</strong> {{ contract.nDonors }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="success" @click="pledge(contract.address)">
                Pledge
              </v-btn>
              <v-btn color="error" v-if="contract.isOwner" @click="endCampaign(contract.address)">
                End Campaign
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { ethers } from "ethers";
  import CrowdfundingAbi from "../../../artifacts/contracts/Crowdfunding.json";
  import axios from "axios";
  import { forEach } from "lodash";
  
  // State variables
  const contracts = ref([]);
  const userAddress = ref("");
  
  // Format deadline
  const formatDeadline = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  
  // Load contracts and user info
  const loadContracts = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install Metamask to use this feature!");
        return;
      }
  
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      userAddress.value = await signer.getAddress();
  
      // Get contract addresses from backend
      const response = await axios.get("http://localhost:5001/crowdfundings");
      const addresses = response.data.addresses;

      console.log("addresses", addresses);
      const crowdfunding_contracts = addresses.Crowdfunding
      // Fetch contract details for each address
      forEach(crowdfunding_contracts, async (address) => {
        const contract = new ethers.Contract(address, CrowdfundingAbi.abi, signer);
        const [owner, goal, deadline, , totalPledged, nDonors] = await contract.getCampaignDetails();

        console.log("owner", owner);
        // make gioal become a number
        console.log("goal", goal);
        
        console.log("user address",userAddress.value.toLowerCase());
        contracts.value.push({
          address,
          owner,
          goal: goal.toString(), // Fix for goal
          deadline: Number(deadline),
          totalPledged: totalPledged.toString(),
          nDonors: Number(nDonors),
          isOwner: owner.toLowerCase() === userAddress.value.toLowerCase(),
        });
      });
      
    } catch (error) {
      console.error("Failed to load contracts:", error);
      alert("Error loading contract details. Check the console for more information.");
    }
  };
  
  // Interact with a contract
  const pledge = async (contractAddress) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, CrowdfundingAbi.abi, signer);
  
      const amount = prompt("Enter pledge amount in ETH:");
      if (!amount || isNaN(amount) || Number(amount) <= 0) {
        alert("Invalid amount.");
        return;
      }
  
      const tx = await contract.pledge({ value: ethers.utils.parseEther(amount) });
      await tx.wait();
      alert("Pledge successful!");
      loadContracts();
    } catch (error) {
      console.error("Error pledging to contract:", error);
      alert("Failed to pledge. Check the console for details.");
    }
  };
  
  const endCampaign = async (contractAddress) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, CrowdfundingAbi.abi, signer);
  
      const tx = await contract.endCampaign();
      await tx.wait();
      alert("Campaign ended successfully!");
      loadContracts();
    } catch (error) {
      console.error("Error ending campaign:", error);
      alert("Failed to end campaign. Check the console for details.");
    }
  };
  
  // Load contracts on mount
  onMounted(loadContracts);
  </script>
  
  <style scoped>
  .inv {
  opacity: 0;
}
  </style>
  