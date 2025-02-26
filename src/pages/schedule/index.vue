<template>
  <v-container class="pa-6">
    <!-- Header -->
    <v-container class="header-container" fluid>
      <v-row align="center" justify="center">
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <h1 class="display-2">Schedule a Meeting</h1>
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <v-icon size="36">mdi-calendar-plus</v-icon>
        <v-divider class="mr-3"></v-divider>
      </v-row>
    </v-container>

    <!-- Schedule a Meeting Form -->
    <v-form ref="form" v-model="formValid" lazy-validation>
      <v-card class="mx-auto content-card pa-6" max-width="500" elevation="8">
        <v-container class="pt-4">

          <!-- Name & Surname -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="First Name"
                v-model="firstName"
                :rules="[requiredRule]"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Surname"
                v-model="surname"
                :rules="[requiredRule]"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Email -->
          <v-text-field
            label="Email"
            v-model="email"
            :rules="[requiredRule, emailRule]"
            variant="outlined"
            type="email"
            required
          ></v-text-field>

          <!-- Purpose of Meeting -->
          <v-select
            label="Purpose of Meeting"
            v-model="meetingPurpose"
            :items="meetingPurposes"
            :rules="[requiredRule]"
            variant="outlined"
            required
          ></v-select>

          <!-- Date -->
          <v-date-input
            label="Select Date"
            v-model="selectedDate"
            :rules="[requiredRule]"
            variant="outlined"
            required
          ></v-date-input>

          <!-- Time -->
          <v-time-picker
            format="24hr"
            color="green-lighten-1"
            v-model="selectedTime"
            full-width
            :rules="[requiredRule]"
            label="Select Time"
            variant="outlined"
            required
          ></v-time-picker>

          <!-- Additional Notes -->
          <v-textarea
            label="Additional Notes (Optional)"
            v-model="notes"
            variant="outlined"
            rows="3"
          ></v-textarea>

        </v-container>

        <!-- Action Buttons -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-2" @click="submitMeeting">
            Schedule Meeting
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// Form fields
const firstName = ref("");
const surname = ref("");
const email = ref("");
const meetingPurpose = ref(null);
const selectedDate = ref(null);
const selectedTime = ref(null);
const notes = ref("");
const formValid = ref(false);

// Meeting purposes
const meetingPurposes = [
  "Demo",
  "Business Call",
  "Consulting",
  "Networking",
  "Follow-up",
];

// Validation rules
const requiredRule = (value) => !!value || "This field is required";
const emailRule = (value) =>
  !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address";

// Submit function
const submitMeeting = () => {
  if (!formValid.value) {
    alert("Please correct the highlighted errors before submitting.");
    return;
  }

  alert(
    `Meeting Scheduled!\n
    Name: ${firstName.value} ${surname.value}\n
    Email: ${email.value}\n
    Purpose: ${meetingPurpose.value}\n
    Date: ${selectedDate.value}\n
    Time: ${selectedTime.value}\n
    Notes: ${notes.value || "None"}`
  );

  // Clear form fields after submission
  firstName.value = "";
  surname.value = "";
  email.value = "";
  meetingPurpose.value = null;
  selectedDate.value = null;
  selectedTime.value = null;
  notes.value = "";
};
</script>

<style scoped>
.inv {
  opacity: 0;
}

.content-card {
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

.v-card-actions {
  justify-content: flex-end;
}

h1 {
  font-weight: bold;
}

.v-text-field,
.v-select,
.v-date-input,
.v-time-picker,
.v-textarea {
  margin-bottom: 16px;
}
</style>
