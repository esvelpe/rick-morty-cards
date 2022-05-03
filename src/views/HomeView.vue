<template>
  <div>
    <px-cards id="cards" :characters="characters"></px-cards>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="cards"
    ></b-pagination>
  </div>
</template>

<script>
import PxCards from "@/components/PxCards";
import api from "@/api";

export default {
  name: "HomeView",
  components: { PxCards },

  data() {
    return {
      currentPage: 1,
      perPage: 10,
      characters: [],
      locations: [],
      episodes: [],
    };
  },

  created() {
    api
      .getCharacters(this.currentPage)
      .then((resp) => (this.characters = resp));
  },

  computed: {
    rows() {
      return this.characters.length;
    },
  },
};
</script>
