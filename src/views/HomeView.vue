<template>
  <div class="ma-16">
    <CellComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import { CellComponent } from "../components/nonogram";

export default defineComponent({
  name: "HomeView",

  components: {
    CellComponent,
  },
});
</script>
