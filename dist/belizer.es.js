class Serialize {
  constructor(object) {
    this.object = object;
  }
  process() {
    return Object.entries(this.object).map(([key, value]) => `${key}=${encodeURI(value)}`).join("&");
  }
}
function serialize(object) {
  const serializer = new Serialize(object);
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
      params[key] = decodeURI(value);
    }
    return params;
  }
}
function unserialize(string) {
  const unserialize2 = new Unserialize(string);
  return unserialize2.process();
}
export { serialize as Serialize, unserialize as Unserialize };
