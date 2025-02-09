<template>
    <v-empty-state icon="$success">
      <template v-slot:media>
        <v-icon color="surface-variant"></v-icon>
      </template>
  
      <template v-slot:headline>
        <div class="text-h4">
          All Done For Now!
        </div>
      </template>
  
      <template v-slot:title>
        <div class="text-h6">
          You're all caught up.
        </div>
      </template>
  
      <template v-slot:text>
        <div class="text-medium-emphasis text-caption">
          Great job on completing all your tasks! This might be a good time to relax or consider planning your next set of goals. If you think of something new, just hit the button below to add a new task.
        </div>
      </template>
    </v-empty-state>
  </template>


<!-- LOADER -->

<template>
    <div class="pa-4 text-center">
      <v-btn
        :disabled="dialog"
        color="primary"
        icon="mdi-refresh"
        text="Start loading"
        @click="dialog = true"
      ></v-btn>
  
      <v-dialog
        v-model="dialog"
        max-width="320"
        persistent
      >
        <v-list
          class="py-2"
          color="primary"
          elevation="12"
          rounded="lg"
        >
          <v-list-item
            prepend-icon="$vuetify-outline"
            title="Refreshing Application..."
          >
            <template v-slot:prepend>
              <div class="pe-4">
                <v-icon color="primary" size="x-large"></v-icon>
              </div>
            </template>
  
            <template v-slot:append>
              <v-progress-circular
                color="primary"
                indeterminate="disable-shrink"
                size="16"
                width="2"
              ></v-progress-circular>
            </template>
          </v-list-item>
        </v-list>
      </v-dialog>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          dialog: false,
        }
      },
  
      watch: {
        dialog (val) {
          if (!val) return
  
          setTimeout(() => (this.dialog = false), 4000)
        },
      },
    }
  </script>

  <!-- Nested dialog see vuetify page -->