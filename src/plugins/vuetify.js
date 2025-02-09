/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   theme: {
//     defaultTheme: 'dark',
//   },
// })

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#f5f5f5',
          primary: '#6200ea',
          secondary: '#03dac6',
          error: '#b00020',
          success: '#00c853',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#1e1e1e',
          primary: '#bb86fc',
          secondary: '#03dac6',
          error: '#cf6679',
          success: '#00c853',
        },
      },
    },
  },
});
