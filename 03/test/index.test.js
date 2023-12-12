import { parseInput, findSymbols, checkIndexForSymbol, findNumericalIndexes, findNumbersInArray, groupConsecutiveNumbers } from "../index";

describe("findSymbols", () => {
  it("returns an array", () => {
    const data = findSymbols(['.', '.', '=', '.']);
    expect(data).toEqual([2]);
  });
});

describe("check index for symbol", () => {
  it("returns true for index 2 in ['.', '.', '=', '.']", () => {
    const data = checkIndexForSymbol(['.', '.', '=', '.'], 2);
    expect(data).toEqual(true);
  });

  it("returns false for index 2 in ['.', '.', '.', '.']", () => {
    const data = checkIndexForSymbol(['.', '.', '.', '.'], 2);
    expect(data).toEqual(false);
  });
});

describe("finding numerical indexes", () => {
  it("returns array of 3 indexes", () => {
    const data = findNumericalIndexes(['.', '5', '1', '.', '5']);
    expect(data).toEqual([1, 2, 4]);
  });
});

describe("grouping consecutive numbers", () => {
  it("returns groups of consecutive numbers", () => {
    const data = groupConsecutiveNumbers([1, 2, 4, 5, 9]);
    expect(data).toEqual([[1, 2], [4, 5], [9]]);
  })
})
