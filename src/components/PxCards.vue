<template>
  <div class="body">
    <b-container fluid>
      <div class="d-flex row">
        <b-col
          md="6"
          v-for="ch in charactersList"
          :key="ch.id"
          class="d-flex justify-content-center mb-5 mt-5"
        >
          <router-link
            :to="{ name: 'character-detail', params: { id: ch.id } }"
            class="isActive"
          >
            <b-card
              header-tag="header"
              :img-src="ch.image"
              img-top
              style="max-width: 120%"
              class="card mb-md-3"
            >
              <b-card-text class="p-0 card-text">
                <div class="d-flex row">
                  <b-col md="9">
                    <strong class="pl-1">{{ ch.name }}</strong>
                  </b-col>
                  <b-col
                    md="3"
                    class="rounded-pill text-dark align-middle"
                    :class="{
                      'bg-success': ch.status === 'Alive',
                      'bg-danger': ch.status === 'Dead',
                      'bg-secondary': ch.status === 'unknown',
                    }"
                  >
                    <span class="d-flex justify-content-center">{{
                      ch.status
                    }}</span>
                  </b-col>
                </div>
              </b-card-text>
            </b-card>
          </router-link>
        </b-col>
      </div>
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
<style scoped>
html,
body {
  background-color: black;
}
.body {
  background-color: black;
}

.isActive {
  color: black;
  text-decoration: none;
}
#status_circle {
  height: 100%;
  padding: 0 -10px;
}
#status_circle_col {
  padding: 0 15px 0 10px;
}

.card-text {
  color: white;
}

.card {
  width: 120%;
  border: 1.5px solid white;
  background-color: rgb(0, 0, 0);
}
</style>
