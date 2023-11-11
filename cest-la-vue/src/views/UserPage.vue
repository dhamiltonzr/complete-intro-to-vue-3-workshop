<script setup>
import UserCard from "../components/UserCard.vue";
import { defineProps } from "vue";
import { userList } from "../composables/useUserStore";

defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

defineEmits(["update-user-list"]);

</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard
        v-for="user in userList"
        :user="user"
        :key="`user-${user.id}`"
      />
    </ul>
  </main>
</template>

<style></style>
