import http from "../../http-common";


const state = {
  students: [],
};

const getters = {
  allStudent: (state) => state.students,
};

const actions = {
  async fetchStudent({ commit }) {
    http.get("/student")
    .then(response => {
      commit("setStudent", response.data);
    }).catch(e => {
      console.log(e);
    });
  },
  async addStudent({ commit }, data) {
    http.post("/student", data)
    .then(response => {
      commit("newStudent", response.data)
    }).catch(e => {
      console.log(e);
    });
  },
  async deleteStudent({ commit }, id) {
   if(confirm("Are you sure you want to remove this data?"))
    http.delete(`/student/${id}`)
    .catch(e => {
      console.log(e);
    });

    commit("removeStudent", id);
  },
  async updateStudent({ commit }, data) {
    http.put(`/student`,data)
        .then(response => {
          commit("updateStudent", response.data)
          })
        .catch(e => {
          console.log(e);
        });
}}

const mutations = {
  setStudent: (state, students) => (state.students = students),
  newStudent: (state, student) => state.students.unshift(student),
  removeStudent: (state, id) =>
    (state.students = state.students.filter((student) => student.id !== id)),
  updateStudent: (state, updStudent) => {
    const index = state.students.findIndex(
      (student) => student.id === updStudent.id
    );
    if (index !== -1) {
      state.todos.splice(index, 1, updStudent);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
