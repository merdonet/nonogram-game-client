import { Puzzle } from "./types";

const makeColumnArray = (puzzle: Puzzle, width: number, height: number) => {
  const cols = [];
  for (let index = 0; index <= width - 1; index++) {
    const col = [];

    for (let colIndex = 0; colIndex <= height - 1; colIndex++) {
      const item: number | undefined = puzzle[colIndex][index];
      col.push(item);
    }

    cols.push(col);
  }

  return cols;
};

export { makeColumnArray };
