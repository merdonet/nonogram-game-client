import { defineStore } from "pinia";
import { SolutionPuzzle } from "./types";
import { useNonoStore } from "./nonoStore";
import { computed, reactive, ref } from "vue";
import { makeColumnArray } from "./utility";

export const useSolutionStore = defineStore("solution", () => {
  const fillDelay = 500;
  const { puzzle, puzzleColumns, puzzleHeight, puzzleWidth } = useNonoStore();

  const lives = ref<number>(3);

  const solution: SolutionPuzzle = reactive(
    [...Array(puzzleHeight)].map(() =>
      [...Array(puzzleWidth)].map(() => undefined)
    )
  );

  const getLives = computed(() => lives);

  const puzzleLine = (item: number) => solution[item];

  const compareRow = (row: number) => {
    const line = puzzle[row].map((item) => item);
    const solutionLine = solution[row].map((item: number | undefined) =>
      item == undefined || item == 0 ? 0 : 1
    );
    return line.toString() == solutionLine.toString();
  };

  const compareColumn = (col: number) => {
    const column = puzzleColumns[col].map((item) => item);
    const solutionColumn = solutionColumns.value[col].map(
      (item: number | undefined) => (item == undefined || item == 0 ? 0 : 1)
    );

    console.log("column", column);
    console.log("solution column", solutionColumn);

    console.log(
      "column comparation",
      column.toString() == solutionColumn.toString()
    );
    return column.toString() == solutionColumn.toString();
  };

  const solutionColumns = computed(() =>
    // @ts-ignore
    makeColumnArray(solution, puzzleWidth, puzzleHeight)
  );

  const fillLine = (row: number) => {
    setTimeout(() => {
      solution[row] = puzzle[row];
    }, fillDelay);
  };

  const fillColumn = (col: number) => {
    setTimeout(() => {
      for (let i = 0; i < solution.length; i++) {
        if (solutionColumns.value[col][i] == undefined) solution[i][col] = 0;
      }
    }, fillDelay);
  };

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

    compareColumn(column);

    if (compareRow(row)) fillLine(row);
    if (compareColumn(column)) fillColumn(column);
  };

  return {
    lives,
    getLives,
    solution,
    puzzleLine,
    updateSolution,
    compareRow,
    solutionColumns,
  };
});
