import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import {
  lineSummary,
  maxSummaryLength,
} from "../components/nonogram/utils/lineSummary";

export const useNonoStore = defineStore("nono", () => {
  const puzzle = reactive([
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  ]);

  // const puzzle = reactive([
  //   [0, 0, 0, 1, 1],
  //   [0, 0, 1, 0, 0],
  //   [1, 1, 0, 1, 0],
  //   [1, 1, 0, 1, 0],
  //   [1, 1, 0, 1, 0],
  // ]);

  const puzzleHeight = computed(() => puzzle.length);
  const puzzleWidth = computed(() => puzzle[0].length);
  const puzzleLine = (item: number) => puzzle[item];
  const puzzleColumn = (item: number): number[] => cols[item];

  const userSolutionPuzzle: Array<Array<number | undefined>> = reactive(
    [...Array(puzzleHeight.value)].map(() =>
      [...Array(puzzleWidth.value)].map(() => undefined)
    )
  );

  const cols: Array<number[]> = [];
  const fillColumns = () => {
    for (let index = 0; index <= puzzleWidth.value - 1; index++) {
      const col: number[] = [];
      for (let colIndex = 0; colIndex <= puzzleHeight.value - 1; colIndex++) {
        const aa = puzzle[colIndex][index];
        col.push(aa);
      }
      cols.push(col);
    }
  };
  fillColumns();

  const puzzleColumns = () => cols;

  const rowSummaryList = computed(() => {
    return puzzle.map((rowList: number[]) => {
      return lineSummary(rowList);
    });
  });

  const maxSummaryRow = computed(() => maxSummaryLength(puzzle));
  const maxSummaryColumn = computed(() => maxSummaryLength(cols));

  return {
    puzzle,
    puzzleLine,
    puzzleHeight,
    rowSummaryList,
    puzzleWidth,
    maxSummaryRow,
    maxSummaryColumn,
    userSolutionPuzzle,
    puzzleColumns,
    puzzleColumn,
  };
});
