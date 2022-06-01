import BealizerInterface from "../interfaces/Bealizer";
import UnserializeInterface from "../interfaces/Unserialize";

class Unserialize implements UnserializeInterface, BealizerInterface {
  string;
  config;

  constructor(string: string | null, config?: { [key: string]: string }) {
    this.string = string;
    this.config = config;
  }

  process() {
    const parts = this.string?.split("&");
    const params = {} as { [key: string]: string };

    for (const part in parts) {
      const [key, value] = part.split("=");
      params[key] = value;
    }

    return JSON.stringify(params);
  }
}

export default function (string: string, config?: { [key: string]: string }) {
  const unserialize = new Unserialize(string, config);
  return unserialize.process();
}
