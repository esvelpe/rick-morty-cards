<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <px-cards :charactersList="charactersList"></px-cards>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import api from "@/api.js";
import PxCards from "@/components/PxCards";

export default {
  name: "PxPagination",

  components: { PxCards },

  props: {
    perPage: {
      type: Number,
      default: 5,
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      rows: 25,
      currentPage: 1,
      characters: [],
      lastFetch: 1,
    };
  },

  created() {
    this.getCharacters(1);
  },

  methods: {
    getCharacters(page) {
      return api.getCharacters(page).then((resp) => (this.characters = resp));
    },
  },

  watch: {
    currentPage() {
      if (this.currentPage % 2 != 0) {
        this.lastFetch = this.currentPage;
        this.getCharacters(this.apiPage);
      } else {
        if (this.currentPage < this.lastFetch) {
          this.getCharacters(this.currentPage - 1);
          this.lastFetch = this.currentPage - 1;
        }
      }
    },
  },

  computed: {
    charactersList() {
      let part = this.currentPage % 2 != 0 ? true : false;
      if (part) {
        return this.characters.slice(0, 10);
      } else {
        return this.characters.slice(-10);
      }
    },

    apiPage() {
      return (this.currentPage + 1) / 2;
    },
  },
};
</script>
