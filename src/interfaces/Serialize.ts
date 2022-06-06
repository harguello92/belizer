export default interface Serialize {
  params: { [key: number | string]: string };
  config: {} | { domain: string };
}
