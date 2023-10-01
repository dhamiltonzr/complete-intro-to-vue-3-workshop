<template>
  <div class="player-list">
    <slot name="player-list">Empty List</slot>
  </div>
  <div class="add-player">
    <slot name="add-player">Add Player</slot>
  </div>
</template>

<script>

</script>

<style>
.player-list {
    border: 1px solid red;
}
.add-player {
    border: 1px solid blue;
}
</style>