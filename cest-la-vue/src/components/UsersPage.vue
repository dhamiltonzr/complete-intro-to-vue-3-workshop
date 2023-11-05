<template>
  <users-counter :users-count-label="`Users Page Count`" />
  <users-list />
  <button @click="removeLastUser">Remove Last User</button>
</template>
<script>
import {users} from "../composables/userStore";
import UsersCounter from "./UsersCounter.vue";
import UsersList from "./UsersList.vue";

export default {
  components: {
    UsersCounter,
    UsersList
  },
  methods: {
    removeLastUser: () => {
      if (users && users.value && users.value.length > 0) {
        users.value.pop();
      }
    }
  }
}
</script>