<template>
  <div>
    <b-container>
      <b-row class="m-md-2 p-md-5 justify-between">
        <b-col md="6" v-for="ch in charactersList" :key="ch.id">
          <b-card
            header-tag="header"
            :title="ch.name"
            :img-src="ch.image"
            img-top
            class="mb-md-3"
          >
            <template #header>
              <div
                :class="{
                  'bg-success': ch.status === 'Alive',
                  'bg-danger': ch.status === 'Dead',
                  'bg-secondary': ch.status === 'uknown',
                }"
                class="rounded-circle"
              ></div>
            </template>
          </b-card>
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
