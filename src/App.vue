<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <v-snackbar
      :value="snackbar"
      :color="snackbarColor"
      right
      :timeout="2500"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-app>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed:{
     ...mapState({
         snackbar: (state) => state.alerts.snackbar,
         snackbarColor: (state) => state.alerts.snackbarColor,
        snackbarText: (state) => state.alerts.snackbarText,
     })
  }
};
</script>

<style scoped>
	*{
		font-family: 'Lora', serif;
		font-family: 'Poppins', sans-serif;
	}
</style>
