import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            // primary: '#ff7956',
            primary: '#2196F3',
            secondary: '#ff5023',
            accent: '#2962FF',
            error: '#b71c1c',
          },
        },
      },
});

