import { parseInput, returnMatches, calculateScore } from "../index";

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
    console.log(returnMatches([ [ '41', '48', '' ], [ '83', '86', '48', '' ] ]))
    expect(returnMatches([ [ '41', '48', '' ], [ '83', '86', '48', '' ] ])).toEqual(['48'])
  });
});

describe("calculate scores", () => {
  it("calculate score given 2 matches", () => {
    
    expect(calculateScore([['48', '32', '33', '5'], ['33']])).toEqual(9)
  });
});

describe("end to end", () => {
  it("returns part1 answer 21088", async () => {
    const answer = await parseInput('input.txt').then(data => calculateScore(data.map(returnMatches)))
    expect(answer).toEqual(21088)
  });
});


