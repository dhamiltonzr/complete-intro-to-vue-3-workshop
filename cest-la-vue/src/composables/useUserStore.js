import { ref } from "vue";

async function fetchUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return response;
}

export const userList = ref(await fetchUsers());
