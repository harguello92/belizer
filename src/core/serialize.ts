import BealizerInterface from "../interfaces/Bealizer";
import SerializeInterface from "../interfaces/Serialize";
class Serialize implements SerializeInterface, BealizerInterface {
  object;

  constructor(object: { [key: number | string]: string }) {
    this.object = object;
  }

  process() {
    return Object.entries(this.object)
      .map(([key, value]) => `${key}=${encodeURI(value as string)}`)
      .join("&");
  }
}

export default function (object: { [key: number | string]: string }) {
  const serializer = new Serialize(object);
  return serializer.process();
}
