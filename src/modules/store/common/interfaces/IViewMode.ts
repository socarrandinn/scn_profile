export type ViewMode = {
  general: boolean;
  address: boolean;
  contacts: boolean;
  social: boolean;
};

export type IAction = (values: (prev: any) => any) => void;
