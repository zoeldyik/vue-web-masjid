<template>
  <v-container class="content my-16">
    <v-row justify="center" align="center">
      <v-col cols="12" md="5">
        <v-lazy transition="scale-transition">
          <time-line></time-line>
        </v-lazy>
      </v-col>
      <v-col cols="12" md="6" offset-md="1">
        <v-lazy transition="scale-transition">
          <v-card>
            <v-carousel hide-delimiters height="350">
              <v-carousel-item
                v-for="(n, i) in 2"
                :key="i"
                :src="require(`../../assets/carousel/${i + 1}.png`)"
              ></v-carousel-item>
            </v-carousel>
            <v-card-text class="d-flex justify-end py-2 caption">
              picture by
              <span class="ml-1">
                <a
                  href="https://archnet.org/sites/1798/media_contents/49223"
                  target="blank"
                  class="warning--text"
                >
                  archnet.org
                </a>
              </span>
            </v-card-text>
          </v-card>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import timeLine from "./timeline";
export default {
  components: {
    "time-line": timeLine,
  },
};
</script>

<style scoped></style>
