export interface IJob {
  position: string,
  department: string,
}

export interface IUser {
  firstName: string;
  lastName: string;
  job: IJob
}

export interface IUserResult {
  _id: string,
  firstName: string;
  lastName: string;
  job: IJob
}
