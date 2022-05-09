<template>
  <div>
    <b-pagination
      class="mt-3"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <b-spinner type="grow" label="Spinning" v-if="isLoading"></b-spinner>
    <px-cards :charactersList="charactersList" v-else></px-cards>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
      class="mt-3"
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
      default: 10,
    },
  },

  data() {
    return {
      currentPage: 1,
      characters: [],
      lastFetch: 1,
      isLoading: true,
    };
  },

  created() {
    this.isLoading = true;
    this.getCharacters(1).finally(() => (this.isLoading = false));
  },

  methods: {
    getCharacters(page) {
      this.isLoading = true;
      return api
        .getCharacters(page)
        .then((resp) => (this.characters = this.characters.concat(resp)))
        .finally(() => (this.isLoading = false));
    },
  },

  watch: {
    currentPage() {
      if (this.currentPage % 2 == 0 && this.currentPage > this.lastFetch) {
        this.getCharacters(this.currentPage);
        this.lastFetch = this.currentPage;
      }
    },
  },

  computed: {
    charactersList() {
      return this.characters.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },

    rows() {
      return this.characters.length;
    },
  },
};
</script>
