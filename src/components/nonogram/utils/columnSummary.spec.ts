import { describe, expect, test } from "vitest";
import { lineSummary, compare } from "./lineSummary";

const list = [1, 1, 0, 1, 0, 0, 1, 1, 1, 1];

describe("lineSummary", () => {
  test("should return summary", () => {
    const expectedSummary = [2, 1, 4];

    expect(lineSummary(list)).toStrictEqual(expectedSummary);
  });
});
