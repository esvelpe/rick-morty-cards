<template>
  <div>
    <b-conainter>
      <b-row>
        <b-col>
          <px-cards :characters="characters"></px-cards>
        </b-col>
      </b-row>
    </b-conainter>
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
      characters: [],
      locations: [],
      episodes: [],
    };
  },

  created() {
    api.getCharacters(1).then((resp) => (this.characters = resp));
  },
};
</script>
