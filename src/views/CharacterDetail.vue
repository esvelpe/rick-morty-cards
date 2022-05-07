<template>
  <div>
    <b-container>
      <b-row class="mt-5">
        <b-col md="6">
          <div class="mt-3">
            <img :src="character.image" alt="imagen del personaje" />
          </div>
        </b-col>
        <b-row class="d-flex align-items-center">
          <b-col md="8">{{ character.name }}</b-col>
          <b-col md="4"
            ><span
              ><b-badge pill :variant="variantColor">{{
                character.status
              }}</b-badge></span
            ></b-col
          >
          <b-col md="12">{{ character.species }}</b-col>
          <b-col md="12"> {{ character.gender }} </b-col>
        </b-row>
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

  mounted() {
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
      const location_id = this.character.location.url.slice(-1);
      api
        .getLocation(location_id)
        .then((resp) => (this.location = resp))
        .finally((this.isLoading = false));
    },
  },

  computed: {
    variantColor() {
      let value = "";
      switch (this.character.status) {
        case "Alive":
          value = "succes";
          break;
        case "Dead":
          value = "danger";
          break;
        case "unknown":
          value = "secondary";
          break;
      }
      return value;
    },
  },
};
</script>
