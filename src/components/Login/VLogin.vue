<template >
   <div class="bg-color-s">
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="10">
                    <v-card class="elevation-4 mt-10">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-card-text class="mt-12">
                                            <h3 class="text-center parrafo">Iniciar sesión</h3>
                                            <h6 class="text-center grey--text mt-2 text-system">Ingresa las credenciales correspodientes</h6>
                                            <v-row align="center" justify="center">
                                            <v-col cols="12" sm="10">
                                                <v-text-field
                                                outlined
                                                label="Email"
                                                color="color4"
                                                autocomplete="false"
                                                class="mt-16"
                                                ></v-text-field>
                                                <v-text-field
                                                outlined
                                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="show1 ? 'text' : 'password'"
                                                @click:append="show1 = !show1"
                                                label="Contraseña"
                                                color="color4"
                                                autocomplete="false"
                                                ></v-text-field>
                                                <v-row>
                                                    <v-col cols="12" sm="4">
                                                        <v-checkbox
                                                        label="Recordar"
                                                        class="mt-n1"
                                                        color="color4"
                                                        ></v-checkbox>
                                                    </v-col>
                                                    <v-col cols="12" sm="8" class="text-right">
                                                    <span class="caption color4--text">¿Olvidate tú contraseña?</span>
                                                    </v-col>
                                                </v-row>
                                                <v-btn dark block tile class="white--text color4" @click="getPokemon()">Iniciar sesión</v-btn>
                                                <!-- <h5 class="text-center grey--text mt-4 mb-3">O iniciar sesión con</h5> -->
                                                <!-- <div class="d-flex justify-space-between align-center mx-10 mb-16">
                                                    <v-btn depressed outlined color="red">
                                                        <v-icon color="red">mdi-google</v-icon>
                                                    </v-btn>
                                                    <v-btn depressed outlined color="blue">
                                                        <v-icon color="blue">mdi-facebook</v-icon>
                                                    </v-btn>
                                                    <v-btn depressed outlined color="blue">
                                                        <v-icon color="light-color4 lighten-3 px-1">mdi-twitter</v-icon>
                                                    </v-btn>
                                                </div> -->
                                            </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="color4 rounded-bl-xl">
                                    <div style="text-align:center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h1 class="text-center">No tienes cuenta</h1>
                                            <br>
                                            <h2 class="text-center">Crear cuenta</h2>
                                            <br>
                                            <v-btn tile outlined @click="step++" color="white">
                                                Registrar
                                            </v-btn>
                                        </v-card-text>
                                    </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                            <v-window-item :value="2">
                               <v-row>
                                   <v-col cols="12" sm="6" class="color4 rounded-br-xl">
                                    <div style="text-align: center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h3 class="text-center">¿Ya tienes una cuenta?</h3>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined @click="step--" color="white">
                                                Login
                                            </v-btn>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">Registrate</h4>
                                        <h4 class="text-center">Es rápido y fácil</h4>
                                        <br>
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="">
                                                <v-row>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field
                                                            outlined
                                                            v-model="name"
                                                            ref="name"
                                                            label="Nombre(s)"
                                                            color="primary"
                                                            autocomplete="false"
                                                            ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field
                                                            outlined
                                                            v-model="lastname"
                                                            label="Apellido(s)"
                                                            color="primary"
                                                            autocomplete="false"
                                                            ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                                        <v-text-field
                                                            outlined
                                                            label="E-mail"
                                                            v-model="email"
                                                            color="primary"
                                                            autocomplete="false"
                                                            ></v-text-field>
                                                        <v-text-field
                                                            outlined
                                                            label="Contraseña"
                                                            v-model="password"
                                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                            :type="show1 ? 'text' : 'password'"
                                                            @click:append="show1 = !show1"
                                                            color="primary"
                                                            autocomplete="false"
                                                            ></v-text-field>
                                                        <v-btn @click="register()" block class="primary white--text" >
                                                            Registrar
                                                        </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                               </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
   </div>
</template>

<script>
export default {
    mounted(){
        
    },
    data: () =>({
        step: 1,
        show1: false,
        name: "",
        lastname: "",
        email: "",
        password: "",

    }),
    methods:{
         validateRegister(){
            let validate = true;
            if(this.name == ""){
                this.$store.dispatch(
                    "alerts/setSnackbarText",
                    "Nombre vacío, por favor ingrese un nombre."
                );
                this.$store.dispatch("alerts/setSnackbarColor", "warning");
                this.$store.dispatch("alerts/setSnackbar", true);
                this.$refs.name.focus();
                validate = false;
            }
            else if(this.lastname == ""){
                this.$store.dispatch(
                    "alerts/setSnackbarText",
                    "Apellido vacío, por favor ingrese un apellido."
                );
                this.$store.dispatch("alerts/setSnackbarColor", "warning");
                this.$store.dispatch("alerts/setSnackbar", true);
                validate = false;
            }
            else if(this.email == ""){
                this.$store.dispatch(
                    "alerts/setSnackbarText",
                    "Correo electrónico vacío, por favor ingrese un Correo electrónico."
                );
                this.$store.dispatch("alerts/setSnackbarColor", "warning");
                this.$store.dispatch("alerts/setSnackbar", true);
                validate = false;
            }

             else if(this.password == ""){
                this.$store.dispatch(
                    "alerts/setSnackbarText",
                    "Contraseña vacía, por favor ingrese un contraseña."
                );
                this.$store.dispatch("alerts/setSnackbarColor", "warning");
                this.$store.dispatch("alerts/setSnackbar", true);
                validate = false;
            }

            return validate;
         },
         register(){
            if (this.validateRegister()) {
                let params = {
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            };
             this.$store
                    .dispatch("user/registerUser", params)
                    .then((res) => {
                        if (res == 200) {
                            this.$store.dispatch("alerts/setSnackbarText",
                              "El usuario se regitro correctamente");
                            this.$store.dispatch("alerts/setSnackbarColor", "success");
                            this.$store.dispatch("alerts/setSnackbar", true);
                        }
                        if (res == 409) {
                             this.$store.dispatch("alerts/setSnackbarText",
                              "El usuario ya tiene una cuenta");
                            this.$store.dispatch("alerts/setSnackbarColor", "warning");
                            this.$store.dispatch("alerts/setSnackbar", true);
                        }

                        
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            
         }
    }
}
</script>

<style scoped>
    .v-application .rounded-bl-xl{
        border-bottom-left-radius: 300px !important;
    }
    .v-application .rounded-br-xl{
        border-bottom-right-radius: 300px !important;
    }
    .parrafo{
        font-size: 2em!important;
    }
   
    .bg-color-s{
        background: #0d2874!important;
        height: 100%;
    }

    .text-system{
        font-size: 1em!important;

    }
    
</style>>
