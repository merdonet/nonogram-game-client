<template>
  <div>
    <v-btn
      class="cell pa-0"
      flat
      variant="outlined"
      :class="borderColor"
      rounded="false"
      @click="onClick"
    >
      <v-icon :icon="cellStatusIcon" size="3rem"></v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { CellStatus } from "../types/cellTypes";
import { PropType, computed } from "vue";
import { useNonoStore } from "../../../store/nonoStore";

const props = defineProps({
  success: {
    type: Boolean,
    default: true,
  },
  status: {
    type: Boolean as PropType<CellStatus>,
    default: false,
  },
});

const emit = defineEmits(["clicked"]);

useNonoStore();

const cellStatusIcon = computed(() => {
  if (props.status) return "mdi-square";
  if (props.status == false) return "mdi-close";
  return null;
});

const borderColor = props.success == true ? "cell-success" : "cell-error";

const onClick = () => emit("clicked", props.status);
</script>

<style scoped>
.cell {
  min-width: 50px;
  min-height: 50px;
  border-width: 2px;
}
.cell-error {
  border-color: red;
}
.cell-success {
  border-color: black;
}
</style>
