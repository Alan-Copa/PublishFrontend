<template>
  <v-card class="pa-4">
    <!-- Dialog Title -->
    <v-card-title class="text-h6">
      {{ unit.name }}
    </v-card-title>

    <!-- Subtitle -->
    <v-card-subtitle>Address: {{ unit.locationHash }}</v-card-subtitle>

    <!-- Dialog Content -->
    <v-card-text>
      <v-container>
        <v-row>
          <!-- Image -->
          <v-col cols="12" md="4">
            <v-img :src="unit.image" height="200px" cover></v-img>
          </v-col>

          <!-- Property Details -->
          <v-col cols="12" md="8">

            <!-- Property Details -->
            <v-col cols="12" md="8">
              <v-row>
                <!-- <v-col cols="6">
                  <p><strong>Property ID:</strong></p>
                </v-col>
                <v-col cols="6">
                  <p>{{ unit.propertyId }}</p>
                </v-col> -->

                <v-col cols="6">
                  <p><strong>Value:</strong></p>
                </v-col>
                <v-col cols="6">
                  <p>{{ formatCurrency(unit.value) }}</p>
                </v-col>

                <v-col cols="6">
                  <p><strong>Monthly Rental:</strong></p>
                </v-col>
                <v-col cols="6">
                  <p>{{ formatCurrency(unit.monthlyRental) }}</p>
                </v-col>

                <v-col cols="6">
                  <p><strong>Unallocated Supply:</strong></p>
                </v-col>
                <v-col cols="6">
                  <p>{{ unit.unallocatedSupply }} tokens</p>
                </v-col>

                <v-col cols="6">
                  <p><strong>Total Supply:</strong></p>
                </v-col>
                <v-col cols="6">
                  <p>{{ unit.totalSupply }} tokens</p>
                </v-col>
  <!-- 
                <v-col cols="6">
                  <p><strong>Property URI:</strong></p>
                </v-col>
                <v-col cols="6">
                  <p>
                    <a :href="unit.uri" target="_blank" rel="noopener noreferrer">{{ unit.uri }}</a>
                  </p>
                </v-col> -->
                <v-col cols="6">
                  <p><strong>My Fraction of Property:</strong></p>
                </v-col>
                <v-col cols="6">
                  <v-chip color="blue" label small>
                    {{
                        isNaN(ownershipFraction.numerator / ownershipFraction.denominator)
                          ? "0.00"
                          : ((ownershipFraction.numerator / ownershipFraction.denominator) * 100).toFixed(2)
                      }}%                
                  </v-chip>
                </v-col>
                <v-col cols="6">
                  <p><strong>Available Fraction of Property:</strong></p>
                </v-col>
                <v-col cols="6">
                  <v-chip color="green" label small>
                    {{ ((unit.unallocatedSupply / unit.totalSupply)*100).toFixed(2) }}%
                  </v-chip>
                </v-col>
              </v-row>
            </v-col>

          </v-col>
        </v-row>
      </v-container>

      <!-- Actions -->
      <v-container>
        <v-row>
          <!-- Allocate Tokens Button -->
          <v-col cols="12" md="6">
            <v-btn
              color="primary"
              @click="toggleAllocateForm"            >
              Allocate Tokens
            </v-btn>
          </v-col>

          <!-- Transfer Tokens Button -->
          <v-col cols="12" md="6">
            <v-btn
              color="secondary"
              @click="toggleTransferForm"
            >
              Transfer Tokens
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <!-- Allocation Form -->
        <v-container v-if="showAllocateForm" class="mt-4">
          <!-- Recipient Address -->
          <v-text-field
            label="Recipient Address"
            v-model="allocateData.recipient"
            readonly
          ></v-text-field>

          <!-- Ownership Fraction -->
          <p><strong>Select Ownership Percentage:</strong></p>
          <v-row>
            <!-- Buttons for Predefined Percentages -->
            <v-col cols="2" v-for="percentage in [10, 25, 50, 75, 100]" :key="percentage">
              <v-btn
                color="primary"
                @click="setOwnershipFraction(percentage)"
              >
                {{ percentage }}%
              </v-btn>
            </v-col>
          </v-row>

          <!-- Manual Input for Percentage -->
          <v-text-field
            label="Enter Ownership Percentage"
            v-model="allocateData.percentageInput"
            type="number"
            @input="convertAllocatePercentageToFraction"
            class="mt-2"
          ></v-text-field>


          <!-- Display Token Quantity -->
          <!-- <p v-if="allocateData.ownershipFraction" class="mt-2">
            {{ ((allocateData.percentageInput * unit.unallocatedSupply)/100).toFixed(2) }} tokens
          </p> -->

          <!-- Confirm Button -->
          <v-btn color="success" @click="allocateTokens" class="mt-4">
            Confirm Allocation
          </v-btn>
        </v-container>


      <!-- Transfer Form -->
      <v-container v-if="showTransferForm" class="mt-4">
        <!-- Sender Address -->
        <v-text-field
          label="Sender Address"
          v-model="transferData.sender"
          readonly
          variant="outlined"
          :error-messages="v$.transferData.sender.$errors.map(e => e.$message)"
          outlined
          clearable
          required
        ></v-text-field>

        <!-- Recipient Address -->
        <v-text-field
          label="Recipient Address"
          v-model="transferData.recipient"
          variant="outlined"
          :error-messages="v$.transferData.recipient.$errors.map(e => e.$message)"
          outlined
          clearable
          required
        ></v-text-field>

        <!-- Ownership Fraction -->
        <p><strong>Select Transfer Percentage:</strong></p>
        <v-row>
          <!-- Buttons for Predefined Percentages -->
          <v-col cols="2" v-for="percentage in [10, 25, 50, 75, 100]" :key="percentage">
            <v-btn
              color="secondary"
              @click="setTransferFraction(percentage)"
            >
              {{ percentage }}%
            </v-btn>
          </v-col>
        </v-row>

        <!-- Manual Input for Percentage -->
        <v-text-field
          label="Enter Percentage to Transfer"
          v-model="transferData.percentageInput"
          type="number"
          @input="convertTransferPercentageToFraction"
          class="mt-2"
          variant="outlined"
          :error-messages="v$.transferData.percentageInput.$errors.map(e => e.$message)"
          outlined
          clearable
          required
        ></v-text-field>

        <!-- Confirm Button -->
        <v-btn color="success" @click="transferTokens" class="mt-4">
          Confirm Transfer
        </v-btn>
      </v-container>

    </v-card-text>

    <!-- Dialog Actions -->
    <v-card-actions>
      <v-btn text color="primary" @click="$emit('close-dialog')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>



