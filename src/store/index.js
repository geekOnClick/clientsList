import Vue from 'vue';
import Vuex from 'vuex';
import clientsStore from "./module/clientsStore"

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    clientsStore
  },
});
