<template>
  <div class="students">
    <h1>Студенты</h1>
    <AddStudent />
    <div v-for="student in allStudent" :key="student.id" class="student">
      <div class="info">
       <span class="name">{{student.name}}       </span>
        <br />
        Возраст: {{ student.age }}<br />
        Группа: {{ student.group }}<br />
        Средняя оценка: {{ student.middleMark }}<br />
      </div>
      <div class="control">
        <img @click="updateStudent(student.id)" src="@/assets/update.svg" />
        <img @click="deleteStudent(student.id)" src="@/assets/delete.svg" />
      </div>
    </div>
    <UpdateStudent />



  </div>


</template>



<script>
import AddStudent from "@/components/AddStudent.vue";
import UpdateStudent from "@/components/UpdateStudent.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "StudentsList",
  components: {
    AddStudent,
    UpdateStudent,
  },
  methods: {
    ...mapActions(["fetchStudent", "deleteStudent", "updateStudent"]),
    editStudent(studentId) {
      this.updateStudent(studentId);
    },
  },
  computed: mapGetters(["allStudent"]),
  created() {
    this.fetchStudent();
  },
};

</script>

<style scoped>
.students {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.student {
  display: flex;
  border: 1px solid #ccc;
  background: #d3b50a;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.name {
  font-weight: bold;
}
.info {
  width: 80%;
  margin: 0;
}
.control {
  width: 20%;
  margin: 0;
  display: flex;
  align-items: center;
}
img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>