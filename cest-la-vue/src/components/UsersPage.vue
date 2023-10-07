<template>
  <h2>{{this.usersCount}}</h2>
  <ul>
    <li v-for="user in this.users">
      {{user.id}} - {{user.firstname}} {{user.lastname}}
    </li>
  </ul>
  <button @click="removeLastUser">Remove Last User</button>
</template>
<script>
import {computed,ref} from "vue";

export default {
  async setup() {
    const initialUsers = await fetch('https://jsonplaceholder.org/users')
    .then(response => response.json())
    .catch(error => [{id: 1, firstname: 'Error', lastname: `${JSON.stringify(error)}`}]);
    const users = ref(initialUsers);
    const usersCount = computed(() => {
        return users.value.length;
      }
    );
    const removeLastUser = () => {
      if (users && users.value && users.value.length > 0) {
        users.value.pop();
      }
    };
    return {
      removeLastUser: removeLastUser,
      users: users,
      usersCount: usersCount
    }
  }
}
</script>