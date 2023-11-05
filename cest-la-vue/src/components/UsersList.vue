<template>
  <ul>
    <li v-for="user in this.getUsers">
      {{user.id}} - {{user.firstname}} {{user.lastname}}
    </li>
  </ul>
</template>

<script>
import {users} from "../composables/userStore";

export default {
  computed: {
    getUsers: () => {
      return users.value;
    }
  }
}
</script>