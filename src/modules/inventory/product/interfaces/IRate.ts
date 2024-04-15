export interface IReview {
  user: {
    fullName: string;
    avatar: {
      thumb: string;
      url: string;
      width: number;
      height: number;
    };
    _id: string;
  };
}
