<template>
  <div>
    <label for="newPlayer.name">New Player Name</label>
    <input type="text" v-model="newPlayer.name"/>
    <label for="newPlayer.nflTeam">New Player NFL Team</label>
    <input type="text" v-model="newPlayer.nflTeam"/>
    <label for="newPlayer.favorite">Favorite</label>
    <input type="checkbox" value="true" v-model="newPlayer.favorite"/>
    <label for="newPlayer.position">Position</label>
    <input type="radio" value="quarterback" v-model="newPlayer.position"/> Quarterback
    <input type="radio" value="runningBack" v-model="newPlayer.position"/> Running Back
    <button @click="addNewPlayer">Add New Player</button>
  </div>
</template>
<script>
  export default {
    props: {
      newPlayer: {
        type: Object,
        required: true
      }
    },
    emits: ['add-new-player'],
    methods: {
      addNewPlayer() {
        this.$emit('add-new-player');
      }
    }
  }
</script>
