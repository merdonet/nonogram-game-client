<template>
    <template v-for="item in puzzleHeight">
        <div class="d-flex flex-row">
            <template v-for="cell in puzzleLine(item - 1)">
                <CellComponent :status="cell == 1" />
            </template>
        </div>
    </template>
</template>

<script setup lang="ts">
import { CellComponent } from "..";
import { useNonoStore } from "../../../store/nonoStore";

const { puzzleLine, puzzleHeight } = useNonoStore()






</script>