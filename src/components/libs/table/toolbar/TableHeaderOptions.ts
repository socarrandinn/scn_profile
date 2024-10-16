export declare type TableHeaderOptions = {
  filter?: {
    disabled?: boolean;
    selected?: boolean;
  };
  search?: {
    disabled?: boolean;
    placeholder?: string;
  };
  actions?: {
    export?: boolean;
    exportAction?: () => void;
    import?: boolean;
    importAction?: () => void;
    create?: boolean;
    createText?: string;
    createAction?: (() => void) | string;
  };
};
