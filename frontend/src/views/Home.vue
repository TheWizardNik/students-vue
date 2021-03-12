<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Главная страница</h1>
    <br>
  <div class="groups">
      <h1>Список групп:</h1>
      <div v-for="group in allGroup" :key="group.id" class="group">
        <div class="info">
          <span class="name">
            {{ group.name }}
          </span>
                  <br>
                  Средняя оценка группы: {{group.middleMark}}
    <br>
    <br>
                      Ученики({{group.studentsCount}}):
        <br>

            <div v-for="student in group.students" :key="student.id" class="student">
            <span class="name">
                        {{ student.name }}
                      </span>
                          <br>

            </div>
                <br>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchGroup"]),
  },
  computed: mapGetters(["allGroup"]),
  created() {
    this.fetchGroup();
  },
};
</script>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.group {
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