<script setup>
import { defineProps } from "vue";
import axios, { all } from "axios";
import {useVuelidate} from "@vuelidate/core";
import {email, numeric, required} from "@vuelidate/validators";

// Format currency function
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

// Reactive states
const props = defineProps({
  unit: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const showAllocateForm = ref(false);
const showTransferForm = ref(false);
const toggleAllocateForm = () => {
  showAllocateForm.value = !showAllocateForm.value;
  showTransferForm.value = false;
};
const toggleTransferForm = () => {
  showTransferForm.value = !showTransferForm.value;
  showAllocateForm.value = false;
};

const walletAddress = ref("");
const previouslyConnected = localStorage.getItem('connectedWallet');
walletAddress.value = previouslyConnected;

const allocateData = reactive({
  recipient: previouslyConnected || '',
  ownershipFraction: '', // Format: 'numerator/denominator'
});

const transferData = reactive({
  sender: previouslyConnected || '',
  recipient: '',
  ownershipFraction: '', // Format: 'numerator/denominator'
});

const ownershipFraction = reactive({
  numerator: 0,
  denominator: 1,
});

// Vuelidate instance
const rules = {
  allocateData: {
    recipient: { required },
    percentageInput: { required, numeric, between: [0, 100] },
  },
  transferData: {
    sender: { required },
    recipient: { required },
    percentageInput: { required, numeric, between: [0, 100] },
  },
};
const v$ = useVuelidate(rules, { allocateData, transferData });


// Function to fetch ownership fraction
const fetchOwnershipFraction = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5001/ownership-fraction/${props.unit.propertyId}/${walletAddress.value}`
    );

    if (response.data.success) {
      ownershipFraction.numerator = parseInt(response.data.ownershipFraction.numerator);
      ownershipFraction.denominator = parseInt(response.data.ownershipFraction.denominator);
      console.log("Ownership fraction fetched successfully:", ownershipFraction);
    } else {
      console.error("Failed to fetch ownership fraction:", response.data.message);
    }
  } catch (error) {
    console.error("Error fetching ownership fraction:", error);
  }
};

onMounted(() => {
  fetchOwnershipFraction();
});

// Function to set ownership fraction for predefined percentages
const setOwnershipFraction = (percentage) => {
  const denominator = 100; // Base denominator is 100 for percentages
  const numerator = (percentage / 100) * denominator; // Calculate numerator
  allocateData.ownershipFraction = `${numerator}/${denominator}`; // Update fraction
  allocateData.percentageInput = percentage; // Update input for consistency
};
const setTransferFraction = (percentage) => {
  const denominator = 100; // Base denominator is 100 for percentages
  const numerator = (percentage / 100) * denominator; // Calculate numerator
  transferData.ownershipFraction = `${numerator}/${denominator}`; // Update fraction
  transferData.percentageInput = percentage; // Update input for consistency
};

const convertAllocatePercentageToFraction = () => {
  convertPercentageToFraction(allocateData, allocateData.percentageInput);
};
const convertTransferPercentageToFraction = () => {
  convertPercentageToFraction(transferData, transferData.percentageInput);
};
// Function to convert entered percentage into a fraction
// Generic Function to convert entered percentage into a fraction
const convertPercentageToFraction = (dataObject, percentageInput) => {
  const percentage = parseFloat(percentageInput);
  if (isNaN(percentage) || percentage < 0 || percentage > 100) {
    dataObject.ownershipFraction = ""; // Clear fraction for invalid input
  } else {
    const denominator = 100; // Base denominator is 100
    const numerator = (percentage / 100) * denominator; // Calculate numerator
    dataObject.ownershipFraction = `${numerator}/${denominator}`; // Update fraction
  }
};

// Methods for API calls
const allocateTokens = async () => {
  await v$.value.$validate();
  // if (!v$.value.$invalid) {
    const [numerator, denominator] = allocateData.ownershipFraction.split("/");
    console.log("Allocating tokens:", allocateData.recipient);
    try {
      const response = await axios.post("http://localhost:5001/allocate-tokens", {
        propertyId: props.unit.propertyId,
        recipient: allocateData.recipient,
        numerator: parseInt(numerator),
        denominator: parseInt(denominator),
      });
      console.log(response.data.message);
      showAllocateForm.value = false;
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Error allocating tokens:", error);
    }
  // }
};

const transferTokens = async () => {
  await v$.value.$validate();
  // if (!v$.value.$invalid) {
    const [numerator, denominator] = transferData.ownershipFraction.split("/");
    try {
      // Ensure approval is granted
      // await setApprovalForAll(CONTRACT_ADDRESS);

      const response = await axios.post("http://localhost:5001/transfer-tokens", {
        propertyId: props.unit.propertyId,
        sender: transferData.sender,
        recipient: transferData.recipient,
        numerator: parseInt(numerator),
        denominator: parseInt(denominator),
      });
      console.log(response.data.message);
      showTransferForm.value = false;
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Error transferring tokens:", error);
    }
  // }
};

</script>

