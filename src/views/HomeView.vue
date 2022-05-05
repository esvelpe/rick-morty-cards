<template>
  <div>
    <px-pagination></px-pagination>
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
      isLoading: false,
    };
  },
};
</script>
