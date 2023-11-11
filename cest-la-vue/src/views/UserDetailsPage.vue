<template>
  <h1>{{ user.id }} - {{ user.name }}</h1>
</template>

<script setup>
import { userList } from "../composables/useUserStore";
import {useRoute} from "vue-router";

const route = useRoute();
const id = route.params.id;
const user = userList.value.find((user) => user.id == id);
console.log(user);
</script>