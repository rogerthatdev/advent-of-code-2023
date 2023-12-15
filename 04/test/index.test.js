import { parseInput, secondFunction } from "../index";

describe("test data", () => {
  it("parses input into an array", async () => {
    parseInput("./test/test.txt").then((data) => {
        expect(data).toEqual([ 'testinput1', 'testinput2', '' ]);
    })
  });
  it("returns", async () => {
    secondFunction("x").then((data) => {
        expect(data).toEqual("x");
    })
});
});
