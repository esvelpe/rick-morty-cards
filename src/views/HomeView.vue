<template>
  <div>
    <px-pagination></px-pagination>
    <footer>
      <p class="d-flex justify-content-center">
        Developed by:
        <a href="https://github.com/esvelpe" target="_blank" class="pl-1">
          Esneider Vélez Peña</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
import PxPagination from "@/components/PxPagination";

export default {
  name: "HomeView",
  components: { PxPagination },

  data() {
    return {
      perPage: 10,
    };
  },
};
</script>
