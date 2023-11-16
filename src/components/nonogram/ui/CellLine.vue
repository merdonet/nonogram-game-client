<template>
    <template v-for="item in puzzleHeight">
        <div class="d-flex flex-row">
            <div class="flex-row-reverse mr-1">
                <LineSummary :line="puzzleLine(item - 1)" />
            </div>
            <div>
                <template v-for="cell in puzzleLine(item - 1)">
                    <CellComponent :status="cell == 1" />
                </template>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
import { CellComponent } from "..";
import { LineSummary } from "..";
import { useNonoStore } from "../../../store/nonoStore";


const { puzzleLine, puzzleHeight } = useNonoStore()

</script>