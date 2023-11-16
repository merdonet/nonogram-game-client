import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { lineSummary } from "../components/nonogram/utils/lineSummary";

export const useNonoStore = defineStore("nono", () => {
  const puzzle = reactive([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);

  const puzzleLine = (item: number) => puzzle[item];
  const puzzleHeight = computed(() => puzzle.length);

  const rowSummaryList = computed(() => {
    return puzzle.map((rowList: number[]) => {
      return lineSummary(rowList);
    });
  });

  return { puzzle, puzzleLine, puzzleHeight, rowSummaryList };
});
