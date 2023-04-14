export type IUserDevices = {
  _id: {
    hash: string;
    ip: string;
  };
  name: string;
  client: string;
  lastUse: Date;
  active: number;
};
