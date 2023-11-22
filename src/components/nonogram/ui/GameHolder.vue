<template>
    <div>
        <div class="d-flex flex-column bg-surface">
            <div class="d-flex flex-row-reverse">
                <div class=" ma-2 pa-2 mb-0 pb-0">
                    <div class="d-flex flex-row">
                        <template v-for="item in puzzleWidth">
                            <div class="flex-column">
                                <LineSummary :line="puzzleColumn(item - 1)" :maxCellCount="maxSummaryLine"
                                    direction="vertical" />
                            </div>
                        </template>
                    </div>

                </div>
                <div class="mt-10 mr-16">
                    <MarkSelection @selection="onSelection" />
                </div>
            </div>
            <div class="d-flex flex-row-reverse">
                <div class="ma-2 pa-2 mt-0">
                    <template v-for="item in puzzleHeight">
                        <div class="d-flex flex-row text-no-wrap">
                            <div class="flex-row-reverse mr-2">
                                <LineSummary :line="puzzleLine(item - 1)" :maxCellCount="maxSummaryLine" />
                            </div>
                            <div>
                                <template v-for="cell in puzzleLine(item - 1)">
                                    <CellComponent :status="cell == 1" @clicked="onCellClick" />
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

const selection = ref(false)

const onSelection = (val: boolean) => {
    selection.value = val
}

const onCellClick = () => {
    // TODO: call store
    console.log(selection.value)
}

const { puzzleLine, puzzleHeight, maxSummaryLine, puzzleColumn, puzzleWidth } =
    useNonoStore();
</script>
