<template>
  <h2>{{usersCountLabel}} {{this.usersCount}}</h2>
</template>

<script>

import {users} from "../composables/userStore";

export default {
  props: {
    usersCountLabel: {
      type: String,
      default: 'Users Count',
      required: false
    }
  },
  computed: {
    usersCount: () => {
      return (users && users.value ? users.value.length : 0);
    }
  }
}

</script>