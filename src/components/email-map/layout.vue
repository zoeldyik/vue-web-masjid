<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="12" md="6">
        <v-lazy transition="scale-transition">
          <v-card>
            <v-card-title class="body-1 font-weight-bold">LOKASI</v-card-title>
            <!-- <v-card-text> -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1361700868458!2d109.1186922681848!3d-6.977159386316239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbeecf137967b%3A0xa077ac4a60715100!2sMasjid%20Al%20Muslim!5e0!3m2!1sid!2sid!4v1614406603835!5m2!1sid!2sid"
              width="100%"
              height="293"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <!-- </v-card-text> -->
          </v-card>
        </v-lazy>
      </v-col>

      <v-col cols="12" md="5" offset-md="1">
        <v-lazy transition="scale-transition">
          <v-card>
            <v-card-title>
              <p class="body-1 font-weight-bold">SEND US EMAIL</p>
            </v-card-title>
            <v-card-text>
              <my-form @open-modal="$emit(`open-modal`, $event)"></my-form>
            </v-card-text>
          </v-card>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import myForm from "./my-form";

export default {
  components: {
    "my-form": myForm,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
