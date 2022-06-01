import BealizerInterface from "../interfaces/Bealizer";
import SerializeInterface from "../interfaces/Serialize";

class Serialize implements SerializeInterface, BealizerInterface {
  params;
  config;

  constructor(
    params: { [key: number]: string },
    config?: { [key: string]: string }
  ) {
    console.log(params);
    this.params = params;
    this.config = config;
  }

  process() {
    return `
    <span class="serializeurl__domain">https://www.example.com<span>
    <span class="serializeurl__interrogant">?</span>
    ${Object.entries(this.params)
      .map(([key, value]) => {
        return `
          <span class="serializeurl__key">${key}</span>
          <span class="serializeurl__equal">=</span>
          <span class="serializeurl__value">${value.trim()}</span>
          `;
      })
      .join('<span class="serializeurl__ampersand">&</span>')}`;
  }
}

export default function (
  params: { [key: number]: string },
  config?: { [key: string]: string }
) {
  const serializer = new Serialize(params, config);
  return serializer.process();
}
