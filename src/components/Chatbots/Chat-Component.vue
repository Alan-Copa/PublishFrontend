<template>
  <v-container class="pa-6">
    <!-- Header -->
    <v-container class="header-container" fluid>
      <v-row align="center" justify="center">
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <h1 class="display-2">Free {{ chatTitle }}</h1>
        <v-divider class="inv mr-3" inset vertical></v-divider>
        <v-icon>mdi-hand-heart</v-icon>
        <v-divider class="mr-3"></v-divider>
      </v-row>
    </v-container>

    <!-- Chat Notice -->
    <v-row>
      <v-col cols="12">
        <v-card class="elevation-8 rounded-lg">
          <v-card-title class="text-h5">
            {{ chatTitle }} - AI Chatbot
          </v-card-title>
          <v-card-text>
            <v-alert v-if="!messages.length" type="info" outlined dense>
              Remember, this is a demo chatbot. It may not understand everything you say.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Chat Window -->
    <v-container class="chat-window elevation-4" fluid ref="chatContainer">
      <v-row>
        <v-col cols="12">
          <div class="chat-bubbles">
            <transition-group name="fade">
              <div
                v-for="(msg, index) in messages"
                :key="msg.id"
                ref="messageRefs"
                :class="['chat-bubble', msg.sender === 'User' ? 'sent' : 'received']"
              >
                <div class="message-container">
                  <div class="sender text-caption font-weight-medium">{{ msg.sender }}</div>
                  <div class="message">{{ msg.message }}</div>
                  <div class="timestamp text-caption">{{ msg.timestamp }}</div>
                </div>
              </div>
            </transition-group>
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
            variant="outlined"
            density="comfortable"
            rounded
            clearable
            hide-details
            class="chat-input"
            @keyup.enter="sendMessage"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn @click="sendMessage" color="blue-darken-2" block>
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const type = computed(() => route.params.type || "chatbot");

// State variables
const messages = ref([]);
const message = ref("");
const chatContainer = ref(null); // Reference chat window only
const messageRefs = ref([]); // Track each message

// Dynamic chat title based on type
const chatTitle = computed(() => {
  return type.value || "AI Chatbot";
});

// Scroll to last message in the chat window (not the whole page)
const scrollToBottom = async () => {
  await nextTick();
  if (messageRefs.value.length > 0) {
    messageRefs.value[messageRefs.value.length - 1]?.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};

// Send message
const sendMessage = async () => {
  if (!message.value.trim()) return;

  const userMessage = {
    sender: "User",
    message: message.value,
    timestamp: new Date().toLocaleTimeString(),
  };

  // Add user message to chat
  messages.value.push(userMessage);
  message.value = ""; // Clear input field
  scrollToBottom();

  try {
    const apiUrl = `http://localhost:5001/ai-chatbot-${type.value}/message`;
    const response = await axios.post(apiUrl, userMessage);

    // Add AI response to chat
    messages.value.push({
      sender: "AI Chatbot",
      message: response.data.message,
      timestamp: new Date().toLocaleTimeString(),
    });
    scrollToBottom();
  } catch (err) {
    console.error("Error:", err);
  }
};

// Ensure scroll stays at the bottom when mounted
onMounted(scrollToBottom);
</script>

<style scoped>
/* Smooth fade-in effect for messages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Chat Window - Fixed height so it doesn’t push the page down */
.chat-window {
  display: flex;
  flex-direction: column;
  height: 60vh; /* Fixed height to prevent whole page scrolling */
  overflow-y: auto;
  border-radius: 10px;
  padding: 16px;
  backdrop-filter: blur(10px);
}

/* Chat Bubbles */
.chat-bubbles {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
}

/* Chat Bubble Styles */
.chat-bubble {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
}

/* User Messages - Right-aligned */
.sent {
  align-self: flex-end;
  background-color: #1976d2; 
  border-top-right-radius: 4px;
}

/* AI Messages - Left-aligned */
.received {
  align-self: flex-start;
  background-color: #e0e0e0;
  color: black;
  border-top-left-radius: 4px;
}

/* Message Input */
.input-container {
  /* padding: 12px; */
}

.chat-input {
  border-radius: 30px;
}

.sender {
  font-weight: 600;
  margin-bottom: 4px;
  color: #a00000;
}

.timestamp {
  font-size: 0.75rem;
  text-align: right;
  margin-top: 5px;
  color: #666;
}

.inv {
  opacity: 0; /* Ensures it doesn’t affect layout */
}
</style>
