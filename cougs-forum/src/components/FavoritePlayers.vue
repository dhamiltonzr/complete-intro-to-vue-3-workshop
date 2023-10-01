
<template>
  <h2>{{ playerTitle }}</h2>
  <ul>
    <li v-for="(player, index) in favoritePlayerList" :key="`fav-${this.playerTitle}-${index}`">
      {{ player.name }} - NFL team: {{ player.nflTeam }}
    </li>
  </ul>

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
    },
    playerType: {
      type: String,
      required: true
    }
  },
  computed: {
    favoritePlayerList() {
      return this.getFavorites(this.playerList);
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
