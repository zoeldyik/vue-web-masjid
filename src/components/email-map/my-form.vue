<template>
  <div>
    <v-form @submit.prevent="send()" ref="myForm">
      <v-text-field
        v-model="form.nama"
        :rules="rulesNama"
        label="Nama"
        required
        color="accent"
      ></v-text-field>
      <v-text-field
        v-model="form.email"
        :rules="emailRules"
        label="Email"
        required
        color="accent"
        type="email"
      ></v-text-field>
      <v-textarea
        label="Pesan"
        v-model="form.pesan"
        :rules="rulesPesan"
        rows="2"
        clear-icon="mdi-close-circle"
        required
        color="accent"
      ></v-textarea>

      <v-btn
        block
        :loading="btn.loading"
        type="submit"
        color="accent"
        class="mt-3"
      >
        {{ btn.text }}
        <v-icon small v-if="btn.sent">{{ btn.icon }}</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      btn: {
        loading: false,
        sent: false,
        icon: "",
        text: "KIRIM",
      },
      form: {
        nama: "",
        email: "",
        pesan: "",
      },
      rulesNama: [
        (value) => !!value || "Field is required",
        (value) => {
          return Boolean(value.trim().length) || "Invalid input.";
        },
        (value) => {
          const pattern = /^([a-zA-Z0-9 ]+)$/;
          return pattern.test(value) || "Invalid input.";
        },
      ],
      emailRules: [
        (value) => !!value || "Field is required",
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      ],
      rulesPesan: [
        (value) => !!value || "Field is required",
        (value) => {
          return Boolean(value.trim().length) || "Invalid input.";
        },
        (value) => {
          const pattern = /^([a-zA-Z0-9 ?!&.,]+)$/;
          return pattern.test(value) || "Invalid input.";
        },
      ],
    };
  },
  methods: {
    send() {
      const form = this.cekform();
      if (!form) return;

      this.btn.loading = true;

      emailjs
        .send(
          "service_n6ev2pq",
          "template_lf9xnol",
          form,
          "user_OXOFNt8GC0HouPfdcJgXC"
        )
        .then(
          () => {
            this.btn.text = "PESAN TERKIRIM";
            this.btn.icon = "mdi-check";
            this.clearForm();
          },
          (err) => {
            console.log("FAILED...", err);

            this.btn.text = "PESAN GAGAL";
            this.btn.icon = "mdi-close";
          }
        )
        .finally(() => {
          this.btn.sent = true;
          this.btn.loading = false;
          this.resetButton();
        });
    },
    resetButton() {
      setTimeout(
        () =>
          (this.btn = {
            loading: false,
            sent: false,
            icon: "",
            text: "KIRIM",
          }),
        3500
      );
    },
    clearForm() {
      // console.log("clear form fired");
      for (const key in this.form) {
        this.form[key] = "";
      }
      this.$refs.myForm.resetValidation();
    },

    cekform() {
      // cek user input dengan function dari vuetify
      const cek = this.$refs.myForm.validate();
      if (!cek) {
        this.openModal();
        return false;
      }

      let form = { ...this.form };
      let { nama, email, pesan } = form;

      // remove spasi di awal dan akhir text dan rubah spasi ganda ex:"hi   bro"
      // menjadi single spasi ex: "hi bro"
      nama = nama.trim().replace(/\s+/g, " ");
      pesan = pesan.trim().replace(/\s+/g, " ");
      pesan = pesan.trim().replace(/\s+/g, " ");

      // kembalikan form yang sudah di cek
      return { nama, email, pesan };
    },
    openModal() {
      const payload = {
        title: "Periksa kembali inputanmu",
        text: "semua field pada form harus di isi dengan inputan yang valid",
      };
      return this.$emit("open-modal", payload);
    },
  },
};
</script>
