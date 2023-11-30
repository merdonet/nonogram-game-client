<template>
    <div>
        <v-switch v-model="selection" color="blue-darken-4" class="ma-0 pa-0" inset hide-details
            @update:model-value="onClick" />
        <CellComponent :status="selection" class="user-selection" @clicked="onCellClick" />
        <div>
            <v-chip class="ma-2" :color="livesColor" label>{{ lives }}</v-chip>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CellComponent } from "..";
import { computed } from "vue";

const props = defineProps({
    lives: {
        type: Number,
        required: true,
    },
});

const selection = ref(false);

const livesColor = computed(() => (props.lives > 0 ? "#29B6F6" : "#D84315"));

const emit = defineEmits(["selection"]);

const onClick = () => emit("selection", selection.value);
const onCellClick = (val: boolean) => {
    selection.value = val;
};
</script>

<style scoped>
.user-selection {
    min-width: 50px;
    min-height: 50px;
    border-width: 1px;
}
</style>
