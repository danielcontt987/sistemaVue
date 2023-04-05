<template>
  <v-app>
    <v-nav-bar >
       v-model="drawer"
    </v-nav-bar>  
    
      <v-container>
        <h1>hola </h1>
      </v-container>
  </v-app>
</template>

<script>

import VNavBar from "../../components/NavBar/VNavBar.vue";
import VSideBar from "../../components/Menu/VSideBar.vue";

export default {
  components: { VNavBar, VSideBar },

  mounted(){
    
  },

  data:() => ({
  }),

  methods:{


  }
}
</script>


  <style scoped>
.contenido-asider {
  
  display: flex;
  height: 100vh;
}
.contenido {
  flex-grow: 1;
}

  /*
  .app{
    display: flex;
  }
.icon-text {
    color: #af272f !important;
}
.loader-container {
    position: relative;
    top: 0;
    left: 50%;
    bottom: 0;
    right: 50%;
    padding-top: 20%;
}
.rounded-card {
    border-radius: 1rem !important;
    background-color: transparent;
    transition: 100ms;
    -webkit-box-shadow: inset 0px 0px 0px 2px #af272f;
    -moz-box-shadow: inset 0px 0px 0px 2px #af272f;
    box-shadow: inset 0px 0px 0px 2px #af272f;
}
.rounded-card:hover {
    background-color: #af272f;
    cursor: pointer;
    border: none;
    transition: 400ms;
}

.rounded-card:hover .icon-text {
    color: #fff !important;
}

p{

}*/
</style>
