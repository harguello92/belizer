import { Unserialize } from "../../main";

const testQueryString = "https://www.test.com?test1=test1&test2=test2";

describe("Serialize function", () => {
  it("must be a object", () => {
    const unserialized = Unserialize(testQueryString);
    expect(typeof unserialized === "object").toBe(true);
  });

  it("must be well constructed", () => {
    const unserialized = Unserialize(testQueryString);
    expect(unserialized).toEqual({
      test1: "test1",
      test2: "test2",
    });
  });
});
