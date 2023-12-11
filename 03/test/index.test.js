import { parseInput, findSymbols, checkIndexForSymbol, findNumericalIndexes } from "../index";

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
  it("returns an array", () => {
    const data = findNumericalIndexes(['.', '5', '1', '.']);
    expect(data).toEqual([1, 2]);
  });
});