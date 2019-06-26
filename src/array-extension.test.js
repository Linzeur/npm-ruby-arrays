import { sample, take } from "./array-extension";

describe("it should return an element random from array", () => {
  it("should return any element of array", () => {
    let arrTemp = [4, 5, 2, 6, 21, 12, 6];
    expect(sample(arrTemp)).not.toBe(undefined);
  });

  it("should return undefined", () => {
    let arrTemp = [];
    expect(sample(arrTemp)).toBe(undefined);
  });
});

describe("it should return the first numbers of elements from array", () => {
  it("should return the first 4 numbers", () => {
    let arrTemp = [4, 5, 2, 6, 21, 12, 6];
    let outcome = take(arrTemp, 4);
    expect(outcome.length).toBe(4);
    expect(outcome[0]).toBe(4);
    expect(outcome[1]).toBe(5);
    expect(outcome[2]).toBe(2);
    expect(outcome[3]).toBe(6);
  });

  it("should return undefined when the number passed is negative", () => {
    let arrTemp = [4, 6];
    expect(take(arrTemp, -4)).toBe(undefined);
  });
});
