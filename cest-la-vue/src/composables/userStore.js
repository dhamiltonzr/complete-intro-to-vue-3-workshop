import {ref} from "vue";

async function getUserList() {
  return await fetch('https://jsonplaceholder.org/users')
  .then(response => response.json())
  .catch(error => [{id: 1, firstname: 'Error', lastname: `${JSON.stringify(error)}`}]);
}

const users = ref(await getUserList());
export {
  users
}
