<template>
  <v-container class="dana my-12 my-md-16 py-8 py-md-12">
    <v-row justify-md="center">
      <v-col cols="12" md="4">
        <v-lazy transition="scale-transition">
          <v-card class="text-center" flat>
            <v-alert outlined color="primary" class="mb-0">
              <v-card-title
                class="text-body-1 text-md-h6 d-flex flex-column align-center"
              >
                DANA TERKUMPUL
              </v-card-title>
              <v-card-text class="text-subtitle-1 text-md-h5">
                RP.55.000.000
              </v-card-text>
            </v-alert>
          </v-card>
        </v-lazy>
      </v-col>
      <v-col cols="12" md="4">
        <v-lazy transition="scale-transition">
          <v-card class="text-center" flat>
            <v-alert outlined color="accent" class="mb-0">
              <v-card-title
                class="text-body-1 text-md-h6 d-flex flex-column align-center"
              >
                DANA TERPAKAI
              </v-card-title>
              <v-card-text class="text-subtitle-1 text-md-h5">
                RP.35.000.000
              </v-card-text>
            </v-alert>
          </v-card>
        </v-lazy>
      </v-col>
      <v-col cols="12" md="4">
        <v-lazy transition="scale-transition">
          <v-card class="text-center" flat>
            <v-alert outlined color="warning" class="mb-0">
              <v-card-title
                class="text-body-1 text-md-h6 d-flex flex-column align-center"
              >
                TOTAL BIAYA
              </v-card-title>
              <v-card-text class="text-subtitle-1 text-md-h5">
                RP.900.000.000
              </v-card-text>
            </v-alert>
          </v-card>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.dana {
  background-color: #f5f5f5;
}

@media screen and(min-width:960px) {
  .dana {
    height: 180px;
  }
}
</style>
