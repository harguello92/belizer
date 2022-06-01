export default interface Unserialize {
  string: string | null;
  config?: { [key: string]: string };
}
