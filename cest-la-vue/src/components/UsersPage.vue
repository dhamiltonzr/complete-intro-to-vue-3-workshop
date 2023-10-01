<template>
  <ul>
    <li v-for="user in this.users">
      {{user.id}} - {{user.firstname}} {{user.lastname}}
    </li>
  </ul>
</template>
<script>
export default {
  data: () => ({
    users: [
      {
        id: 1,
        firstname: 'Dean',
        lastname: 'Hamilton'
      }
    ]
  }),
  methods: {
    async fetchUsers() {
      this.users =  await fetch('https://jsonplaceholder.org/users')
                      .then(response => response.json())
                      .catch(error => [{id: 1, firstname: 'Error', lastname: `${JSON.stringify(error)}`}]);
    }
  },
  created() {
    console.log('fetching users');
    this.fetchUsers();
    console.log(`users: ${JSON.stringify(this.users)}`);
  }
}
</script>