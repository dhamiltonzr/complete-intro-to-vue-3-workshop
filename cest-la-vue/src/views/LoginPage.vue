<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const emailValue = ref('');

function inputChanged(event) {
  if (emailValue.value === 'dean@zaneray.com') {
    document.getElementById('submit').disabled = false;
  }
}

function buttonClicked(event) {
  router.push('/users');
}

</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input v-model="emailValue" type="email" @change="inputChanged"/>
    <button id="submit" @click="buttonClicked" disabled>View Users</button>
  </main>
</template>

<style></style>
