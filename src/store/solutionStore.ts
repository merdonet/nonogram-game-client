import { defineStore } from "pinia";
import { SolutionPuzzle } from "./types";
import { useNonoStore } from "./nonoStore";

import { computed, reactive, ref } from "vue";

export const useSolutionStore = defineStore("solution", () => {
  const { puzzle, puzzleHeight, puzzleWidth } = useNonoStore();

  const lives = ref<number>(3);

  const solution: SolutionPuzzle = reactive(
    [...Array(puzzleHeight)].map(() =>
      [...Array(puzzleWidth)].map(() => undefined)
    )
  );

  const getLives = computed(() => lives);

  const puzzleLine = (item: number) => solution[item];

  const updateSolution = (
    row: number,
    column: number,
    val: number | undefined
  ): void => {
    if (solution[row][column] == val) {
      solution[row][column] = undefined;
      return;
    }

    solution[row][column] = val;

    if (solution[row][column] != puzzle[row][column]) {
      lives.value--;
    }
  };

  return {
    lives,
    getLives,
    solution,
    puzzleLine,
    updateSolution,
  };
});
