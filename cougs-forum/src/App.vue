<script>
export default {
  data: () => ({
    newPlayer: {},
    quarterbackList: [
      {
        name: 'Drew Bledsoe',
        nflTeam: 'New England',
        favorite: true
      },
      {
        name: 'Timm Rosenbach',
        nflTeam: 'Arizona',
        favorite: false
      },
      {
        name: 'Jack Thompson',
        nflTeam: 'Cincinnati',
        favorite: true
      }
    ],
    runningBackList: [
      {
        name: 'Michael Black',
        nflTeam: 'None',
        favorite: false
      },
      {
        name: 'Kerry Porter',
        nflTeam: 'Los Angeles Raiders',
        favorite: true
      },
      {
        name: 'Reuben Mayes',
        nflTeam: 'New Orleans',
        favorite: true
      }
    ]
  }),
  computed: {
    favoriteQuarterbackList() {
      return this.getFavorites(this.quarterbackList);
    },
    favoriteQuarterbackPercentage() {
      return Math.floor((this.getFavorites(this.quarterbackList).length / this.quarterbackList.length) * 100);
    },
    favoriteRunningBackList() {
      return this.getFavorites(this.runningBackList);
    },
    favoriteRunningBackPercentage() {
      return Math.floor((this.getFavorites(this.runningBackList).length / this.runningBackList.length) * 100);
    }
  },
  methods: {
    addNewPlayer() {
      if (this.newPlayer.position === 'quarterback') {
        this.quarterbackList.push(this.newPlayer);
      }
      else {
        this.runningBackList.push(this.newPlayer);
      }
      this.newPlayer = {};
    },
    getFavorites(playerList) {
      return playerList.filter(function (player) {
        return player.favorite
      });
    },
    resetFavorites() {
      this.quarterbackList.forEach(this.resetFavorite);
      this.runningBackList.forEach(this.resetFavorite);
    },
    resetFavorite(player) {
      player.favorite = false;
    }
  }
}
</script>

<template>
  <h1>Famous Cougs</h1>
  <h2>Quarterbacks - {{ favoriteQuarterbackPercentage }}% Favorites</h2>
  <ul>
    <li v-for="quarterback in quarterbackList">
      {{ quarterback.name }} - NFL team: {{ quarterback.nflTeam }} - <input type="checkbox"
                                                                            v-model="quarterback.favorite"/>
    </li>
  </ul>
  <h2>Running Backs - {{ favoriteRunningBackPercentage }}% Favorites</h2>
  <ul>
    <li v-for="runningBack in runningBackList">
      {{ runningBack.name }} - NFL team: {{ runningBack.nflTeam }} - <input type="checkbox"
                                                                            v-model="runningBack.favorite"/>
    </li>
  </ul>
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
  <button @click="resetFavorites()">Reset Favorites</button>
  <pre>{{ newPlayer.name }}</pre>
  <h1>Dean's Favorite Famous Cougs</h1>
  <h2>Quarterbacks</h2>
  <ul>
    <li v-for="(quarterback, index) in favoriteQuarterbackList" :key="`fav-qb-${index}`">
      {{ quarterback.name }} - NFL team: {{ quarterback.nflTeam }}
    </li>
  </ul>
  <h2>Running Backs</h2>
  <ul>
    <li v-for="(runningBack, index) in favoriteRunningBackList" :key="`fav-rb-${index}`">
      {{ runningBack.name }} - NFL team: {{ runningBack.nflTeam }}
    </li>
  </ul>
</template>

