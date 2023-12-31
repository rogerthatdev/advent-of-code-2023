import { parseInput, findSymbols, checkIndexForSymbol, findNumericalIndexes, findNumbersInArray, groupConsecutiveNumbers, answerPart1, findGearIndexes, answerPart2 } from "../index";

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
  }),
    it("works with symbols in the array", () => {
      const data = findNumericalIndexes(['*', '5', '1', '*', '5']);
      expect(data).toEqual([1, 2, 4]);
    });
});

describe("grouping consecutive numbers", () => {
  it("returns groups of consecutive numbers", () => {
    const data = groupConsecutiveNumbers([1, 2, 4, 5, 9]);
    expect(data).toEqual([[1, 2], [4, 5], [9]]);
  })
});

describe("numbers and their indexes in an array", () => {
  it("returns an array of objects with numbers and their indexes", () => {
    const data = findNumbersInArray(['.', '5', '1', '.', '5']);
    expect(data[0]).toEqual({ indexes: [1, 2], value: 51 });
    expect(data[1]).toEqual({ indexes: [4], value: 5 });
  })
  it("works with symbols in the array", () => {
    const data = findNumbersInArray(['*', '5', '1', '.', '5']);
    expect(data[0]).toEqual({ indexes: [1, 2], value: 51 });
    expect(data[1]).toEqual({ indexes: [4], value: 5 });
  })
});

describe("part 1 solution", () => {
  it("returns correct answer for sample data", async () => {
    const data = await answerPart1('./test.txt');
    expect(data).toEqual(4361);
  })

});

describe("gear indexes", () => {
  it('returns array of indexes', () => {
    const data = findGearIndexes(['.', '.', '*']);
    expect(data).toEqual([2]);
  })
})

describe("part 2 solution", () => {
  it("returns correct answer for sample data", async () => {
    const data = await answerPart2('./test.txt');
    expect(data).toEqual(467835);
  })

});