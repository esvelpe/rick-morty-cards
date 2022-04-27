<template>
  <div>
    <b-card-group deck>
      <b-card
        v-for="ch in characters"
        :key="ch.id"
        :title="ch.name"
        :img-src="ch.image"
        img-top
      ></b-card>
    </b-card-group>
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
