<template>
  <div>
    <b-spinner v-if="isLoading" type="grow" label="Spinning"></b-spinner>
    <b-container v-else>
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
      <b-row>
        <b-col>
          <strong class="d-flex justify-content-center"
            >Locación actual:</strong
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col><strong>Nombre: </strong></b-col>
        <b-col>
          {{ location.name }}
        </b-col>
      </b-row>
      <b-row>
        <b-col><strong>Tipo: </strong></b-col>
        <b-col>
          {{ location.type }}
        </b-col>
      </b-row>
      <b-row>
        <b-col><strong>Dimensión: </strong></b-col>
        <b-col>
          {{ location.dimension }}
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
