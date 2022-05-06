<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="6"> {{}} </b-col>
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
      character: [],
      episodes: [],
      locations: [],
    };
  },

  methods: {
    getInfo() {
      const id = this.$route.params.id;
      Promise.all([api.getCharacter(id)]);
    },
  },
};
</script>
