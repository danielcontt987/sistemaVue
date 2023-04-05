const state = {
    bool: false,
 
};
const types = {
   SET_BOOL : "SET_BOOL",
};
const actions = {
 
};
const mutations = {
    [types.SET_BOOL](state, data) {
        state.bool = data;
    },
   
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
};