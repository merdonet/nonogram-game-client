<template>
    <div class="d-flex align-center" :class="directionClass">
        <template v-for="item in lineDescription">
            <v-btn class="cell pa-0" flat variant="outlined" rounded="false" :ripple="false">
                {{ item }}
            </v-btn>
        </template>
    </div>
</template>

<script setup lang="ts">
import { lineSummary } from "../utils/lineSummary";

const props = defineProps({
    line: {
        type: Array<number>,
        required: true
    },
    maxCellCount: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
    }
})

const lineDescription: Array<Number | string> = lineSummary(props.line)
const missedBlankCell = props.maxCellCount - lineDescription.length;

if (missedBlankCell) {
    for (let index = 1; index <= missedBlankCell; index++) {
        lineDescription.unshift('-')
    }
}

const directionClass = props.direction == 'vertical' ? 'flex-column' : 'flex-row'


</script>
<style scoped>
.summary-cell {
    border: 1px solid rgb(209, 207, 207);
    min-width: 50px;
    min-height: 50px;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
}

.cell {
    border: 1px solid rgb(193, 192, 192);
    min-width: 50px;
    min-height: 50px;
    border-width: 2px;
}
</style>