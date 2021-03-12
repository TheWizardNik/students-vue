<template>
  <div>
    <h3>Обновить группу</h3>
    <div class="add-writer">
      <form @submit="onSubmit">
        <div>
          <input type="text" v-model="group.name" placeholder="Название" />
          <input type="text" v-model="group.course" placeholder="Курс" />
          <input list="type" placeholder="Тип" v-model="group.type" >
                 <datalist id="type">
                 <option value='DISTANCE'>Дистанционное обучение</option>
                 <option value='FULL_TIME'>Очное</option>
                 </datalist>
          <input type="submit" value="Обновить" />

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddGroup",
  data() {
    return {
      group: {
        name: "",
        course: "",
        type: "",
      },
    };
  },
  methods: {
    ...mapActions(["updateGroup"]),
    onSubmit(e) {
      e.preventDefault();

      this.updateGroup({
        name: this.group.name,
        course: this.group.course,
        type: this.group.type,
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