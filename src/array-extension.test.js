import extension from "./array-extension";

describe("it should return an element random from array", () => {
  it("should return any element of array", () => {
    let arrTemp = [4, 5, 2, 6, 21, 12, 6];
    expect(extension(arrTemp)).not.toBe(undefined);
  });

  it("should return undefined", () => {
    let arrTemp = [];
    expect(extension(arrTemp)).toBe(undefined);
  });
});
