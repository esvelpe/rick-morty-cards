<template>
  <div class="contenedor">
    <b-spinner
      v-if="isLoading"
      type="grow"
      label="Spinning"
      style="width: 3rem; height: 3rem"
    ></b-spinner>
    <b-container v-else>
      <b-row>
        <b-col>
          <h1 class="d-flex justify-content-center">
            INFORMACIÓN DEL PERSONAJE
          </h1>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="2">
          <img
            :src="character.image"
            alt="imagen del personaje"
            id="img-border"
            :class="{
              'border-success': character.status === 'Alive',
              'border-danger': character.status === 'Dead',
              'border-secondary': character.status === 'unknown',
            }"
          />
        </b-col>
        <b-row class="d-flex align-items-center">
          <b-row>
            <b-col><h3>Nombre del personaje:</h3></b-col>
            <b-col>{{ character.name }}</b-col>
          </b-row>
          <b-row>
            <b-col><h3>Especie del personaje:</h3></b-col>
            <b-col>{{ character.species }}</b-col>
          </b-row>
          <b-row>
            <b-col><h3>Género del personaje:</h3></b-col>
            <b-col> {{ character.gender }} </b-col>
          </b-row>
        </b-row>
      </b-row>
      <b-row class="h-50">
        <b-col class="h-100">
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
<style scoped>
.contenedor {
  font-size: 1.5rem;
}

#img-border {
  border: 10px solid;
}
</style>
