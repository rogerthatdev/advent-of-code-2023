import { parseInput, returnMatches } from "../index";

describe("test data", () => {
  it("parses input into an array", async () => {
    parseInput("./test/test.txt").then((data) => {
        expect(data).toEqual([
          [ [ '41', '48' ], [ '83', '86' ] ],
          [ [ '13', '32' ], [ '61', '30' ] ],
          [ [ '1', '21' ], [ '69', '82' ] ]
        ]);
    })
  });
});

describe("finding matches", () => {
  it("returns matches", () => {
    expect(returnMatches([ [ '41', '48', '' ], [ '83', '86', '48', '' ] ])).toEqual(['48'])
  });
});
