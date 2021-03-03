<template>
  <v-container class="section-tabel py-16">
    <v-lazy transition="scale-transition">
      <v-row justify="center" align="center">
        <!-- tabel pemasukan -->
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="body-1 text-md-h6 primary--text">
              DATA PEMASUKAN
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="tabel_pemasukan.search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                color="accent"
              ></v-text-field>
              <v-data-table
                :mobile-breakpoint="300"
                :items-per-page="5"
                :sort-by="tabel.sort"
                :headers="tabel.headers"
                :items="tabel_pemasukan.items"
                :search="tabel_pemasukan.search"
                :footer-props="tabel.footerProps"
              >
                <template v-slot:item.no="{ index }">
                  {{ index + 1 }}
                </template>
                <template v-slot:item.nilai="{ item }" class="primary">
                  {{ item.nilai.toLocaleString("id") }}
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" order="first" order-md="last">
          <v-img src="../assets/pemasukan.svg"></v-img>
        </v-col>
      </v-row>
    </v-lazy>

    <v-lazy transition="scale-transition">
      <v-row justify="center" align="center" class="mt-16">
        <v-col cols="12" md="6">
          <v-img src="../assets/pengeluaran.svg"></v-img>
        </v-col>

        <!-- tabel pengeluarna -->
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="body-1 text-md-h6 warning--text">
              DATA PENGELUARAN
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="tabel_pengeluaran.search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                color="warning"
              ></v-text-field>
              <v-data-table
                :mobile-breakpoint="300"
                :items-per-page="5"
                :sort-by="tabel.sort"
                :headers="tabel.headers"
                :items="tabel_pengeluaran.items"
                :search="tabel_pengeluaran.search"
                :footer-props="tabel.footerProps"
              >
                <template v-slot:item.no="{ index }">
                  {{ index + 1 }}
                </template>
                <template v-slot:item.nilai="{ item }">
                  {{ item.nilai.toLocaleString("id") }}
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "tabel",
  data() {
    return {
      tabel: {
        sort: ["tanggal"],
        footerProps: {
          // "disable-items-per-page": true,
          "items-per-page-text": "",
          "show-current-page": true,
          "items-per-page-all-text": "",
          "items-per-page-options": [5],
        },
        headers: [
          {
            text: "NO.",
            align: "start",
            filterable: false,
            value: "no",
            sortable: false,
            width: "5%",
          },
          { text: "TANGGAL", value: "tanggal", sortable: false },
          { text: "NAMA", value: "nama", sortable: false },
          { text: "NILAI", value: "nilai", sortable: false },
        ],
      },

      tabel_pemasukan: {
        search: "",
        items: [
          {
            tanggal: "30/09/2020",
            nama: "Brandon",
            nilai: 671357,
          },
          {
            tanggal: "05/03/2020",
            nama: "Branden",
            nilai: 497045,
          },
          {
            tanggal: "16/02/2020",
            nama: "Ross",
            nilai: 698437,
          },
          {
            tanggal: "24/08/2020",
            nama: "Louis",
            nilai: 432973,
          },
          {
            tanggal: "11/02/2021",
            nama: "Mufutau",
            nilai: 599096,
          },
          {
            tanggal: "29/08/2020",
            nama: "Darrel",
            nilai: 939799,
          },
        ],
      },

      tabel_pengeluaran: {
        search: "",
        items: [
          {
            tanggal: "20/10/2020",
            nama: "batu bata",
            nilai: 667547,
          },
          {
            tanggal: "24/01/2021",
            nama: "konsumsi",
            nilai: 360502,
          },
          {
            tanggal: "29/10/2020",
            nama: "batu bata",
            nilai: 823301,
          },
          {
            tanggal: "24/02/2020",
            nama: "konsumsi",
            nilai: 133201,
          },
          {
            tanggal: "20/01/2020",
            nama: "paku",
            nilai: 242508,
          },
          {
            tanggal: "01/11/2020",
            nama: "keramik",
            nilai: 425125,
          },
          {
            tanggal: "15/11/2020",
            nama: "peralatan tukang",
            nilai: 581395,
          },
          {
            tanggal: "14/01/2021",
            nama: "keramik",
            nilai: 536095,
          },
        ],
      },
    };
  },
};
</script>

<style></style>
