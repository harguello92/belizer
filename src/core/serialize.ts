import BealizerInterface from "../interfaces/Bealizer";
import SerializeInterface from "../interfaces/Serialize";

class Serialize implements SerializeInterface, BealizerInterface {
  params;
  config;

  constructor(
    params: { [key: number | string]: string },
    config: {} | { domain: string } = {}
  ) {
    this.params = params;
    this.config = config;
  }

  getQueryString() {
    return Object.entries(this.params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }

  process() {
    const { domain } = this.config;
    const queryString = this.getQueryString();

    if (domain) {
      return domain + "?" + queryString;
    }

    return queryString;
  }
}

export default function (
  params: { [key: number | string]: string },
  config?: {} | { domain: string }
) {
  const serializer = new Serialize(params, config);
  return serializer.process();
}
