<template>
  <div class="groups">
    <h1>Группы</h1>
    <AddGroup />
    <div v-for="group in allGroup" :key="group.id" class="group">
      <div class="info">
        <span class="name">
          {{ group.name }}
        </span>
        <br />
        Курс: {{ group.course }}<br />
        Тип: {{ group.type }}<br />
      </div>
      <div class="control">
        <img @click="editGroup(group.id,group)" src="@/assets/update.svg" />
        <img @click="deleteGroup(group.id)" src="@/assets/delete.svg" />
      </div>
    </div>
    <UpdateGroup />
  </div>
</template>

<script>
import AddGroup from "@/components/AddGroup.vue";
import UpdateGroup from "@/components/UdateGroup.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GroupsList",
  components: {
    AddGroup,
    UpdateGroup,
  },
  methods: {
    ...mapActions(["fetchGroup", "deleteGroup", "updateGroup"]),
    editGroup(id,data) {
      this.updateGroup(id,data);
    },
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