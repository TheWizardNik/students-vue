import http from "../../http-common";


const state = {
  groups: [],
};

const getters = {
  allGroup: (state) => state.groups,
};

const actions = {
  async fetchGroup({ commit }) {
    http.get("/group")
    .then(response => {
      commit("setGroup", response.data);
    }).catch(e => {
      console.log(e);
    });
  },
  async addGroup({ commit }, data) {
    http.post("/group", data)
    .then(response => {
      commit("newGroup", response.data)
    }).catch(e => {
      console.log(e);
    });
  },
  async deleteGroup({ commit }, id) {
   if(confirm("Are you sure you want to remove this data?"))
    http.delete(`/group/${id}`)
    .catch(e => {
      console.log(e);
    });

    commit("removeGroup", id);
  },
  async updateGroup({ commit }, data) {
    http.put(`/group`,data)
        .then(response => {
          commit("updateGroup", response.data)
          })
        .catch(e => {
          console.log(e);
        });
}}

const mutations = {
  setGroup: (state, groups) => (state.groups = groups),
  newGroup: (state, group) => state.groups.unshift(group),
  removeGroup: (state, id) =>
    (state.groups = state.groups.filter((group) => group.id !== id)),
  updateGroup: (state, updGroup) => {
    const index = state.groups.findIndex(
      (group) => group.id === updGroup.id
    );
    if (index !== -1) {
      state.todos.splice(index, 1, updGroup);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
