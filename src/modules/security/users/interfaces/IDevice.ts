export interface IDevice {
  active: number;
  client: string;
  lastUse: string;
  name: string;
  _id: { hash: string; ip: string };
  hash: string;
  ip: string;
}
