<template>
  <h2>{{ playerTitle }} - {{ favoritePlayerPercentage }}% Favorites</h2>
</template>
<script>
export default {
  props: {
    playerList: {
      type: Array,
      required: true
    },
    playerTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    favoritePlayerPercentage() {
      return Math.floor((this.getFavorites(this.playerList).length / this.playerList.length) * 100);
    }
  },
  methods: {
    getFavorites(playerList) {
      return playerList.filter(function (player) {
        return player.favorite
      });
    }
  }
}
</script>