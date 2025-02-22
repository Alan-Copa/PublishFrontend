import { ref, onMounted } from 'vue';
// import { ethers} from 'ethers';

export function useWallet() {
  const walletAddress = ref(null);
  const walletBalance = ref("0.00");
  const networkName = ref(null);

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  async function getWalletAddress() {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    walletAddress.value = accounts[0];
    console.log("connected wallet address:", walletAddress.value);
    return walletAddress.value;
  }

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("metamask is not installed. please install it to use this feature.");
      return;
    }

    try {
      await getWalletAddress();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(walletAddress.value);
      walletBalance.value = formatEther(balance);

      const network = await provider.getNetwork();
      networkName.value = network.name;
      console.log("initialized ethers.js. network:", network.name, "balance:", walletBalance.value);

      // store the connected wallet address to localStorage
      localStorage.setItem('connectedWallet', walletAddress.value);
    } catch (error) {
      console.error("failed to connect wallet:", error);
    }
      // reload window
      window.location.reload();
  };

  const disconnectWallet = () => {
    walletAddress.value = null;
    walletBalance.value = "0.00";
    networkName.value = null;
    localStorage.removeItem('connectedWallet');
    // reload window
    window.location.reload();
  };

  // attempt to restore the connection if a wallet was previously connected
  onMounted(async () => {
    if (!window.ethereum) return;

    // check if there was a previously connected wallet in localStorage
    const previouslyConnected = localStorage.getItem('connectedWallet');
    if (previouslyConnected) {
      try {
        // check if the user is still connected to that account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts && accounts.length > 0 && accounts.includes(previouslyConnected)) {
          walletAddress.value = previouslyConnected;
          const provider = new ethers.BrowserProvider(window.ethereum);
          const balance = await provider.getBalance(walletAddress.value);
          walletBalance.value = formatEther(balance);

          const network = await provider.getNetwork();
          networkName.value = network.name;
          console.log("restored wallet:", walletAddress.value, "network:", network.name, "balance:", walletBalance.value);
        } else {
          // if the account is no longer connected, remove it from localStorage
          localStorage.removeItem('connectedWallet');
        }
      } catch (error) {
        console.error("failed to restore wallet:", error);
        localStorage.removeItem('connectedWallet');
      }
    }
  });

  return {
    getWalletAddress,
    walletAddress,
    walletBalance,
    networkName,
    connectWallet,
    disconnectWallet,
    truncateAddress,
  };
}
