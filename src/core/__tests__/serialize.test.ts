import { Serialize } from "../../main";

const testParams = {
  test1: "test1",
  test2: "test2",
  test3: "test3",
};

describe("Serialize function", () => {
  it("must has a text", () => {
    expect(Serialize(testParams));
  });
});
