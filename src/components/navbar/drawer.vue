<template>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="drawer"
    app
    clipped
    right
    width="100%"
  >
    <!-- <v-list>
      <v-list-item-group> -->
    <v-list-item
      dense
      v-for="(item, i) in items"
      :key="i"
      @click="scroll(item.text)"
    >
      <v-list-item-icon>
        <v-icon color="dark">{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title class="text-uppercase dark--text">
        {{ item.text }}
      </v-list-item-title>
    </v-list-item>
    <!-- </v-list-item-group>
    </v-list> -->
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      items: [
        { icon: "mdi-file-table-box-multiple-outline", text: "tabel" },
        { icon: "mdi-map-marker-outline", text: "lokasi" },
        { icon: "mdi-account-circle-outline", text: "contact" },
      ],
    };
  },
  methods: {
    scroll(el) {
      this.$emit("close-drawer");
      this.$vuetify.goTo(`#${el}`);
    },
  },
};
</script>
