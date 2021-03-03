<template>
  <v-container class="contact my-16">
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" offset-md="1" order-md="last">
        <v-lazy transition="scale-transition">
          <v-img src="../assets/contacts.svg"></v-img>
        </v-lazy>
      </v-col>

      <v-col cols="12" md="5">
        <v-lazy transition="scale-transition">
          <v-card elevation="1">
            <v-card-title class="body-1 font-weight-bold primary--text"
              >CONTACTS</v-card-title
            >
            <v-list dense flat>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon color="primary">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-uppercase">
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "",
      items: [
        {
          icon: "mdi-phone-outline",
          text: "0812-9898-1000",
        },
        {
          icon: "mdi-phone-outline",
          text: "0876-1120-3210",
        },
        {
          icon: "mdi-instagram",
          text: "@masjid_almuslim",
        },
        {
          icon: "mdi-email-outline",
          text: "masjid.al-muslim@mosque.org",
        },
        {
          icon: "mdi-map-marker-outline",
          text: "jl. wijaya kusuma Ds. kabunan kab. tegal",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-list-item__title {
  white-space: normal;
}
</style>
