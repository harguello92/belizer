import { Serialize } from "../../main";

const testParams = {
  test1: "test1",
  test2: "test2",
  test3: "test3",
};

describe("Serialize function", () => {
  it("must be string", () => {
    const serialized = Serialize(testParams);
    expect(typeof serialized === "string").toBe(true);
  });

  it("must be well constructed", () => {
    const serialized = Serialize(testParams);
    expect(serialized).toEqual("test1=test1&test2=test2&test3=test3");
  });

  it("must the entire url created", () => {
    const serialized = Serialize(testParams, {
      domain: "https://www.belizer.com",
    });
    expect(serialized).toEqual(
      "https://www.belizer.com?test1=test1&test2=test2&test3=test3"
    );
  });
});
