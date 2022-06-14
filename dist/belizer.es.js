class Serialize {
  constructor(params) {
    this.params = params;
  }
  process() {
    return Object.entries(this.params).map(([key, value]) => `${key}=${value}`).join("&");
  }
}
function serialize(params) {
  const serializer = new Serialize(params);
  return serializer.process();
}
class Unserialize {
  constructor(string = "") {
    this.string = string;
  }
  process() {
    const string = this.string.substring(this.string.indexOf("?") + 1);
    const parts = string.split("&");
    const params = {};
    for (const part of parts) {
      const [key, value] = part.split("=");
      params[key] = value;
    }
    return params;
  }
}
function unserialize(string) {
  const unserialize2 = new Unserialize(string);
  return unserialize2.process();
}
export { serialize as Serialize, unserialize as Unserialize };
