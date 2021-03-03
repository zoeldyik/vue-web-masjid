<template>
  <v-app>
    <app-navbar></app-navbar>
    <app-hero id="hero"></app-hero>
    <app-content id="content"></app-content>
    <section-dana></section-dana>
    <section-tabel id="tabel"></section-tabel>
    <section-contact id="contact"></section-contact>
    <email-and-map id="lokasi" @open-modal="openModal($event)"></email-and-map>
    <app-footer></app-footer>

    <!-- modal -->
    <app-modal
      :dialog="dialog.open"
      :title="dialog.title"
      :text="dialog.text"
      @close="dialog.open = false"
    ></app-modal>
  </v-app>
</template>

<script>
import appNavbar from "./components/navbar/app-navbar";
import hero from "./components/hero";
import content from "./components/content/content";
import dana from "./components/section-dana";
import tabel from "./components/app-tabel";
import contact from "./components/contact";
import email_map from "./components/email-map/layout";
import appFooter from "./components/app-footer";
import appModal from "./components/app-modal";

export default {
  name: "App",

  components: {
    "app-navbar": appNavbar,
    "app-hero": hero,
    "app-content": content,
    "section-dana": dana,
    "section-tabel": tabel,
    "section-contact": contact,
    "email-and-map": email_map,
    "app-footer": appFooter,
    "app-modal": appModal,
  },

  data() {
    return {
      dialog: {
        open: true,
        title: "HI",
        text: `website ini dibuat sebagai sarana belajar dan tidak ada kaitannya dengan pembangunan dan penggalangan dana untuk masjid manapun`,
      },
    };
  },
  methods: {
    openModal(data) {
      data.open = true;
      this.dialog = data;
    },
  },
};
</script>
