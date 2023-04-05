import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
          light: {
            primary: '#101261',
            secondary: '#757575',
            accent: '#03A9F4',
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196f3',
            success: '#4caf50',
            customBg: '#F7F7F7', // aquí agregamos el color personalizado
            color1: "#ffcf84",
            color2: "#ffed77",
            color3: '#0d2874',
            color4: '#0a71a2',
            color5: '#06ced4',
            purple_lite: '#B641FD',
          },
        },
      },
});

