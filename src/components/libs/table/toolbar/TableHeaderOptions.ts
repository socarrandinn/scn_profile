export declare type TableHeaderOptions = {
  filter?: {
    disabled?: boolean;
    activeMenu?: boolean;
    defaultFilterKeys?: string[];
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
    menuFilter?: boolean;
  };
};
