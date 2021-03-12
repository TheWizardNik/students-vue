import Vue from "vue";
import Vuex from "vuex";
import student from "./modules/student";
import group from "./modules/group";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    student,
    group
  },
});
