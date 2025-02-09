<script setup>
import { useWallet } from '@/composables/useWallet';
import { email } from '@vuelidate/validators';
import axios from "axios";
import { ethers } from 'ethers';
const { getWalletAddress, walletAddress, connectWallet, disconnectWallet, truncateAddress } = useWallet();

async function getSignatureAndMessage() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const message = "Login to TrustTheProcess - " + new Date().getTime() + " - confirm to connect your wallet and login";
  const signature = await signer.signMessage(message);


  return { message, signature };
}

async function LogingWithMetamask() {
  const {message, signature} = await getSignatureAndMessage();
  try {
    const addr = await getWalletAddress();
    const response =  await axios.post('http://localhost:5001/user/login', {
      walletAddress: addr,
      message,
      signature
    });
    console.log('message:', message);
    if (response.data.success) {
      connectWallet();
    } else {
      console.error('login failed', response.data.message);
    }
  } catch (error) {
    console.error('error logging in:', error);
  }
}

</script>

<template>
  
  <v-btn
    color="primary"
    v-if="!walletAddress"
    @click="LogingWithMetamask"
  >
    <v-icon>mdi-wallet</v-icon>
    Login with MetaMask
  </v-btn>
  <v-btn
    v-else
    @click="disconnectWallet"
  >
    Connected: {{ truncateAddress(walletAddress) }}
  </v-btn>

</template>
