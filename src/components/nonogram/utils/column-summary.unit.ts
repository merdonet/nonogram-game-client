import { columnSummary, compare } from "./columnSummary";

const list = [1, 1, 0, 1, 0, 0, 1, 1, 1, 1];

describe("columnSummary", () => {
  test("should return summary", () => {
    const expectedSummary = [2, 1, 4];

    expect(columnSummary(list)).toStrictEqual(expectedSummary);
  });
});
