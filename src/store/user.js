import axios from "axios";

const types = {
  SET_LOGIN_FLAG: "SET_LOGIN_FLAG",
};

const state = {
  serve:"http://localhost:8080"

};

const actions = {
  registerUser({commit}, params){
      let formData = new FormData();
      formData.append('name', params.name); 
      formData.append('lastname', params.lastname); 
      formData.append('email', params.email); 
      formData.append('password', params.password);
      
      return new Promise((resolve, reject) => {
         axios
          .post(state.serve + "/register", formData,{
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
            }
          })
          .then((res) =>{
              commit(types.SET_LOGIN_FLAG, true)
              resolve(res.data.status);
          })
          .catch((err) => {
            console.log(err);
            reject();
          })
          ;
      })
   }
};

const mutations = {
  [types.SET_LOGIN_FLAG](state, data) {
    state.isUserLogued = data;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
