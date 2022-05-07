<template>
  <div>
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
          >
            <b-card
              header-tag="header"
              :img-src="ch.image"
              img-top
              style="max-width: 100rem"
              class="mb-md-3"
            >
              <b-card-text class="p-0">
                <div class="d-flex row">
                  <b-col md="7">
                    <strong>{{ ch.name }}</strong>
                  </b-col>
                  <b-col md="2" id="status_circle_col">
                    <div
                      id="status_circle"
                      class="d-flex rounded-circle"
                      :class="{
                        alive: ch.status === 'Alive',
                        dead: ch.status === 'Dead',
                        unknown: ch.status === 'unknown',
                      }"
                    ></div>
                  </b-col>
                  <b-col>
                    <span md="3">alive</span>
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
#status_circle {
  height: 100%;
  padding: 0 -10px;
}
#status_circle_col {
  padding: 0 15px 0 10px;
}
.alive {
  background-color: rgb(83, 142, 83);
}
.dead {
  background-color: brown;
}
.unknown {
  background-color: gray;
}
</style>
