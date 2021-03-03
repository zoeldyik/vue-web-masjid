<template>
  <v-container fluid class="hero ">
    <v-lazy transition="scale-transition">
      <v-row justify-md="center" align="center">
        <v-col cols="12" md="4">
          <v-img src="../assets/hero-img.svg"></v-img>
        </v-col>

        <v-col
          cols="12"
          md="5"
          offset-md="1"
          class="hero-text d-flex flex-column justify-center"
        >
          <h3
            id="title"
            class="text-h5 text-md-h4 pb-1 text-center dark--text py-3 font-weight-bold"
          >
            BERSAMA MEMBANGUN MASJID AL-MUSLIM
          </h3>

          <v-btn
            color="accent"
            large
            depressed
            dark
            rounded
            class="align-self-center mt-5"
          >
            IKUT BERDONASI
          </v-btn>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  width: 100%;
  min-height: 500px;
}

@media screen and(min-width:960px) {
  .hero {
    height: 580px;
  }
}
</style>
