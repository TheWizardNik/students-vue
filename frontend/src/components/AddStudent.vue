<template>
  <div>
    <h3>Добавить студента</h3>
    <div class="add-writer">
      <form @submit="onSubmit">
        <div>
          <input type="text" v-model="student.name" placeholder="ФИО" />
          <input type="text" v-model="student.age" placeholder="Возраст" />
          <input type="text" placeholder="Группа" v-model="student.group" >
          <input type="text" placeholder="Курс" v-model="student.course" >
          <input type="text" v-model="student.middleMark" placeholder="Средняя оценка" />
          <input type="submit" value="Добавить" />

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddStudent",
  data() {
    return {
      student: {
        name: "",
        age: "",
        group: "",
        middleMark: "",
        course:"",
      },
    };
  },
  methods: {
    ...mapActions(["addStudent"]),
    onSubmit(e) {
      e.preventDefault();

      this.addStudent({
        name: this.student.name,
        age: this.student.age,
        group: this.student.group,
        middleMark: this.student.middleMark,
        course: this.student.course
      });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
form div {
  margin-bottom: 10px;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  margin-right: 10px;
}
input {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  margin-right: 10px;
}
input[type="date"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  margin-right: 10px;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
  height: 50px;
  width: 100px;
  margin-left: 10px;
}
</style>