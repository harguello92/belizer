export default interface Serialize {
  params: { [key: number]: string };
  config?: { [key: string]: string };
}
