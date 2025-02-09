<template>
  <!-- <div class="divLayoutMargin"> -->
    <v-container class="my -6 pa-4">

    <!-- If the user is not authorized, we show the invitation to connect the wallet -->
    <div v-if="!walletAddress">
      <h2>Please connect your wallet to access your account</h2>
      <NewUser />
    </div>

    <!-- If the user is authorized, show the rest of the components -->
    <div v-else>
      <!-- Header -->
      <v-container class="header-container" fluid>
        <v-row align="center">
          <h1>{{ userInfo.name }}</h1>
          <v-divider class="mr-3" inset vertical></v-divider>
          <v-icon>mdi-check-circle-outline</v-icon>
          <v-divider class="ms-3" inset vertical></v-divider>
        </v-row>
      </v-container>

      <!-- Toolbar -->
      <div class="parent">
        <div class="div1">
          <v-toolbar flat density="comfortable" class="d-flex justify-space-between">
            <v-divider class="ms-3" inset vertical></v-divider>

            <v-spacer></v-spacer>

            <span>
              <h2>Manage your account</h2>
            </span>

            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-account-edit</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </div>

        <div class="div2">
          <!-- User Info -->
          <UserInfoCard :user="userInfo" :loading="loadingUser" @refresh="refreshUser" />

          <!-- Button for editing user data -->
          <!-- <v-btn class="mt-4" color="primary" @click="editing = !editing">
            {{ editing ? 'Cancel' : 'Edit Personal Data' }}
          </v-btn> -->

          <!-- Form for editing personal data -->
          <v-card class="mt-4 pa-4" v-if="editing" outlined>
            <v-text-field v-model="editableUserInfo.name" label="Name" variant="outlined" />
            <v-text-field v-model="editableUserInfo.email" label="Email" variant="outlined" />
            <v-text-field v-model="editableUserInfo.status" label="Status" variant="outlined" />
            <v-card-actions>
              <v-btn color="success" @click="updateUserInfo">Save</v-btn>
              <v-btn color="error" text @click="cancelEdit">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div class="div3">
          <!-- Wallet Details -->
          <WalletDetailsCard :wallet="walletDetails" :loading="loadingWallet" @refresh="refreshWallet" />
        </div>

        <div class="div5">
          <!-- My Properties -->
          <MyPropertiesCard :properties="userProperties" />
        </div>

        <div class="div4">
          <!-- Last Transactions -->
          <LastTransactionsCard :transactions="recentTransactions" />
        </div>
      </div>
    </div>
  <!-- </div> -->
  </v-container>
</template>

<script setup>
import UserInfoCard from "@/components/AccountComponents/UserInfoCard.vue";
import WalletDetailsCard from "@/components/AccountComponents/WalletDetailsCard.vue";
import MyPropertiesCard from "@/components/AccountComponents/MyPropertiesCard.vue";
import LastTransactionsCard from "@/components/AccountComponents/LastTransactionsCard.vue";
import { ref, onMounted, watch } from "vue";
import { useWallet } from "@/composables/useWallet";
import axios from "axios";
import { ethers } from 'ethers';
import LoginWithMetaMask from "@/components/AccountComponents/LoginWithMetaMask.vue";
import NewUser from "@/components/AccountComponents/NewUser.vue";

const { walletAddress, connectWallet } = useWallet();

const userInfo = ref({
  name: "Unknown User",
  email: "unknow@example.com",
  status: "not verified",
});

const walletDetails = ref({
  address: "Unknowns Address",
  balance: "0.00",
  network: "Unksnown Network",
});

const userProperties = ref([
  { id: 1, name: "Sunny Villa", location: "Miami, FL", value: "500,000 USD" },
  { id: 2, name: "Urban Apartment", location: "NYC, NY", value: "750,000 USD" },
]);

const recentTransactions = ref([
  { id: 1, type: "Purchase", details: "Bought Urban Apartment", date: "2024-11-01" },
  { id: 2, type: "Sale", details: "Sold Sunny Villa", date: "2024-10-15" },
]);

// состояние загрузки
const loadingWallet = ref(false);
const loadingUser = ref(false);

// для редактирования данных
const editing = ref(false);
const editableUserInfo = ref({ name: "", email: "", status: "" });

onMounted(() => {
  if (walletAddress.value) {
    loadUserData();
  }
});

watch(walletAddress, (newVal) => {
  if (newVal) {
    loadUserData();
  }
});

async function getSignatureAndMessageGET() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const message = "Login to TrustTheProcess - " + new Date().getTime();
  const signature = await signer.signMessage(message);


  return { message, signature };
}

async function loadUserData() {
  loadingUser.value = true;
  try {
    // const { message, signature } = await getSignatureAndMessageGET();
    const response = await axios.get('http://localhost:5001/user/get', {
      walletAddress: walletAddress.value,
      // message,
      // signature
    });
    if (response.data.success) {
      userInfo.value = response.data.user;
    } else {
      console.error('failed to load user data', response.data.message);
    }
  } catch (error) {
    console.error('error loading user data:', error);
  } finally {
    loadingUser.value = false;
  }
}

// call when refersh of user value is needed
async function refreshWallet() {
  console.log('refreshing wallet');
  loadingWallet.value = true;
  setTimeout(() => {
    walletDetails.value.balance = "1.23";
    loadingWallet.value = false;
  }, 2000);
}
async function refreshUser() {
  loadingUser.value = true;
  setTimeout(() => {
    userInfo.value.name = "John Updated";
    loadingUser.value = false;
  }, 2000);
}


// async function updateUserInfo() {
//   try {
//     const { message, signature } = await getSignatureAndMessage();
//     const response = await axios.post('http://localhost:5001/user/update', {
//       walletAddress: walletAddress.value,
//       name: editableUserInfo.value.name,
//       email: editableUserInfo.value.email,
//       status: editableUserInfo.value.status,
//       message,
//       signature
//     });
//     if (response.data.success) {
//       userInfo.value = { ...editableUserInfo.value };
//       editing.value = false;
//       alert('User data updated!');
//     } else {
//       alert('Update failed: ' + response.data.message);
//     }
//   } catch (error) {
//     console.error('error updating user:', error);
//   }
// }
</script>

<style scoped>
.divLayoutMargin {
  margin: 3.5em;
}
.v-toolbar {
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 8px;
}
.v-divider {
  visibility: hidden;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0.1fr repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 4; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 2 / 2 / 3 / 3; }
.div4 { grid-area: 3 / 1 / 4 / 3; }
.div5 { grid-area: 2 / 3 / 4 / 4; }
.div1, .div2, .div3, .div4, .div5 {
  margin: 0.5em;
}
</style>
