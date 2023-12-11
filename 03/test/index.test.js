import { parseInput, findSymbols, checkIndexForSymbol, findNumericalIndexes, findNumbersInArray } from "../index";

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
  it("returns array of 2 indexes", () => {
    const data = findNumericalIndexes(['.', '5', '1', '.']);
    expect(data).toEqual([1, 2]);
  });
});

describe("finding numbers in an array", () => {
  it("returns an array of 2 numbers", () => {
    const data = findNumbersInArray(['1', '.', '.', '3', '4']);
    console.log(data)
    expect(data).toEqual([1, 34]);
  });
});