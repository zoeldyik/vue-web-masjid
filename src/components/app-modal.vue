<template>
  <v-dialog
    v-model="dialog"
    @click:outside="$emit('close')"
    @keydown="$emit('close')"
    width="500"
  >
    <v-card>
      <v-card-title class="h6 font-weight-medium">
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ text }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" text @click="$emit('close')">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "app-modal",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    dialog: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
