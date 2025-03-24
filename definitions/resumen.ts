

export interface ITimeLine{
  dateRange: {
    from: string,
    to:string
  };
  jobTitle: string;
  companyName: string;
  description: string;
  buttonText?: string; 
  className?: string;
  isButtonVisible?: boolean;
  isFirst?: boolean
}