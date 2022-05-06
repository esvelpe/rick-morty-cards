<template>
  <div>
    <b-container>
      <b-row class="m-md-2 p-md-5 justify-between">
        <b-col md="6" v-for="ch in charactersList" :key="ch.id">
          <router-link
            :to="{ name: 'character-detail', params: { id: ch.id } }"
          >
            <b-card
              header-tag="header"
              :title="ch.name"
              :img-src="ch.image"
              img-top
              class="mb-md-3"
            >
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PxCards",

  props: {
    charactersList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
