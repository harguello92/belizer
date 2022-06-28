import { Serialize } from "../../main";

const testParams = {
  test1: "test 1",
  test2: "test 2",
  test3: "test 3",
};

describe("Serialize function", () => {
  it("must be string", () => {
    const serialized = Serialize(testParams);
    expect(typeof serialized === "string").toBe(true);
  });

  it("must be well constructed", () => {
    const serialized = Serialize(testParams);
    expect(serialized).toEqual("test1=test%201&test2=test%202&test3=test%203");
  });
});
