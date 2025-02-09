/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// Optional: Expose `L` globally if needed
window.L = L;

import assign from "object-assign";

// Polyfill `Object.assign` if not available
if (!Object.assign) {
  Object.assign = assign;
}

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
