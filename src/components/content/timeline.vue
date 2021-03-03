<template>
  <v-timeline dense>
    <v-timeline-item small v-for="(item, i) in items" :key="i" color="blue">
      <v-card class="py-4">
        <v-card-title class="text-subtitle-2 text-md-body-1 font-weight-bold">
          {{ item.title }}
        </v-card-title>
        <v-card-text>
          <p class="text--primary body-2">{{ item.description }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "primary",
          title: "AWAL PEMBANGUNAN",
          tanggal: "AGUSTUS 2020",
          description: `pembangunan akan dimulai pada tanggal 7 januari tahun 2020`,
        },
        {
          color: "primary",
          title: "TARGET SELESAI",
          tanggal: "MARET 2021",
          description: `dan di targetkan selesai pada tanggal 30 maret 2021, agar sudah dapat di gunakan saat ramadhan`,
        },
      ],
    };
  },
};
</script>

<style></style>
