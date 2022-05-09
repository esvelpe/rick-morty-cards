<template>
  <div>
    <div class="ml-4 mt-3">
      <router-link to="/" class="isActive">
        <p class="h3 back-button">
          <b-icon icon="arrow-up" rotate="270"></b-icon> Home
        </p>
      </router-link>
    </div>
    <b-container style="text-align: center">
      <b-row>
        <b-col>
          <h1 class="d-flex justify-content-center mt-5 mb-5">
            CHARACTER INFORMATION
          </h1>
        </b-col>
      </b-row>
      <b-row class="info-character">
        <b-col md="4" class="col-img">
          <img
            :src="character.image"
            alt="Imagen del personaje"
            class="img-character"
            :class="{
              'border-success': character.status === 'Alive',
              'border-danger': character.status === 'Dead',
              'border-secondary': character.status === 'unknown',
            }"
          />
        </b-col>
        <b-col md="8" class="mt-4">
          <strong class="d-block">Character name</strong>
          <span class="d-block mb-3"> {{ character.name }} </span>
          <strong class="d-block">Character species</strong>
          <span class="d-block mb-3"> {{ character.species }} </span>
          <strong class="d-block">Character gender</strong>
          <span class="d-block"> {{ character.gender }} </span>
        </b-col>
      </b-row>
      <b-row class="location-character mt-5">
        <b-col>
          <h2 class="d-flex justify-content-center d-block">
            ACTUAL CHARACTER LOCATION
          </h2>
          <b-table-simple stacked class="d-block location-table">
            <b-thead head-variant="dark">
              <b-tr>
                <b-th> Location name </b-th>
                <b-th> Type </b-th>
                <b-th> Dimension</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td stacked-heading="Location name">
                  {{ location.name }}
                </b-td>
                <b-td stacked-heading="Type"> {{ location.type }} </b-td>
                <b-td stacked-heading="Dimension">
                  {{ location.dimension }}
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>
      <b-row class="list-episodes d-flex d-wrap mt-1 mb-5">
        <b-col class="mt-5">
          <h2 class="d-flex justify-content-center mb-3 d-block">
            EPISODES LIST
          </h2>
          <p class="d-block p-episode">
            In the next list you are gonna find the episodes where
            <strong>{{ character.name }}</strong> appears:
          </p>
          <div v-for="e in listEpisodes" :key="e" class="d-inline episodes">
            {{ e }}
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import api from "@/api.js";

export default {
  name: "CharacterDetail",

  data() {
    return {
      id: this.$route.params.id,
      character: [],
      location: [],
      isLoading: false,
      variant: "success",
    };
  },

  watch: {
    $route() {
      this.getInfo();
    },
  },

  created() {
    this.getCharacter();
  },

  beforeUpdate() {
    this.getLocation();
  },

  methods: {
    getCharacter() {
      this.isLoading = true;
      api
        .getCharacter(this.id)
        .then((character) => {
          this.character = character;
        })
        .finally((this.isLoading = false));
    },
    getLocation() {
      this.isLoading = true;
      const location_url = this.character.location.url;
      api
        .getLocation(location_url)
        .then((resp) => (this.location = resp))
        .finally((this.isLoading = false));
    },
  },

  computed: {
    listEpisodes() {
      const episodes = this.character.episode;
      const path_list = episodes.map((x) => new URL(x).pathname);
      const number_episode = path_list.map((x) => {
        if (x.length === 14) {
          return `0${x.slice(-1)}`;
        } else if (x.length === 15) {
          return x.slice(-2);
        }
      });
      return number_episode;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Macondo&display=swap");

html {
  font-family: "Macondo", cursive;
}

.isActive {
  color: black;
  text-decoration: none;
}
.col-img {
  margin-left: 15%;
  margin-right: -15%;
}

.info-character {
  font-size: 1.5rem;
}

.img-character {
  border: 10px solid;
}

.location-table {
  font-size: 1.3rem;
}

.episodes {
  border: 1px solid black;
  padding: 0 2%;
  margin: 1.5%;
  border-radius: 3px;
}

.p-episode {
  font-size: 1.3rem;
}
</style>
