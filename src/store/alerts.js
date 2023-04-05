const state = {
    snackbar: false,
    snackbarColor: "success",
    snackbarText: "",
};
const types = {
    SET_SNACKBAR: "SET_SNACKBAR",
    SET_SNACKBAR_COLOR: "SET_SNACKBAR_COLOR",
    SET_SNACKBAR_TEXT: "SET_SNACKBAR_TEXT",
};
const actions = {
    setSnackbar({ commit }, data) {
        commit(types.SET_SNACKBAR, data);
        if (data) {
            setTimeout(() => commit(types.SET_SNACKBAR, false), 2000);
        }
    },
    setSnackbarColor({ commit }, data) {
        commit(types.SET_SNACKBAR_COLOR, data);
    },
    setSnackbarText({ commit }, data) {
        commit(types.SET_SNACKBAR_TEXT, data);
    },
};
const mutations = {
    [types.SET_SNACKBAR](state, data) {
        state.snackbar = data;
    },
    [types.SET_SNACKBAR_COLOR](state, data) {
        state.snackbarColor = data;
    },
    [types.SET_SNACKBAR_TEXT](state, data) {
        state.snackbarText = data;
    },
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
};