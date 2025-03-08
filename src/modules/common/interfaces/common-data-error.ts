export interface IDataSummary {
  total: number;
  success: number;
  error: number;
  errors: number;
  dataError: DataError[];
}

export interface DataError {
  status: string;
  reason: Reason;
}

export interface Reason {
  response: Response;
  status: number;
  options: Options;
  message: string;
  name: string;
}

export interface Options {
  _id: string;
}

export interface Response {
  message: string;
}
