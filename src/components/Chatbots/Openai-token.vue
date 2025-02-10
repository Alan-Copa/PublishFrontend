<template>
    <v-container class="pa-6">
       <!-- Header -->
       <v-container class="header-container" fluid>
        <v-row align="center">
          <h1>Free GPT-4o</h1>
          <v-divider class="inv mr-3" inset vertical></v-divider>
          <v-icon>mdi-hand-heart</v-icon>
          <v-divider class="inv ms-3" inset vertical></v-divider>
        </v-row>
      </v-container>

      
      <v-row>
      <v-col cols="12">
        <v-card class="elevation-12">
          <v-card-title class="headline">LLMs are not perfect, be aware!</v-card-title>
          <v-card-text>
            <v-alert
              v-if="!messages.length"
              value="true"
              type="info"
              outlined
              dense
            >
              Start a conversation with the AI chatbot
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  <!-- Chat Window -->
  <v-container class="chat-window" fluid>
    <v-row>
      <v-col cols="12">
        <div class="chat-bubbles">
          <div
            v-for="msg in messages"
            :key="msg.id"
            :class="['chat-bubble', msg.sender === 'User GG' ? 'sent' : 'received']"
          >
            <div class="message-container">
              <div class="sender text-caption">{{ msg.sender }}</div>
              <div class="message">{{ msg.message }}</div>
              <div class="timestamp text-caption">{{ msg.timestamp }}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- Message Input -->
  <v-container class="input-container" fluid>
    <v-row align="center">
      <v-col cols="10">
        <v-text-field
          v-model="message"
          label="Type a message..."
          outlined
          dense
          clearable
          @keyup.enter="sendMessage"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn
          @click="sendMessage"
          color="primary"
          block
        >
          Send
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</v-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// State variables
const messages = ref([]);
const message = ref("");

// Send message
const sendMessage = async () => {
  if (!message.value.trim()) return; // Avoid empty messages

  const send = {
    sender: "User GG",
    message: message.value,
  };

  // Add the user's message to the chat
  addMessage(send);

  message.value = ""; // Clear input field

  try {
    // Send to the AI chatbot
    const response = await axios.post("http://localhost:5001/ai-chatbot-token/message", send);

    // Add the chatbot's response to the chat
    addMessage(response.data);
  } catch (err) {
    console.error("Error:", err);
  }
};

// Add message to the chat
const addMessage = (_message) => {
  messages.value.push({
    id: messages.value.length,
    sender: _message.sender || "AI Chatbot",
    message: _message.message,
    timestamp: new Date().toLocaleTimeString(),
  });

  // Scroll to the bottom of the chat window
  setTimeout(() => {
    const chatWindow = document.querySelector('.chat-bubbles');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, 0);
};

// Clear chat
const clearMessages = () => {
  messages.value = [];
};
</script>

<style scoped>
/* Chat Window Styles */
.chat-window {
  display: flex;
  flex-direction: column;
  /* height: 60vh; */
  overflow: hidden;
  /* background-color: #f9f9f9; */
}

.chat-bubbles {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chat-bubble {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  /* background-color: #c01010; */
  box-shadow: 0 1px 3px rgba(239, 237, 237, 0.1);
}

.sent {
  align-self: flex-end;
  /* background-color: #3fab1b; */
}

.received {
  align-self: flex-start;
  opacity: 0.8; /* Adjust intensity (0.0 to 1.0) */
  background-color: #4a4a4a;
  /* background-color: #000000; */
}

.message-container {
  display: flex;
  flex-direction: column;
}

.sender {
  font-weight: bold;
  margin-bottom: 5px;
}

.message {
  font-size: 1rem;
}

.timestamp {
  font-size: 0.75rem;
  text-align: right;
  margin-top: 5px;
  color: #999;
}

.input-container {
  padding: 10px;
  /* background-color: #fff; */
}

.inv {
  opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>

