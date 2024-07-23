export interface IProductAction {
  job: string;
}

export interface IHandleErrorProductImport {
  status: string;
  reason: {
    response: {
      message: string;
      product: any;
    };
    status: number;
    options: any;
    message: string;
    name: string;
  };
}
