<template>
    <div>
        <v-switch v-model="selection" color="orange" class="ma-0 pa-0" inset hide-details @update:model-value="onClick" />
        <CellComponent :status="selection" class="user-selection" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CellComponent } from '..';

const selection = ref(false)

const emit = defineEmits(['selection'])

const onClick = () => emit('selection', selection)

</script>

<style scoped>
.user-selection {
    min-width: 50px;
    min-height: 50px;
    border-width: 1px;
}
</style>