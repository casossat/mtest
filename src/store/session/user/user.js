export default {
    state: {
        username: null,
        firstName: null,
        lastName: null,
        email: null,
        roles: []   //opcional
    },
    mutations: {
        setUsername(state, payload) {
            state.username = payload;
        },
        setFirstName(state, payload) {
            state.firstName = payload;
        },
        setLastName(state, payload) {
            state.lastName = payload;
        },
        setEmail(state, payload) {
            state.email = payload;
        },
    },
    actions: {
        updateSession({ commit }, payload) {
            commit('setUsername', payload.username);
            commit('setFirstName', payload.firstName);
            commit('setLastName', payload.lastName);
            commit('setEmail', payload.email);
        },
        closeSession({ commit }, payload) {
            commit('setUsername', null);
            commit('setFirstName', null);
            commit('setLastName', null);
            commit('setEmail', null);
        }
    },
    getters: {
        getUsername(state) {
            return state.username;
        },
        getFirstName(state) {
            return state.firstName;
        },
        getLastName(state) {
            return state.lastName;
        },
        getEmail(state) {
            return state.email;
        },
        getFullName(state) {
            return `${state.firstName} ${state.lastName}`
        }
    }
};