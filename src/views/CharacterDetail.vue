<template>
  <b-container style="text-align: center">
    <b-row>
      <b-col>
        <h1 class="d-flex justify-content-center mt-5 mb-5">
          INFORMACIÓN DEL PERSONAJE
        </h1>
      </b-col>
    </b-row>
    <b-row class="info-character">
      <b-col md="4" class="col-img">
        <img :src="character.image" alt="Imagen del personaje" />
      </b-col>
      <b-col md="8">
        <strong class="d-block">Nombre del personaje</strong>
        <span class="d-block mb-3"> {{ character.name }} </span>
        <strong class="d-block">Especie del personaje:</strong>
        <span class="d-block mb-3"> {{ character.species }} </span>
        <strong class="d-block">Género del personaje:</strong>
        <span class="d-block"> {{ character.gender }} </span>
      </b-col>
    </b-row>
  </b-container>
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
.col-img {
  margin-left: 15%;
  margin-right: -15%;
}

.info-character {
  font-size: 1.5rem;
}

#img-border {
  border: 10px solid;
}
</style>
