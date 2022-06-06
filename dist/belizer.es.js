var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class Serialize {
  constructor(params, config) {
    __publicField(this, "params");
    __publicField(this, "config");
    this.params = params;
    this.config = config;
  }
  process() {
    return;
  }
}
function serialize(params, config) {
  const serializer = new Serialize(params, config);
  return serializer.process();
}
class Unserialize {
  constructor(string, config) {
    __publicField(this, "string");
    __publicField(this, "config");
    this.string = string;
    this.config = config;
  }
  process() {
    var _a;
    const parts = (_a = this.string) == null ? void 0 : _a.split("&");
    const params = {};
    for (const part in parts) {
      const [key, value] = part.split("=");
      params[key] = value;
    }
    return JSON.stringify(params);
  }
}
function unserialize(string, config) {
  const unserialize2 = new Unserialize(string, config);
  return unserialize2.process();
}
export { serialize as Serialize, unserialize as Unserialize };
