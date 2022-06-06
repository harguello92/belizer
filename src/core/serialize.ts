import BealizerInterface from "../interfaces/Bealizer";
import SerializeInterface from "../interfaces/Serialize";

class Serialize implements SerializeInterface, BealizerInterface {
  params;
  config;

  constructor(
    params: { [key: number | string]: string },
    config?: { [key: string]: string }
  ) {
    this.params = params;
    this.config = config;
  }

  process() {
    return;
    Object.entries(this.params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }
}

export default function (
  params: { [key: number | string]: string },
  config?: { [key: string]: string }
) {
  const serializer = new Serialize(params, config);
  return serializer.process();
}
