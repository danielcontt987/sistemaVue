<template>
  <div class="bg-app">
    <v-nav-bar></v-nav-bar>
    <div class="contenido-asider">
        <VSideBar />
        <v-container class="contenido px-6 py-2">
           <v-card>
             <v-card-title justify-space-between class="primary white--text">
                    <v-row>
                    <v-col cols="9" align="start" class="px-16">
                        {{"Categorías"}}
                    </v-col>
                    <v-col cols="3">
                        <v-btn @click="showModal()">
                            <v-icon>mdi-plus</v-icon>
                            Agregar
                        </v-btn>
                    </v-col>
                    </v-row>
             </v-card-title>
             <v-card-text>
                <v-text-field
                    label="Buscar"
                    outlined
                    class="py-5"
                    prepend-inner-icon="mdi-magnify"
                >
                </v-text-field>
                <v-data-table
                 :headers="headers"
                 :items="items"
                 :options="{ 
                    itemsPerPageOptions: [5, 10, 25, {text: 'Todos', value: -1}], 
                    itemsPerPageText: 'Filas por página:', 
                    pageText: '{0}-{1} de {2}', 
                    prevPageText: 'Página anterior', 
                    nextPageText: 'Página siguiente', 
                    sortByText: 'Ordenar por' 
                 }"
                ></v-data-table>
             </v-card-text>
           </v-card>
           <v-dialog width="650" v-model="show">
                <v-card>
                    <v-card-title class="primary white--text">
                        Agregar categoria
                    </v-card-title>
                    <v-col cols="12">
                        <v-text-field
                            label="Buscar"
                            outlined
                            prepend-inner-icon="mdi-magnify"
                        />
                    </v-col>

                    <v-col>
                        <v-file-input
                            v-model="files"
                            accept="image/*"
                            label="Arrastra y suelta un archivo o haz clic para seleccionar uno"
                            prepend-icon="mdi-paperclip"
                            @change="onFileChange"
                        ></v-file-input>
                    </v-col>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
  </div>
</template>

<script>
import VSideBar from '@/components/Menu/VSideBar.vue'
import VNavBar from '@/components/NavBar/VNavBar.vue'
export default {
  components:{
    VSideBar,
    VNavBar
  },

  data() {
    return {
      show: false,
      files: [],
      headers: [
        { text: 'Categoría', 
          align: "center",
          sortable: true,
          value: 'id'
        },
        { 
            text:  'Imagen', 
            value: 'name', 
            align: "center",
            sortable: true,
        },
        { 
            text:  'Acciones', 
            value: 'age',
            align: 'center',
        },
      ],
      items: [
        { id: 1, name: 'Juan', age: 25 },
        { id: 2, name: 'María', age: 30 },
        { id: 3, name: 'Pedro', age: 20 },
      ],
    }
  },
  methods:{
    showModal(){
        this.show = true;
    },
    onFileChange() {
      // Aquí puedes procesar los archivos que se han seleccionado
      console.log(this.files)
    }
    
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
    .bg-app{
        background-color: rgb(181, 177, 177);
    }
</style>