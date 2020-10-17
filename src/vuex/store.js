import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        UPDATE_FORM_STATE(state, updatedData) {
            state.data.map(item => {
                if (item.id == updatedData.id) {
                    item.fio = updatedData.fio;
                    item.phone = updatedData.phone;
                    item.email = updatedData.email;
                    item.adress.country = updatedData.adress.country;
                    item.adress.city = updatedData.adress.city;
                    item.adress.street = updatedData.adress.street;
                    item.adress.appartment = updatedData.adress.appartment;
                }
            });
        },
        REMOVE_FROM_DATA(state, id) {
            let itemArray = state.data.filter(el => el.id != id);
            
            state.data = itemArray;
        },
        ADD_FORM_TO_DATA(state, formItem) {
            formItem.id = Math.random().toString(36).substr(2, 9);
            state.data.push(formItem);
        }
    },
    actions: {
        ADD_FORM({commit}, form) {
            commit('ADD_FORM_TO_DATA', form);
        },
        UPDATE_FORM({commit}, form) {
            commit('UPDATE_FORM_STATE', form);
        },
        DELETE_FROM_DATA({commit}, id) {
            commit('REMOVE_FROM_DATA', id);
        }
    },
    getters: {
        DATA(state) {
            return state.data;
        }
    }
});

export default store;