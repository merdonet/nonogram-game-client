<template>
    <div>
        <div class="d-flex flex-column bg-surface">
            <div class="d-flex flex-row-reverse align-end">
                <div class="ma-2 pa-2 mb-0 pb-0">
                    <div class="d-flex flex-row">
                        <template v-for="item in puzzleWidth">
                            <div class="flex-column">
                                <LineSummary :line="puzzleColumn(item - 1)" :maxCellCount="maxSummaryColumn"
                                    direction="vertical" />
                            </div>
                        </template>
                    </div>
                </div>
                <div class="justify-center align-center">
                    <MarkSelection :lives="getLives" @selection="onSelection" />
                </div>

            </div>
            <div class="d-flex flex-row-reverse">
                <div class="ma-2 pa-2 mt-0">
                    <template v-for="(item, rowindex) in puzzleHeight">
                        <div class="d-flex flex-row text-no-wrap">
                            <div class="flex-row-reverse mr-2">
                                <LineSummary :line="puzzleLine(item - 1)" :maxCellCount="maxSummaryRow" />
                            </div>
                            <div>
                                <template v-for="(_, colIndex) in puzzleLine(item - 1)">
                                    <CellComponent :status="cellStatus(rowindex, colIndex)"
                                        @clicked="onCellClick(rowindex, colIndex)" />
                                </template>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CellComponent, MarkSelection, LineSummary } from "..";
import { useNonoStore } from "../../../store/nonoStore";
import { useSolutionStore } from "../../../store/solutionStore";

let selection = ref(false);

const onSelection = (val: boolean) => {
    selection.value = val;
};

const onCellClick = (rowindex: number, colIndex: number) => {
    updateSolution(rowindex, colIndex, selection.value == true ? 1 : 0)
};

const cellStatus = (rowindex: number, colIndex: number) => {
    return solution[rowindex][colIndex]
}

const {
    puzzleLine,
    puzzleHeight,
    maxSummaryRow,
    maxSummaryColumn,
    puzzleColumn,
    puzzleWidth,
} = useNonoStore();

const { getLives, solution, updateSolution } = useSolutionStore();


</script>
