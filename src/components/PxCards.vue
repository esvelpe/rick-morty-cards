<template>
  <div>
    <b-container>
      <b-row class="mt-md-3">
        <b-col md="3" v-for="ch in characters" :key="ch.id">
          <b-card
            :title="ch.name"
            :img-src="ch.image"
            img-top
            class="mb-md-3"
          ></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PxCards",

  props: {
    characters: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
