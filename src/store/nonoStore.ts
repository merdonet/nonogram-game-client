import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useNonoStore = defineStore("nono", () => {
  const puzzle = reactive([
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  ]);

  const puzzleLine = (item: number) => puzzle[item];
  const puzzleHeight = computed(() => puzzle.length);

  return { puzzle, puzzleLine, puzzleHeight };
});
