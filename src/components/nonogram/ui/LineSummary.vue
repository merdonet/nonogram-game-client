<template>
    <div class="d-flex flex-row align-center">
        <template v-for="item in lineDescription">
            <span class="summary-cell">
                {{ item }}
            </span>
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
        default: 4
    }
})

const lineDescription: Array<Number | string> = lineSummary(props.line)
const missedBlankCell = props.maxCellCount - lineDescription.length;
// lineDescription.push(0)
if (missedBlankCell) {

    for (let index = 1; index <= missedBlankCell; index++) {
        lineDescription.unshift('-')
    }
}


</script>
<style scoped>
.summary-cell {
    border: 1px solid rgb(146, 136, 136);
    min-width: 50px;
    min-height: 50px;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
}
</style>