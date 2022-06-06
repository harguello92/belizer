import { Unserialize } from "../../main";

const testQueryString = "test1=test1&test2=test2";

describe("Serialize function", () => {
  it("must unserialize the query string", () => {
    expect(Unserialize(testQueryString));
  });
});
