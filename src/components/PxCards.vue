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
            class="isActive"
          >
            <b-card
              header-tag="header"
              :img-src="ch.image"
              img-top
              style="max-width: 100%"
              class="mb-md-3"
            >
              <b-card-text class="p-0">
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
