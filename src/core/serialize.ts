import BealizerInterface from "../interfaces/Bealizer";
import SerializeInterface from "../interfaces/Serialize";
class Serialize implements SerializeInterface, BealizerInterface {
  params;

  constructor(params: { [key: number | string]: string }) {
    this.params = params;
  }

  process() {
    return Object.entries(this.params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }
}

export default function (params: { [key: number | string]: string }) {
  const serializer = new Serialize(params);
  return serializer.process();
}
