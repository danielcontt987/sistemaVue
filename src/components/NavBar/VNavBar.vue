<template>
  <div>
    <v-app-bar app class="primary" clipped-left flat dark>
      <v-app-bar-nav-icon  class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="px-9"><h3 class="white--text">Siys</h3></span>
    </v-app-bar>
    <v-side-bar :drawer.sync="drawer"/>
  </div>
    
</template>

<script>
    import VSideBar from "../../components/Menu/VSideBar.vue";
    export default {

    components: {VSideBar},
    data: () => ({
        drawer: true,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
            ]
    }),
    }
</script>

<style>

</style>