<template>
  <v-btn class="cell pa-0" flat variant="outlined" :class="borderColor" rounded="false" @click="onClick">
    <v-icon :icon="cellStatusIcon" size="3rem" :color="iconColor"></v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { CellStatus } from "../types/cellTypes";
import { PropType, computed } from "vue";

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


const cellStatusIcon = computed(() => {
  if (props.status) return "mdi-square";
  if (props.status == false) return "mdi-close";
  return undefined;
});

const borderColor = props.success == true ? "cell-success" : "cell-error";

const iconColor = props.status == true ? '#424242' : '#BDBDBD';

const onClick = () => emit("clicked", props.status);
</script>

<style scoped>
.cell {
  min-width: 50px;
  min-height: 50px;
  border-width: 1px;
}

.cell-error {
  border-color: red;
}

.cell-success {
  border-color: black;
}
</style>
