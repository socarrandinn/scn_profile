export interface ICreateEmailAccount {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IEmailResult {
  email: string;
  token: string;
}
