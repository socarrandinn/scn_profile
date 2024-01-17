type TAudience = {
  target: string;
  template: string;
};
export interface INotification {
  enabled: boolean;
  audience: TAudience[];
}
