import BealizerInterface from "../interfaces/Bealizer";
import UnserializeInterface from "../interfaces/Unserialize";

class Unserialize implements UnserializeInterface, BealizerInterface {
  string;

  constructor(string: string | null = "") {
    this.string = string;
  }

  process() {
    const string = this.string.substring(this.string.indexOf("?") + 1);
    const parts = string.split("&");
    const params = {} as { [key: string]: string };

    for (const part of parts) {
      const [key, value] = part.split("=");
      params[key] = decodeURI(value);
    }

    return params;
  }
}

export default function (string: string) {
  const unserialize = new Unserialize(string);
  return unserialize.process();
}
