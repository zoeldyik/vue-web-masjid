<template>
  <nav>
    <v-app-bar
      :elevate-on-scroll="!drawer"
      :flat="drawer"
      app
      clipped-right
      color="white"
    >
      <v-toolbar flat>
        <v-toolbar-title style="font-size:24px" @click="goto">
          <v-avatar class="py-1 d-md-none" size="30">
            <img src="../../assets/logo.svg" alt="logo" />
          </v-avatar>
          <span class="font-weight-bold primary--text d-none d-md-block">
            AL MUSLIM
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="d-none d-md-block">
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            depressed
            color="white"
            small
            @click="$vuetify.goTo(`#${item.text}`)"
          >
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-toolbar>
    </v-app-bar>

    <app-drawer :drawer="drawer" @close-drawer="drawer = !drawer"></app-drawer>
  </nav>
</template>

<script>
import appDrawer from "./drawer";

export default {
  components: {
    "app-drawer": appDrawer,
  },

  data() {
    return {
      drawer: false,

      items: [
        { icon: "mdi-file-table-box-multiple-outline", text: "tabel" },
        { icon: "mdi-map-marker-outline", text: "lokasi" },
        { icon: "mdi-account-circle-outline", text: "contact" },
      ],
    };
  },

  methods: {
    goto() {
      this.drawer = false;
      this.$vuetify.goTo("#hero");
    },
  },
};
</script>

<style scoped>
.v-toolbar__title span {
  cursor: pointer;
}
</style>
